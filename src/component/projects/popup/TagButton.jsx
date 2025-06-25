function TagBtn({ tagbtn, className, color }) {
    return (
    <div className={`tagbtn ${className}`} style={{ border: `1px solid ${color}` }}>{tagbtn}</div>
    )
}

export default TagBtn