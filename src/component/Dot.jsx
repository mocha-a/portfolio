
function Dot({ size = 20, color }) {
    const style = {
        width: size,
        height: size,
        backgroundColor: color,
    };

    return (
        <span className="dot" style={style}/>
    )
}

export default Dot