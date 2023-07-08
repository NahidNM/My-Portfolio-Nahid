import myImg from './../../../public/Image/myImage/nahid.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
    
    // react typewritter
   const [text] = useTypewriter({
    words: ['Web Developer', 'Mern Stack Developer', 'Programmer',],
    loop: {}, 
    typeSpeed: 120,
    deleteSpeed: 80,
   }) 
   
   
    // const handleDownload = () => {
    //   const fileUrl = 'https://drive.google.com/file/d/14fnnKqLlHoU5kHBUdU2C-F33clIYNWcU/view?usp=sharing';
    //   const link = document.createElement('a');
    //   link.href = fileUrl;
    //   link.download = 'filename.pdf';
    //   link.click();
    // };

    return (
        <div className="min-h-screen hero bg-base-300">
        <div className="flex-col w-full hero-content lg:flex-row-reverse">
          <div className='' data-aos="fade-up-left">
          <img src={myImg} className="max-w-sm rounded-lg shadow-2xl " />
          </div>
          <div className='' data-aos="fade-down">
            <h1 className="text-5xl font-bold text-indigo-600">My Name Is Md. Nahid Hasan <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>I'm a {text}</span>
            <span><Cursor cursorStyle=">"></Cursor></span></h1>
            
            <p className="py-6">I'm Md. Nahid Hasan, a passionate devoloper who teransforms ideas into captivartiong digital experinces. With expertise in front-end and back-end development, I deliver seamless interfaces that impress. By staying currrent with tech trends, I create scalable solutions that exceed expectations. Let't embark on this exciting journey to shap a better digital landscape together.</p>
            
            {/* resume */}
            <div className="text-blue-700 btn btn-outline ">
      <a
        href={"../../../public/Nahid MERN Resume.pdf"}
        download={"Nahid MERN Resume.pdf"}
      >
        <span className="flex items-center">
          {" "}
          <AiOutlineDownload className="text-4xl" />
          Download The Resume
        </span>
      </a>
    </div>
            {/* <button onClick={handleDownload} className="btn btn-primary">Download Resume</button> */}
          </div>
        </div>
      </div>
    );
};

export default Hero;