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

  handleSubmit = event => {
    event.preventDefault();
    alert(`
          Name: ${this.state.name},
          Email: ${this.state.email},
          Subject: ${this.state.subject},
          Text: ${this.state.message}
          `);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="contact-form" action="#" method="post">
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
              minlength="2"
              maxlength="50"
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
              minlength="6" 
              maxlength="50"
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
              minlength="2"
              maxlength="100"
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
              minlength="2"
              maxlength="500"
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