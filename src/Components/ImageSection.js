import about from '../img/about.jpg'

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>
                    I am
                    <span> Pritam</span>
                </h4>
                <p className="about-text">I have been coding ever since I was 16 and I felt it is the only field I could be best without anyone being an obstacle.</p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Skills</p>
                    </div>
                    <div className="right-section">
                        <p> : Pritam Debnath</p>
                        <p> : 23</p>
                        <p> : Indian</p>
                        <p> : English, Hindi, Bengali</p>
                        <p> : Ruby | ReactJS | HTML | CSS | Python</p>
                    </div>
                </div>
                <button className="btn">Download Resume</button>
            </div>
        </div>
    )
}
  
export default ImageSection
