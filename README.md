# knowyourself

Saigonesee – 18 bài đánh giá tính cách, lãnh đạo, động lực và kỹ năng tại quán cho nhân viên. Nhân viên nhập tên, chọn tiếng Việt hoặc English, làm bài và xem kết quả ngay. Kết quả được gửi về Google Sheet của quán.

## Các bài

1. 16 kiểu tính cách · 2. Big Five · 3. Trung thực – Khiêm tốn (HEXACO) · 4. Enneagram · 5. DISC · 6. Vai trò trong nhóm (Belbin) · 7. Lãnh đạo theo tình huống · 8. 6 phong cách lãnh đạo (Goleman) · 9. Xử lý xung đột (Thomas-Kilmann) · 10. Bốn nhóm thế mạnh · 11. Phẩm chất (VIA) · 12. EQ · 13. Grit · 14. 5 ngôn ngữ ghi nhận · 15. Sở thích nghề (RIASEC) · 16. Điều gì tạo động lực cho bạn · 17. Mức căng thẳng và nóng giận (Frazzle Factor) · 18. Xử lý tình huống tại quán

Câu hỏi là bản rút gọn tự viết theo từng mô hình, không phải bộ câu hỏi chính thức.

Bài 18 khác 17 bài kia: đây là bài trắc nghiệm có đáp án đúng, lấy từ thư viện 90 câu (`BANK_QT` và `BANK_REST` trong `index.html`).

- **Thư viện:** 50 câu an toàn thực phẩm theo kiến thức Food Handler / Certified Food Protection Manager (FDA Food Code) và luật dị ứng Massachusetts (105 CMR 590), cộng 10 câu cho mỗi nhóm tính tiền, công thức, chi phí và hàng hóa, xử lý khi đông khách.
- **Bài kiểm tra:** mỗi người bốc ngẫu nhiên 20 câu (8 an toàn thực phẩm + 3 mỗi nhóm khác), thứ tự đáp án được xáo, giới hạn 15 phút, làm một lần. Kết quả chỉ hiện điểm theo nhóm, không hiện đáp án.
- **Ôn tập an toàn thực phẩm:** không tính giờ, không lưu điểm; trả lời xong hiện đáp án đúng và giải thích. Bị ẩn khi đang làm bài kiểm tra.
- **Thêm câu hỏi:** thêm một dòng vào `BANK_QT` hoặc `BANK_REST` theo định dạng `[mã, nhóm, chủ đề, câu VI, [4 đáp án VI, đáp án đúng đứng đầu], câu EN, [4 đáp án EN], giải thích VI, giải thích EN]`. App tự xáo đáp án.

Đây không phải bài IQ hay Wonderlic, và không thay cho chứng chỉ chính thức. Dùng để hiểu người và giao tiếp, không dùng để quyết định tuyển dụng hay cho nghỉ việc.

## Bật GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → Branch: `main`, thư mục `/ (root)` → Save. Link sẽ là `https://saigoneseecoffee.github.io/knowyourself/`.

## Nối với Google Sheet (làm một lần)

1. Mở Google Sheet **Saigonesee – Hồ sơ nhân sự (kết quả đánh giá)** → Extensions → Apps Script.
2. Xóa code mẫu, dán toàn bộ nội dung file `apps-script/Code.gs`, bấm Save.
3. Deploy → New deployment → loại **Web app**. Execute as: **Me**. Who has access: **Anyone**. Bấm Deploy và cho phép quyền.
4. Copy **Web app URL** (dạng `https://script.google.com/macros/s/.../exec`).
5. Mở `index.html` trong repo này, tìm dòng `const SCRIPT_URL="…";` và thay bằng URL mới nếu deploy lại. Commit. (URL hiện tại đã được gắn sẵn.)

Từ đó, mỗi lần nhân viên bấm "Xem kết quả", kết quả được ghi vào hai trang **Web - Tong hop** (mỗi người một dòng) và **Web - Chi tiet** (điểm từng chiều).

Nếu chưa dán URL, trang vẫn chạy được: nhân viên bấm "Sao chép kết quả" rồi gửi tin nhắn cho quản lý.
