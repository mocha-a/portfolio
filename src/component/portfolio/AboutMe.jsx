import PhotoCard from '../about-me/PhotoCard'

import 'aos/dist/aos.css';
import '../../style/aboutme/aboutme.scss'

function AboutMe() {
  return (
    <div className='aboutme_container'>
      <h2 className='aboutme' data-aos="fade-up">About Me</h2>
      <div className='aboutme_content'>
        <PhotoCard/>
        <div className='text'>
          <p>에디터에서 작성한 텍스트가 그대로 화면에 실현되는게 너무 신기했습니다.<br/>
          그 요술이 저를 프론트엔드 개발의 길로 이끌었습니다.</p>
          <p>개발을 배우면서 단순히 눈에 보이는 걸 만드는 것보다,<br/>
          사용자 입장에서 생각하는 태도가 더 중요하다는 걸 점점 깨닫고 있습니다.<br/>
          그래서 기능을 구현할 때마다 '이 화면이 사용자에게 어떤 경험으로 다가갈까?'를 먼저 고민하게 됩니다.</p>
          <p>또, 개발은 혼자보다 함께할 때 더 크게 성장한다고 믿기에,<br/>
          협업을 통해 소통하고 함께 배우는 자세를 소중히 여깁니다.</p>
          <p>원하는 대로 안 될 때마다 직접 부딪히고, 끝까지 해내면서 개발의 재미를 느꼈습니다.<br/>
          끈질기게 답을 찾아내고, 절대 포기하지 않는 프론트엔드 개발자가 되고 싶습니다.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe