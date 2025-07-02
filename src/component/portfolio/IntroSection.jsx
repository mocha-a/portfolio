import { forwardRef } from 'react';
import ScrollArrowIcon from '../_icon/ScrollArrowIcon'

const IntroSection = forwardRef(({ scrollRef }, ref) => {
    const handleScroll = () => {
        const element = scrollRef.current;
        const headerOffset = 85;
        const elementPosition = element?.getBoundingClientRect().top || 0;
        const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
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