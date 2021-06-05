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
                        
                    </div>
                    <div className="right-section">
                        <p> : Pritam Debnath</p>
                        <p> : 23</p>
                        <p> : Indian</p>
                        <p> : English, Hindi, Bengali</p>
                        
                    </div>
                </div>
                <button className="btn"> <a href="https://drive.google.com/file/d/1l2MgIltOFi3D0UVD4geGnJ6o85M3FZfJ/view?usp=drivesdk"> Download Resume</a></button>
            </div>
        </div>
    )
}
  
export default ImageSection
