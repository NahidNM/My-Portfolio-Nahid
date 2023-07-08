import myImg from './../../../public/Image/myImage/nahid.png'

const Hero = () => {
    return (
        <div className="min-h-screen hero bg-base-300">
        <div className="flex-col w-full hero-content lg:flex-row-reverse">
          <div>
          <img src={myImg} className="max-w-sm rounded-lg shadow-2xl " />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-indigo-600">My Name Is Md. Nahid Hasan</h1>
            <p className="py-6">I'm Md. Nahid Hasan, a passionate devoloper who teransforms ideas into captivartiong digital experinces. With expertise in front-end and back-end development, I deliver seamless interfaces that impress. By staying currrent with tech trends, I create scalable solutions that exceed expectations. Let't embark on this exciting journey to shap a better digital landscape together.</p>
            <button className="btn btn-primary">Download Resume</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;