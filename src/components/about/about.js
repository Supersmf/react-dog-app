import React from 'react';
// import './about.css';

const About = () => (
  <div className="d-flex justify-content-center mt-5 pt-5">
    <div className="col-4 bg-light">
    <div className="d-flex justify-content-center mt-2">
      <img src="../dog-api-logo.svg" alt="dog api logo" className=""/>
    </div>
          <h2 className="h3 mb-3 font-weight-bold text-center mt-2">Dog API application</h2>
           <p  className=" mb-3 font-weight-light text-center mt-2">
              Simple web project based on React / Redux / React-Router.
              <br/>
              Developed by Gaidykevich Oleg
           </p>
            <p className="font-weight-light text-center mt-2">
              <a href="https://github.com/Supersmf">GitHub Link</a>
            </p>
        <p className="mt-5 mb-3 text-muted text-center">&copy; 2018</p>
      </div>
  </div>
);

export default About;