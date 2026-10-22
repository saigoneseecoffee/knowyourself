// Saigonesee – Know Yourself: nhận kết quả từ trang GitHub Pages và ghi vào Google Sheet.
// Dán file này vào Extensions → Apps Script của Google Sheet "Saigonesee – Hồ sơ nhân sự".

const SUMMARY_SHEET = 'Web - Tong hop';
const DETAIL_SHEET = 'Web - Chi tiet';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const name = String(d.name || '').trim().slice(0, 80);
    if (!name || !d.testName) return json({ ok: false, error: 'missing name or test' });
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const now = new Date();

    // Tổng hợp: mỗi người một dòng, mỗi bài một cột
    let sum = ss.getSheetByName(SUMMARY_SHEET);
    if (!sum) sum = ss.insertSheet(SUMMARY_SHEET);
    const tests = Array.isArray(d.tests) ? d.tests.map(String) : [];
    const header = ['Tên', 'Cập nhật', 'Ngôn ngữ'].concat(tests);
    if (sum.getLastRow() === 0 || sum.getRange(1, 1).getValue() !== 'Tên' || sum.getLastColumn() < header.length) {
      sum.getRange(1, 1, 1, header.length).setValues([header]).setFontWeight('bold');
      sum.setFrozenRows(1);
      sum.setFrozenColumns(1);
    }
    const heads = sum.getRange(1, 1, 1, sum.getLastColumn()).getValues()[0];
    let col = heads.indexOf(String(d.testName)) + 1;
    if (col === 0) {
      col = heads.length + 1;
      sum.getRange(1, col).setValue(String(d.testName)).setFontWeight('bold');
    }
    const last = sum.getLastRow();
    let row = 0;
    if (last > 1) {
      const names = sum.getRange(2, 1, last - 1, 1).getValues();
      for (let i = 0; i < names.length; i++) {
        if (String(names[i][0]).trim().toLowerCase() === name.toLowerCase()) { row = i + 2; break; }
      }
    }
    if (!row) { row = last + 1; sum.getRange(row, 1).setValue(name); }
    sum.getRange(row, 2, 1, 2).setValues([[now, d.lang === 'en' ? 'English' : 'Tiếng Việt']]);
    sum.getRange(row, col).setValue(String(d.summary || ''));

    // Chi tiết: mỗi chiều đo một dòng
    let det = ss.getSheetByName(DETAIL_SHEET);
    if (!det) {
      det = ss.insertSheet(DETAIL_SHEET);
      det.getRange(1, 1, 1, 6).setValues([['Thời gian', 'Tên', 'Bài', 'Kết quả', 'Chiều đo', 'Điểm (%)']]).setFontWeight('bold');
      det.setFrozenRows(1);
    }
    const dims = Array.isArray(d.dims) ? d.dims : [];
    if (dims.length) {
      const rows = dims.map(x => [now, name, String(d.testName), String(d.summary || ''), String(x[0]), Number(x[1]) || 0]);
      det.getRange(det.getLastRow() + 1, 1, rows.length, 6).setValues(rows);
    }
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json({ ok: true, app: 'knowyourself' });
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
