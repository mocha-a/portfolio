import { useEffect, useState } from "react";

function TopButton({ introRef }) {
    const [bottomOffset, setBottomOffset] = useState(40);
    const [show, setShow] = useState(false); // 버튼 보일지 여부

    const upScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
    if (!introRef?.current) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
        setShow(!entry.isIntersecting); // intro가 보이면 숨김
        },
        { threshold: 0.1 }
    );

    observer.observe(introRef.current);
    return () => observer.disconnect();
    }, [introRef]);
    

    
    useEffect(() => {
    const handleScroll = () => {
        const footer = document.querySelector("footer");
        if (!footer) return;

        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop < windowHeight) {
        const overlap = windowHeight - footerTop;
        setBottomOffset(overlap + 40);
        } else {
        setBottomOffset(40);
        }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!show) return null; // 표지 보일 땐 Top 버튼 숨김

    return (
    <div className='top_btn' style={{ bottom: bottomOffset }}>
        <div className='top-btn' onClick={upScroll}>
        <img src='/imgs/_icons/topButton.svg'/>
        </div>
    </div>
    )
}

export default TopButton