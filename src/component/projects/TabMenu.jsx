import { useState } from 'react';

function TabMenu({ onTabChange, selectedTab }) {
    const tabTitle = ['TEAM', 'PERSONAL'];
    const [addClass, setAddClass] = useState(selectedTab ?? 0);

    // 탭 클릭 시 실행되는 함수
    function clickEvent(index) {
        setAddClass(index); // 내부 상태 업데이트
        if (onTabChange) {
            onTabChange(index); // 부모 컴포넌트에 탭 변경 알림
        }
    }

    return (
        <div className="tabmenu">
        {tabTitle.map((item, i) => (
            <div
            key={i}
            className={i === addClass ? 'active' : ''}
            onClick={() => clickEvent(i)}
            >
            {item}
            </div>
        ))}
        </div>
    );
}

export default TabMenu;
