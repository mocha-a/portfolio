import TagBtn from './TagButton'
import Dot from '../../Dot'
import SolidLine from '../../SolidLine'

function PopupItem({ data, onClose }) {
    return (
        <ul className='popup_container'>
            <li className='popup_title'>
                <div className='left_content'>
                    <p><img src={data.icon} alt="" /></p>
                    <h3 style={{ color: data.color }}>{data.title}</h3>
                </div>
                <p onClick={onClose}><img src="/imgs/_icons/close.svg" alt="닫기" /></p>
            </li>
            <li className='popup_subtitle'>{data.subtitle}</li>
            <li className='popup_description'>{data.description}</li>
            <li className='popup_info'>
                <div className='popop_team'>
                    <h4>참여 인원</h4>
                    <p>{data.team}명</p>
                </div>
                <div>
                    <h4>기간</h4>
                    <p>{data.period}</p>
                </div>
                <div>
                    <h4>관련 링크</h4>
                    <p>
                        {Object.entries(data.links).map(([key, value]) =>
                        value ? (
                            <a key={key} href={value} style={{ display: 'inline-block' }} target="_blank" rel="noreferrer" className='data_link'>
                            {value}
                            </a>
                        ) : null
                        )}
                    </p>
                </div>
            </li>
            <li className='popup_features'>
                <h4>핵심 기능</h4>
                <p>{data.features.join(' / ')}</p>
            </li>
            <li className='popup_frontEnd'> 
                <h4>front-end</h4>
                {data.stack.frontEnd.map((tech, i) => (
                <TagBtn key={i} tagbtn={tech} color={data.color}/>
                ))}
            </li>
            { data.stack.backEnd.length !== 0 &&
            <li className='popup_backEnd'>
                <h4>back-end</h4>
                {data.stack.backEnd.map((tech, i) => (
                <TagBtn key={i} tagbtn={tech} color={data.color}/>
                ))}
            </li>
            }
            <SolidLine color={ '#ddd' }/>
            <li className='popup_myRoles'>
                <h3 className='anji_role'>안지현 - 담당 기능 소개</h3>
                { data.myRoles.map(itme =>
                <div className='role_container'>
                    <div className='role_title'>
                        <Dot color={data.color} size='10px'/>
                        <h4>{itme.title}</h4>
                    </div>
                    {itme.details.map(item =>
                        <p>{item}</p>
                    )}
                </div>
                )}
            </li>
            <SolidLine color={ '#ddd' }/>
            <li className='popup_troubleshooting'>
                <h3 className='troubleshooting_title'>트러블 슈팅</h3>
                { data.troubleshooting.map(itme =>
                <div className='troubleshooting_content'>
                    <p className='popup_issue'>{itme.issue}</p>
                    <div className='popup_cause'>
                        <div>
                            <Dot color={data.color} size='10px'/>
                            <h4>원인</h4>
                        </div>
                        <p>{itme.cause}</p>
                    </div>
                    <div className='popup_solutions'>
                        <div>   
                            <Dot color={data.color} size='10px'/>
                            <h4>해결방안</h4>
                        </div>
                        {itme.solutions.map(item =>
                            <p>{item}</p>
                        )}
                    </div>
                </div>
                )}
            </li>
        </ul>
    )
}

export default PopupItem