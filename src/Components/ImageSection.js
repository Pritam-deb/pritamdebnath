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
                <p>I have been coding ever since I was 16 and I felt it is the only field I could be best without anyone being an obstacle.</p>
                <div className="about-details">

                </div>
            </div>
        </div>
    )
}
  
export default ImageSection
