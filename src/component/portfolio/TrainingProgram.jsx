import Dot from '../Dot'
import SolidLine from '../SolidLine'
import trainingPrograms from '../../json/trainingPrograms.json';

import 'aos/dist/aos.css';
import '../../style/trainingProgram/trainingProgram.scss'

function TrainingProgram() {
  return (
    <div className='trainingProgram_container'>
      <h2 className='trainingProgram' data-aos="fade-up">TrainingProgram</h2>
        { trainingPrograms.map((item, i) =>
        <div className='tranining_flex' key={i}>
          <SolidLine className='tranining_line' width='100px'/>
            <div className='tranining_content'>
              <p className='tranining_period'>{item.period}</p>
              <p className='tranining_institution'>{item.institution}</p>
              <h3>{item.title}</h3>
              { item.details.map((detail, i2) =>
                <div className='tranining_detail' key={i2}>
                  <Dot color='#F0BFD3' size='10px'/>
                  <p>{detail}</p>
                </div>
              )}
            </div>
        </div>
        ) }
    </div>
  )
}

export default TrainingProgram