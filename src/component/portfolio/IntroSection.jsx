import { forwardRef } from 'react'; // ref 전달을 위해 forwardRef 사용
import ScrollArrowIcon from '../_icon/ScrollArrowIcon'

// ref를 부모로부터 전달받기 위해 forwardRef 사용
const IntroSection = forwardRef(({ scrollRef }, ref) => {
    // 스크롤 버튼 클릭 시 AboutMe 위치로 부드럽게 이동
    const handleScroll = () => {
        const element = scrollRef.current; // 스크롤 대상 엘리먼트
        const headerOffset = 85; // 헤더 높이 보정값
        const elementPosition = element?.getBoundingClientRect().top || 0; // 대상 위치
        const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth', // 부드러운 스크롤
        });
    };

    return (
        <div className='intro' ref={ref}>
            <div className='console_log'>
                <div className='rocket'>
                    <p className='variable'>
                        <span className='blue'>const </span>
                        <span className='plum'>dev </span>
                        <span className='pink'>= </span>
                        <span className='yellow'>"안지현"</span>;
                    </p>
                    <p className='rocket_container'><img src="/imgs/rocket.gif" alt="로켓" /></p>
                </div>
                <p>console.
                    <span className='green'>log</span>(
                </p>
                <p>
                    <span className='yellow'>&nbsp;`</span>
                    신입 프론트엔드 개발자
                    <span className='pink'>{' ${'}</span>
                    <span className='plum'>dev</span>
                    <span className='pink'>{'}'}</span>, 첫 렌더링을 시작합니다 !
                    <span className='yellow'>`</span>
                </p>
                <p>);</p>
            </div>
            <button onClick={handleScroll} className="scroll">
                <p>scroll</p>
                <ScrollArrowIcon />
            </button>
        </div>
    )
});

export default IntroSection