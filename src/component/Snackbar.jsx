import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

// Snackbar가 위로 슬라이드되도록 설정
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function MySnackbar({ open, onClose }) {
  return (
    <Snackbar
      className='snackbar'
      open={open}
      onClose={onClose}
      message="클립보드에 복사되었습니다 !"
      autoHideDuration={1500} // 1.5초 후 자동 닫힘
      TransitionComponent={SlideTransition} // 위로 슬라이드 효과
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      ContentProps={{
        sx: {
          backgroundColor: 'white',
          color: '#333',
          fontSize: '16px',
          fontFamily: 'suiteRegular',
          borderRadius: '8px',
          border: '1px solid #fff',
          padding: '10px 20px',
          boxShadow: '0 4px 3px rgba(0,0,0,0.3)',
        },
      }}
    />
  );
}
