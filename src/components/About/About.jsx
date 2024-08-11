import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
import Html from "../../assets/Html.svg";
import CSS from "../../assets/CSS.svg";
import Javascript from "../../assets/Javascript.svg";
import Reactjs from "../../assets/Reactjs.svg";
import Nodejs from "../../assets/Nodejs.svg";


const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about_right">
                    <div className="about-para">
                        <p>
                            I am a passionate and dedicated Frontend developer excited to begin my professional journey. I have a strong foundation in Frontend technologies and eager to contribute to the success and growth of an innovative organization and am enthusiastic about applying my skills to new projects.</p>
                        <p>My enthusiasm for learning and my commitment to excellence drive me to continually improve my skills and stay updated with the latest industry trends.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Node.js</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
                <div className="moving-div">
                    <div className="blur-left">

                    </div>
                    <div class="move">
                        <img src={Html} alt="" />
                        <img src={CSS} alt="" />
                        <img src={Javascript} alt="" />
                        <img src={Reactjs} alt="" />
                        <img src={Nodejs} alt="" />
                    </div>
                    <div class="move">
                    <img src={Html} alt="" />
                        <img src={CSS} alt="" />
                        <img src={Javascript} alt="" />
                        <img src={Reactjs} alt="" />
                        <img src={Nodejs} alt="" />
                    </div>
                    <div className="blur-right"></div>
                </div>
            </div>
    )
}

export default About