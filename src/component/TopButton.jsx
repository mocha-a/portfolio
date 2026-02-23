import { useEffect, useState } from "react";

function TopButton({ introRef }) {
    const [bottomOffset, setBottomOffset] = useState(40); // 버튼 위치 (footer 겹침 방지)
    const [show, setShow] = useState(false); // 버튼 보일지 여부

    // 클릭 시 페이지 최상단으로 스크롤
    const upScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // intro 영역이 화면에 보이는지 감지 → 보이면 버튼 숨김
    useEffect(() => {
    if (!introRef?.current) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
        setShow(!entry.isIntersecting); // intro 영역 벗어나면 버튼 표시
        },
        { threshold: 0.1 } // 10% 이상 보이면 '보인다'고 판단
    );

    observer.observe(introRef.current);
    return () => observer.disconnect();
    }, [introRef]);
    
    // footer가 화면에 가까워지면 버튼 위치 위로 조정
    useEffect(() => {
    const handleScroll = () => {
        const footer = document.querySelector("footer");
        if (!footer) return;

        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop < windowHeight) {
        const overlap = windowHeight - footerTop;
        setBottomOffset(overlap + 40); // 겹치지 않도록 offset 증가
        } else {
        setBottomOffset(40); // 기본 위치
        }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!show) return null; // intro 보이면 버튼 숨김

    return (
    <div className='top_btn' style={{ bottom: bottomOffset }}>
        <div className='top-btn' onClick={upScroll}>
        <img src='/imgs/_icons/topButton.svg' alt=""/>
        </div>
    </div>
    )
}

export default TopButton