
function SpeechBubble({ className, text, color }) {
    // hex 색상을 rgba로 변환하는 유틸 함수
    function hexToRGBA(hex, alpha = 1) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const style = {
        backgroundColor: hexToRGBA(color, 0.4), // 배경색을 투명도 적용된 rgba로 지정
    };

    return (
        <div className={`speechBubble ${className}`} style={style}><p>{text}</p></div>
    )
}

export default SpeechBubble