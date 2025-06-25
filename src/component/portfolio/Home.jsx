import { useRef } from 'react';

import AboutMe from './AboutMe'
import TrainingProgram from './TrainingProgram'
import Skills from './Skills'
import Projects from './Projects'
import IntroSection from './IntroSection'
import SolidLine from '../SolidLine'
import Marquee from '../Marquee'
import TopButton from '../TopButton'

function Home() {
    const scrollRef = useRef(null); 
    const introRef = useRef(null);

    return (
        <>
        <IntroSection scrollRef={scrollRef} ref={introRef}/>
        <div ref={scrollRef}><AboutMe/></div>
        <SolidLine className='firstSolidLine' color='#D6D6E7'/>
        <TrainingProgram />
        <SolidLine className='secondSolidLine' color='#D6D6E7'/>
        <Skills/>
        <Marquee/>
        <Projects/>
        <TopButton introRef={introRef} />
        </>
    )
}

export default Home