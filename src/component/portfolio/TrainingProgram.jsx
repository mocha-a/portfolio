import SolidLine from '../SolidLine'
import Dot from '../Dot'
import trainingPrograms from '../../json/trainingPrograms.json';

import '../../style/trainingProgram/trainingProgram.scss'

function TrainingProgram() {
  return (
    <div className='trainingProgram_container'>
      <h2 className='trainingProgram'>TrainingProgram</h2>
        { trainingPrograms.map(item =>
        <div className='tranining_flex'>
          <SolidLine className='tranining_line' width='100px'/>
            <div className='tranining_content'>
              <p className='tranining_period'>{item.period}</p>
              <p className='tranining_institution'>{item.institution}</p>
              <h3>{item.title}</h3>
              { item.details.map(detail =>
                <div className='tranining_detail'>
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