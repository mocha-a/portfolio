import { useState } from "react";
import MySnackbar from "./Snackbar";
import ArrowTooltips from "./Tooltip";


function Footer() {
  const [snackbarOpen, setSnackbarOpen] = useState(false); // 스낵바 열림 여부 상태

  const handleSnackbarOpen = () => setSnackbarOpen(true); // 복사 시 스낵바 열기
  const handleSnackbarClose = () => setSnackbarOpen(false); // 스낵바 닫기

  return (
    <footer className="footer">
      <div>
        <p>저의 포트폴리오를 흥미롭게 보셨다면,</p>
        <p>귀사의 비전에 함께 성장하고 기여할 수 있기를 바랍니다.</p>
        <p>읽어주셔서 감사합니다.</p>
      </div>
      <div className="footer_right">
        <div className="contact">
          <span><ArrowTooltips title='Phone' content='010-6485-2563' onCopy={handleSnackbarOpen} /></span>
          <span><ArrowTooltips title='Email' content='anji64852563@gmail.com' onCopy={handleSnackbarOpen}/></span>
          <span><ArrowTooltips title='Github' /></span>
        </div>
        <div>&copy;2025 AnJihyeon. All Rights Reserved.</div>
      </div>

      {/* 복사 완료 시 보여줄 Snackbar 알림 */}
      <MySnackbar open={snackbarOpen} onClose={handleSnackbarClose} />
    </footer>
  );
}

export default Footer
