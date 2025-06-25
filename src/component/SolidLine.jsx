function SolidLine({ className, width = '100%', color = 'black' }) {
    return (
    <div className={`${className} solid_line`}>
        <svg style={{ display: 'block' }} width={width} height="1" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="100" y2="1" stroke={color} strokeWidth="2"/>
        </svg>
    </div>
    )
}

export default SolidLine