import React from "react"

const Contact = () => {
  return (
    <div>
      <section className="contact-info-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-one__single px-3 py-5 h-100 justify-content-start">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-manager"></i>
                </div>
                <h2 className="contact-info-one__title">About Us </h2>
                <p className="contact-info-one__text">
                  Our mission is to build the island's economy to sustain local
                  business and create more jobs.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single px-3 py-5 h-100 justify-content-start">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-placeholder"></i>
                </div>
                <h2 className="contact-info-one__title">Our Address</h2>
                <p className="contact-info-one__text">
                  We are working on finding a place to call home, if you know of
                  a good place please contact us.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single px-3 py-5 h-100 justify-content-start">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-contact"></i>
                </div>
                <h2 className="contact-info-one__title">Contact Info</h2>
                <p className="contact-info-one__text">
                  Get in touch with us <br />
                  <a
                    href="mailto:info@dev-island.org"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--secondary)" }}
                  >
                    info@dev-island.org
                  </a>{" "}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">
            Get in touch <br />
            with us
          </h2>
          <form
            action="#"
            className="contact-one__form contact-form-validated"
            noValidate="novalidate"
          >
            <div className="row low-gutters">
              <div className="col-lg-6">
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Email Address" name="email" />
              </div>
              <div className="col-lg-12">
                <textarea placeholder="Write Message" name="message"></textarea>
                <div className="text-center">
                  <button type="submit" className="contact-one__btn thm-btn">
                    Submit Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="result text-center"></div>
        </div>
      </section>
      */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236668.34790078292!2d-159.68056838857262!3d22.051778267202074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0704bb259eb047%3A0xf6321af5a12d378a!2sKaua'i!5e0!3m2!1sen!2sus!4v1635482679868!5m2!1sen!2sus"
        className="google-map__contact mt-4"
        title="template google map"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Contact
