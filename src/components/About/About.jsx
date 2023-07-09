import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import aboutImg from './../../../public/Image/myImage/About img.jpg'

const About = () => {
    return (
        <div>
            <div className="divider"></div>
        <div className="text-5xl font-bold divider">About Me</div>
        <div className="divider"></div>
        
        <div className="bg-[#eaedf2]">
     
      <div className="md:flex">
        <div>
          <div className="p-12 ">
            <img
              className="w-80 -mt-9  border-[20px] border-white rounded"
              src={aboutImg }
              alt=""
            />
          </div>
         
        </div>
        
        {/* text */}
        <div
          className="ml-10 space-y-5 md:mt-20"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="text-2xl font-bold">I'M Md. Nahid Hasan</h1>
          <h4 className="font-semibold">
            I am a <span className="text-orange-400">MERN-Stack devloper & programmer</span>
             based in Bangladesh
          </h4>
          <p>
            I successfully achieved specific results or accomplishments,
            demonstrating <br />
            my ability to Last 6 months I complete a Course i work Really hard
          </p>
          <p>
            <span className="font-semibold">Birthday</span> : 31/12/2000
          </p>
          <p>
            <span className="font-semibold">Age</span> : 23
          </p>
          <p>
            <span className="font-semibold">Residence</span> : Bangladesh
          </p>
          <Link
            to={
              "https://drive.google.com/file/d/14fnnKqLlHoU5kHBUdU2C-F33clIYNWcU/view?usp=sharing"
            }
            className="btn btn-outline btn-warning"
          >
            <button className="text-black">My Resume</button>
          </Link>
          <div className="flex items-center">
             {/* icom 1 */}
           <div className="p-1 duration-500 bg-orange-400 border-8 border-white hover:bg-black">
            <a href="https://www.linkedin.com/in/md-nahid-hasan-94b084260/">
              <AiOutlineLinkedin className="text-2xl" />
            </a>
          </div>
          {/* icom 2 */}
          <div className="p-1 duration-500 bg-orange-400 border-8 border-white hover:bg-black">
            <a href="https://www.facebook.com/mdnahid.hasan.77312">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-white fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          {/* icom 3 */}
          <div className="p-1 duration-500 bg-orange-400 border-8 border-white hover:bg-black bottom-4">
            <a href="https://github.com/NahidNM">
              <AiOutlineGithub className="text-2xl" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
        
        </div>
    );
};

export default About;