import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import Title from '../Components/Title';


const AboutPage = () => {
    return(
        <div className="AboutPage">
            <Title title={"About Me"} span={"About ME"} />
            <ImageSection/>
            <Title title={"My Skills"} span={"My Skills"} />
            <div className="skills-container">
                <SkillsSection skill={'ReactJS'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'JS'} progress={'75%'} width={'75%'}/>
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'CSS'} progress={'60%'} width={'60%'}/>
                <SkillsSection skill={'Ruby'} progress={'40%'} width={'40%'}/>
            </div>
            
        </div>
    )
}

export default AboutPage;