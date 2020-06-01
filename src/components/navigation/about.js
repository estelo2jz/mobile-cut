import React from 'react';

function AboutPage ()  {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>About Us</h1>
      </div>
      <div className="about-bio one">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

function Feedback ()  {
  return (
    <div className="about-container">
        <div  className="about-heading">
          <h1>We Care About Your Feedback</h1>
        </div>
        <p className="about-bio two">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
  );
}

function Message ()  {
  return (
    <div className="about-container">
        <div className="about-heading">
          <h1>Send us a Message</h1>
        </div>
        <div className="">
          <form className="form-control">   
            <div>
              <input 
                className="form-email" 
                type="email" 
                title="Email" 
                placeholder="Email" 
                name="email"  
              />
            </div>      
              <div>
                <textarea className="form-message" >
                </textarea>
              </div>

            {/* <div className="form-input">
              <input
                className="form-password" 
                type="password" 
                title="Password" 
                placeholder="Password" 
                name="password"  
              />
            </div> */}


            <div className="form-input">
              <input
                className="form-login" 
                type="submit" 
                title="Login" 
                name="login" 
              />
            </div>

          </form>
        </div>
    </div>
  );
}


function ImageProduct ()  {
  return (
    <div className="about-container">
      <div  className="about-heading">
        <h1>Image Product</h1>
      </div>
      <img className="" src='http://via.placeholder.com/430x430' />
    </div>
  );
}

const About = () => {
  return (
    <div className="about-grid-container">
      <div>
        <AboutPage />
      </div>
      <div>
        <Feedback />
      </div>
      <div>
        <Message />
      </div>
      <div>
        <ImageProduct />
      </div>
      
      {/* <footer>
        <p>Mobile Cut &copy; 2020</p>
      </footer> */}
    </div>
  )
}

export default About;