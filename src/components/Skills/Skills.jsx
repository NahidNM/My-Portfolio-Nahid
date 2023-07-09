import React, { useEffect, useState } from "react";

const Skills = () => {
    
    const [skills, setSkills] = useState([]);
    console.log(skills)
useEffect(()=>{
    fetch("Skills.json")
    .then(res => res.json())
    .then(data => setSkills(data))
},[])
  return (
    <div id="skills">
        <div className="divider"></div>
        <div className="text-5xl font-bold divider">my skils</div>
        <div className="divider"></div>
       <div className="grid-cols-2 mx-auto  md:grid-cols-4 lg:grid-cols-5 md:mx-[0%] lg:mx-[9%] grid gap-5">
        {  skills.map((data, index) =>
        <div key={index} className="relative">
          <img src={data.image} alt="" className="w-24 h-24 p-4 mt-1 ml-3 rounded-full" />
         <div className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 hover:opacity-100 rounded-3xl">
          
            <p className="text-lg font-bold">
              <div data-aos="flip-down" className="ml-5 mr-0 text-purple-500 radial-progress lg:mr-12 md:ml-0 lg:ml-0"
              style={{
                "--value": data.percentage,
              "--size": "8rem",
              "--thickness": "5px"}}>
                <h1 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{data.skill}</h1>
                <p className="mx-auto text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{data.percentage}%
                </p>
              </div>
              </p>
           
         </div>
        </div> ) }
      
       </div>
    </div>
  );
};

export default Skills;
<h1>my skils</h1>;
