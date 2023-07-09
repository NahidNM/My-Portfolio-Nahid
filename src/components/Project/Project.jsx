
import img1 from './../../../public/Image/portfolio/Screenshot (92).png'
import img2 from './../../../public/Image/portfolio/Screenshot (93).png'
import img3 from './../../../public/Image/portfolio/Screenshot (94).png'

const Project = () => {
  return (
    <div id='project'>
         <div className="divider"></div>
        <div className="text-5xl font-bold divider">My Project</div>
        <div className="divider"></div>
    <div className="grid md:grid-cols-3" >
     <div  data-aos="fade-left" className="w-64 mx-auto shadow-xl card bg-base-100">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Summer-Sports-Camp</h2>
    <p>MERN-Stack
Project</p>
    <div className="justify-end card-actions">
    <button className="flex items-center btn btn-primary">
        <a target='blank' href="https://summer-sports-camp-6957a.web.app/">Live site</a></button>  
        <button className="btn btn-primary">
        <a target='blank' href="https://github.com/NahidNM/summer-camp-client-side">Client</a></button>  
        <button className="btn btn-primary">
        <a target='blank' href="https://github.com/NahidNM/summer-camp-server-">Server</a></button>
    </div>
  </div>
</div>
     <div  data-aos="flip-up" className="w-64 mx-auto shadow-xl card bg-base-100">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Chef-Recipe-Hunter</h2>
    <p>Chef and Recipe Viewing Website [Full-Stack Project]</p>
    <div className="justify-end card-actions">
    <button className="flex items-center btn btn-primary">
        <a target='blank' href="https://chef-recipe-hunter-ec906.web.app/">Live site</a></button>  
        <button className="btn btn-primary">
        <a target='blank' href="https://github.com/NahidNM/chef-recipe-project">Client</a></button>  
        <button className="btn btn-primary">
        <a target='blank' href="https://github.com/NahidNM/chef-recipe-server-clone">Server</a></button>
    </div>
  </div>
</div>
     <div data-aos="fade-right" className="w-64 mx-auto shadow-xl card bg-base-100">
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Action Toys</h2>
    <p>Toy Marketplace Website [MERN-Stack Project]</p>
    <div className="justify-end card-actions">
    <button className="flex items-center btn btn-primary">
        <a target='blank' href="https://toy-marketplace-28dcc.web.app/">Live site</a></button>  
        <button className="btn btn-primary">
        <a target='blank' href="https://github.com/NahidNM/potfolio-project">Client</a></button>  
        <button className="btn btn-primary">
        <a target='blank' href="https://github.com/NahidNM/toy-markplace-clinet-clone">Server</a></button>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Project;
