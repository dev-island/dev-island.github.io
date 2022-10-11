import React, { Component } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import ClientStripe from "../assets/images/circle-stripe-diblue.png"
import aboutImage1 from "../assets/images/about-1.jpeg"
import aboutImage2 from "../assets/images/about-2.jpeg"

class AboutOne extends Component {
  constructor() {
    super()
    this.state = {
      startCounter: false,
    }
  }

  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ startCounter: true })
    }
  }

  render() {
    return (
      <section className="about-one ">
        <img src={ClientStripe} className="about-one__circle" alt="" />
        <div className="container text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title position-relative">
              Bridging the gap of opportunity on Kaua’i
            </h2>
          </div>
          <div className="about-one__img">
            <div className="row">
              <div className="col-lg-6">
                <img src={aboutImage1} alt="" className="" />
              </div>
              <div className="col-lg-6">
                <img src={aboutImage2} alt="" />
              </div>
            </div>
            <div className="about-one__review">
              <p className="about-one__review-count counter">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={this.state.startCounter ? 1000 : 0} />
                </VisibilitySensor>
                <span>s</span>
              </p>
              {/*<div className="about-one__review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>*/}
              <p className="about-one__review-text">of potential developers</p>
            </div>
          </div>
          <p className="about-one__text">
            Kaua'i has a rich history in agriculture and is known as the garden
            island. Our vision will contribute to Kaua'i's reputation as the
            garden island as we grow the next generation of Kaua'i ohana. We
            will plant the seed of technical knowledge deep in our community and
            grow our ohana and community. The resulting fruit of our labor will
            be a healthy, diverse, and sustainable Kaua'i.
          </p>
          <a href="/apply" className="thm-btn about-one__btn">
            Start Learning Now
          </a>
        </div>
      </section>
    )
  }
}

export default AboutOne
