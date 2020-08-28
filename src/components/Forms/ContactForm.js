import React from "react";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="contact-form" netlify-honeypot="bot-field" method="post" data-netlify="true" name="Contact Form" action="/thank-you">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Contact Form" />
        <ul className="contact-form__list">
          <li className="contact-form__element">
            <label for="contact-form__name" className="contact-form__label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="contact-form__name"
              required
              minLength="2"
              maxLength="50"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </li>
          <li className="contact-form__element">
            <label for="contact-form__email" className="contact-form__label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="contact-form__email"
              required
              minLength="6" 
              maxLength="50"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </li>
          <li className="contact-form__element">
            <label for="contact-form__subject" className="contact-form__label">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              id="contact-form__subject"
              required
              minLength="2"
              maxLength="100"
              placeholder="Subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
            />
          </li>
          <li className="contact-form__element">
            <label for="contact-form__msg" className="contact-form__label">
              Message:
            </label> 
            <textarea
              name="message"
              id="contact-form__msg"
              required
              rows="5"
              minLength="2"
              maxLength="500"
              placeholder="Enter your message..."
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </li>
          <li className="contact-form__element contact-form__element--right">
            <button type="submit" className="contact-form__button">Send</button>
          </li>
        </ul>
      </form>
    )
  }
}