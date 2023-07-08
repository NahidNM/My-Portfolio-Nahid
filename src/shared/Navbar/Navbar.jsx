

const Navbar = () => {
    
    const navList = <>
        <li><a>Home</a></li>
        <li><a>skils</a></li>
        <li><a>Project</a></li>
        </>
       
        
    
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navList}
      </ul>
    </div>
    <h1 className="ormal-case gtext-xl">Nahid</h1>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 font-semibold menu menu-horizontal bg-slate-500 rounded-2xl">
      {navList}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;