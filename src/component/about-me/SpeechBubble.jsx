
function SpeechBubble({ className, text, color }) {
    function hexToRGBA(hex, alpha = 1) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const style = {
        backgroundColor: hexToRGBA(color, 0.4),
    };

    return (
        <div className={`speechBubble ${className}`} style={style}><p>{text}</p></div>
    )
}

export default SpeechBubble