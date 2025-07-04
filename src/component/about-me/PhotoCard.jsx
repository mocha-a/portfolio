import { useEffect, useState } from "react";
import Dot from "../Dot"
import SpeechBubble from "./SpeechBubble";

import 'aos/dist/aos.css';

function PhotoCard() {
    const photoList = [
        { color: '#DC78A1', src: '/imgs/astronaut.jpg', alt: '우주인', className: 'astronaut', text: '새로운 것을 두려워하지 않고,\n시도하며 배우는 걸 즐깁니다.'},
        { color: '#53C3BD', src: '/imgs/beach.jpg', alt: '해변', className: 'beach', text: '공간에 상관없이, 내가 좋아하는 일에 깊이\n몰입할 줄 아는 사람입니다.'},
        { color: '#F6AA88', src: '/imgs/typing.gif', alt: '타이핑', className: 'typing', text: '계속 시도하고, 실패하고,\n다시 도전합니다.'},
        { color: '#B0B0D8', src: '/imgs/sun-glitter.jpg', alt: '윤슬', className: 'sun-glitter', text: '저의 코드가 사용자에게 윤슬처럼\n잔잔히 반짝이는 경험을 선사하길 바랍니다.'},
    ];

    const [activeIndex, setActiveIndex] = useState(null); // 현재 활성화된 말풍선 인덱스
    const [isMobile, setIsMobile] = useState(false);  // 모바일 여부 판단 상태

    useEffect(() => {
        // 모바일 여부 체크 함수
        const checkIsMobile = () => setIsMobile(window.innerWidth <= 480);
        checkIsMobile(); // 최초 실행
        window.addEventListener("resize", checkIsMobile); // 리사이즈 시 다시 체크
        return () => window.removeEventListener("resize", checkIsMobile); // 클린업
    }, []);
    
    // 모바일일 때 카드 클릭 시 말풍선 토글
    const mobileClick = (index) => {
        if (isMobile) {
            setActiveIndex((prev) => (prev === index ? null : index));
        }
    };

    return (
        <div className="photocard_container">
        {photoList.map((item, index) => (
            <div
            key={index}
            className={`photo_card ${item.className}`}
            onClick={() => mobileClick(index)}
            data-aos="fade"
            data-aos-delay={index * 100}
            >
            <div className="photo_layout">
                <img className={item.className} src={item.src} alt={item.alt} />
            </div>
            <div className={`text_layout ${item.className} ${
                            isMobile
                            ? activeIndex === index
                                ? 'show-bubble'
                                : 'hide-bubble'
                            : 'show-bubble'
                        }` }>
                <Dot color={item.color} />
                {(isMobile ? activeIndex === index : true) && (
                <SpeechBubble
                    className={item.className}
                    color={item.color}
                    text={item.text}
                />
                )}
            </div>
            </div>
        ))}
        </div>
    );
}

export default PhotoCard