import { useEffect, useState } from 'react';
import Anji1 from './_icon/Anji1'
import Anji2 from './_icon/Anji2'

function Header() {
    const [background, setBackground] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setBackground(window.scrollY > 0); // 0보다 크면 배경 ON
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
    return (
        <div className={`header ${background ? "background" : ""}`}>
            <h2 className='anji_logo'><Anji1/>anji<Anji2/></h2>
            <a href='https://github.com/mocha-a'>
                <div className='button'>see on github</div>
            </a>
        </div>
    )
}

export default Header