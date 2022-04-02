import personalImage from "../images/mark.jpg";
import ReactTooltip from 'react-tooltip';
import Tilt from 'react-tilt';

export default function About() {
    return (
        <div className="flex justify-center items-center h-screen gap-x-[5%]">
            <div className="w-[600px]">
                <div className="text-[50px] font-semibold">
                    Hey, I'm Mark!
                </div>
                <div className="text-[25px]">
                    &emsp;&emsp;I am a second-year software engineering student at McMaster 
                    University who loves programming, space exploration, staying active, and 
                    continuous learning. I am interested in full stack development, data
                    structures, and algorithms. I am proficient with languages such as Javascript,
                    Java, and Python. I will be working as a Developer Intern for 
                    Royal Bank of Canada starting summer of 2022. <br />
                    &emsp;&emsp;I am always looking to collaborate on technical projects, so 
                    don't be afraid to hit me up if you want to work together!
                    That's it from me, goodbye for now.
                </div>

                <hr className="my-2 mx-2 bg-black" />

                <div className="text-center">
                    <ul className="">
                        <li className="inline mr-2">
                            <a href="https://github.com/markacruz" 
                            target="_blank" 
                            data-tip data-for="github">
                                <i className="bi bi-github"></i>
                            </a>
                        </li>
                        <li className="inline mr-2">
                            <a href="https://www.linkedin.com/in/mark-a-cruz"
                            target="_blank"
                            data-tip data-for="linkedin">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                        <li className="inline mr-2">
                        <a href="https://www.instagram.com/mark.crvz/"
                        target="_blank"
                        data-tip data-for="instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li className="inline mr-2">
                            <a href="tel:9059800302" 
                            target="_blank"
                            data-tip data-for="telephone">
                                <i className="bi bi-telephone"></i>
                            </a>
                        </li>
                        <li className="inline mr-2">
                            <a href="mailto:markaycruz@gmail.com"
                            target="_blank"
                            data-tip data-for="email">
                                <i className="bi bi-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <ReactTooltip id="github" place="bottom" type="dark" effect="solid">
                    <span className="bg-inherit text-[20px]">Visit my GitHub page!</span>
                </ReactTooltip>
                
                <ReactTooltip id="linkedin" place="bottom" type="dark" effect="solid">
                    <span className="bg-inherit text-[20px]">Visit my LinkedIn page!</span>
                </ReactTooltip>
                
                <ReactTooltip id="instagram" place="bottom" type="dark" effect="solid">
                    <span className="bg-inherit text-[20px]">Visit my Instagram page!</span>
                </ReactTooltip>
                
                <ReactTooltip id="telephone" place="bottom" type="dark" effect="solid">
                    <span className="bg-inherit text-[20px]">+1(905)-980-0302</span>
                </ReactTooltip>
                
                <ReactTooltip id="email" place="bottom" type="dark" effect="solid">
                    <span className="bg-inherit text-[20px]">markaycruz@gmail.com</span>
                </ReactTooltip>

            </div>
            <div className="w-[400px]">
                <Tilt options={{
                    max: 5
                }}>
                    <img src={personalImage}
                    className="shadow-2xl" />
                </Tilt>
            </div>
        </div>
    )
}