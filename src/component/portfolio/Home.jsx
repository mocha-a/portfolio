import { useEffect, useRef } from 'react';
import AOS from 'aos';
import AboutMe from './AboutMe'
import TrainingProgram from './TrainingProgram'
import Skills from './Skills'
import Projects from './Projects'
import IntroSection from './IntroSection'
import SolidLine from '../SolidLine'
import Marquee from '../Marquee'
import TopButton from '../TopButton'

function Home() {
    const scrollRef = useRef(null); // AboutMe로 스크롤 이동 시 사용
    const introRef = useRef(null); // 인트로 섹션 위치 참조 (TopButton에서 사용)

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,  // 한 번만 애니메이션 실행
        });
    }, []);

    return (
        <>
            <IntroSection scrollRef={scrollRef} ref={introRef}/> {/* 인트로(첫 화면), 버튼 클릭 시 AboutMe로 이동 */}
            <div ref={scrollRef}><AboutMe/></div> {/* 자기소개 섹션 */}
            <SolidLine className='firstSolidLine' color='#D6D6E7'/>
            <TrainingProgram /> {/* 교육 과정 소개 섹션 */}
            <SolidLine className='secondSolidLine' color='#D6D6E7'/>
            <Projects/> {/* 프로젝트 소개 섹션 */}
            <Marquee/> {/* 마퀴(흘러가는 키워드) 효과 */}
            <Skills/> {/* 기술 스택 섹션 */}
            <TopButton introRef={introRef} /> {/* 상단으로 이동 버튼 */}
        </>
    )
}

export default Home