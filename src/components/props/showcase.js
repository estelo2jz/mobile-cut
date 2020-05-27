import React, { Component } from 'react'

class Showcase extends Component {
  render() {
    return (
      <div>
        <section className="top-container">
          <div></div> 
          
          <header className="showcase">
            <h1>Moblie Cut</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              In vitae turpis massa sed elementum. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. 
              Maecenas sed enim ut sem viverra. Tempor orci eu lobortis elementum nibh tellus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. 
              Cras semper auctor neque vitae tempus quam. In aliquam sem fringilla ut morbi. Augue eget arcu dictum varius duis.</p>
            <a href="#" className="btn">Read More</a>
          </header>

          <div className="top-box top-box-a">
            <h4>Membership</h4>
            <p className="price">$49/mo</p>
            <p>3 haircut per/month</p>
            <a href="" className="btn">Buy Now</a>
          </div>

          <div className="top-box top-box-b">
            <h4>Pro Membership</h4>
            <p className="price">$99/mo</p>
            <p>9 haircut per/month</p>
            <a href="" className="btn">Buy Now</a>
          </div>
        </section>
      </div>
    )
  }
}

export default Showcase;