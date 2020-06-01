import React, { Component } from 'react';
import Portfolio from './portfolio';

class Info extends Component {
  render() {
    return (
      <div>
        <section className="info">
          {/* <img src="img/shoes.jpg" alt="" > */}
          <div className="">
            <h2>Why Us?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <a href="/work" className="btn">Learn More</a>
          </div>
          <div>
            <Portfolio />
          </div>
        </section>
      </div>
    )
  }
}

export default Info;