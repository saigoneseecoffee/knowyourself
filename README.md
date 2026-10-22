# knowyourself

Saigonesee – 15 bài đánh giá tính cách, lãnh đạo và động lực cho nhân viên. Nhân viên nhập tên, chọn tiếng Việt hoặc English, làm bài và xem kết quả ngay. Kết quả được gửi về Google Sheet của quán.

## Các bài

1. 16 kiểu tính cách · 2. Big Five · 3. Trung thực – Khiêm tốn (HEXACO) · 4. Enneagram · 5. DISC · 6. Vai trò trong nhóm (Belbin) · 7. Lãnh đạo theo tình huống · 8. 6 phong cách lãnh đạo (Goleman) · 9. Xử lý xung đột (Thomas-Kilmann) · 10. Bốn nhóm thế mạnh · 11. Phẩm chất (VIA) · 12. EQ · 13. Grit · 14. 5 ngôn ngữ ghi nhận · 15. Sở thích nghề (RIASEC)

Câu hỏi là bản rút gọn tự viết theo từng mô hình, không phải bộ câu hỏi chính thức. Dùng để hiểu người và giao tiếp, không dùng để quyết định tuyển dụng hay cho nghỉ việc.

## Bật GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → Branch: `main`, thư mục `/ (root)` → Save. Link sẽ là `https://saigoneseecoffee.github.io/knowyourself/`.

## Nối với Google Sheet (làm một lần)

1. Mở Google Sheet **Saigonesee – Hồ sơ nhân sự (kết quả đánh giá)** → Extensions → Apps Script.
2. Xóa code mẫu, dán toàn bộ nội dung file `apps-script/Code.gs`, bấm Save.
3. Deploy → New deployment → loại **Web app**. Execute as: **Me**. Who has access: **Anyone**. Bấm Deploy và cho phép quyền.
4. Copy **Web app URL** (dạng `https://script.google.com/macros/s/.../exec`).
5. Mở `index.html` trong repo này, tìm dòng `const SCRIPT_URL="";` và dán URL vào giữa hai dấu ngoặc kép. Commit.

Từ đó, mỗi lần nhân viên bấm "Xem kết quả", kết quả được ghi vào hai trang **Web - Tong hop** (mỗi người một dòng) và **Web - Chi tiet** (điểm từng chiều).

Nếu chưa dán URL, trang vẫn chạy được: nhân viên bấm "Sao chép kết quả" rồi gửi tin nhắn cho quản lý.
