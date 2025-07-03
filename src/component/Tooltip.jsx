import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontFamily: 'suiteRegular',
    textTransform: 'none',
    fontWeight: 'normal',
    backgroundColor: 'white',
    color: '#333',
    fontSize: 18, // 기본값
    padding: '12px 16px',
    borderRadius: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',

    // 반응형
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: 'white',
    '&::before': {
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    },
  },
}));

export default function ArrowTooltips({ title, content, onCopy }) {

  const handleClick = () => {
    if (content) {
      navigator.clipboard.writeText(content) // 클립보드 복사
        .then(() => {
          onCopy?.(); // 복사 완료 시 부모에서 Snackbar 띄우게 전달
        });
    }
  };

  return (
    <>
      <CustomTooltip title={content} placement="top">
        <Button
        onClick={handleClick}
          sx={{
            minWidth: 0,
            padding: '0',
            fontSize: '20px',
            fontFamily: 'suiteRegular',
            textTransform: 'none',
            fontWeight: 'normal',
            color: '#000',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&:active': {
              backgroundColor: '#B0B0D8',
            },
          }}
        >
          {title}
        </Button>
      </CustomTooltip>
    </>
  );
}
