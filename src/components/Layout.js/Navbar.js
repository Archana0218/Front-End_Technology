import React from "react";


const Navbar = () =>{

    return(
        <div className="container">
   <br/>  
<nav className="navbar navbar-expand-lg navbar-dark bg-success container">
   
 <a className="navbar-brand" >
  Employee-Service
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent" class="medium">
    <ul className="navbar-nav mr-auto" >
      
        <li className="nav-item "> 
                
                <a className="navbar-brand" href="/home" > Home </a>
        </li>

        <li className="nav-item ">  
                
                <a className="navbar-brand" href="/about">About  </a>
        </li>

        <li className="nav-item "> 
           
             <a className="navbar-brand" href="/contact">Contact </a>
        </li>
        <li className="nav-item "> 
                
                <a className="navbar-brand" href="/el">EmployeesList</a>
        </li>
     </ul>
    
  </div>
</nav>
<header>
  <div class="container"> 
    <div class="banner=text">
      <div class="text=area">
      <h3  class="text-center"><span style={{color: "#a01f60" }}>Welcome to our site</span> </h3>
      
      </div>
    </div>
    </div>

    
    </header>
    
</div>

    );
}
export default Navbar;