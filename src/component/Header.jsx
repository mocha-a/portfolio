import { useEffect, useState } from 'react';
import Anji1 from './_icon/Anji1'
import Anji2 from './_icon/Anji2'

function Header() {
    const [background, setBackground] = useState(false); // 스크롤 시 배경 활성 여부 상태

    useEffect(() => {
        const onScroll = () => {
            setBackground(window.scrollY > 0); // 0보다 크면 배경 ON
        };
    
        window.addEventListener("scroll", onScroll); // 스크롤 이벤트 등록
        return () => window.removeEventListener("scroll", onScroll); // 컴포넌트 언마운트 시 정리
    }, []);
    
    return (
        <header className={`header ${background ? "background" : ""}`}>
            <h2 className='anji_logo'><Anji1/>anji<Anji2/></h2>
            <a href='https://github.com/mocha-a'>
                <div className='button'>see on github</div>
            </a>
        </header>
    )
}

export default Header