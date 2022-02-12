import React from "react"

const FAQS = [
  {
    question: "Questions coming soon",
    answer: "Answers coming soon",
  },
  {
    question: "Questions coming soon",
    answer: "Answers coming soon",
  },
  {
    question: "Questions coming soon",
    answer: "Answers coming soon",
  },
  {
    question: "Questions coming soon",
    answer: "Answers coming soon",
  },
  {
    question: "Questions coming soon",
    answer: "Answers coming soon",
  },
  {
    question: "Questions coming soon",
    answer: "Answers coming soon",
  },
  {
    question: "Questions coming soon",
    answer: "Answers coming soon",
  },
  {
    question: "Questions coming soon",
    answer: "Answers coming soon",
  },
]

const Faq = () => {
  return (
    <section className="faq-one">
      <div className="container">
        <div className="row no-gutters">
          {FAQS.map(({ question, answer }) => (
            <div className="col-lg-6">
              <div className="faq-one__single">
                <div className="faq-one__icon">
                  <span>?</span>
                </div>
                <div className="faq-one__content">
                  <h2 className="faq-one__title">{question}</h2>
                  <p className="faq-one__text">{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
