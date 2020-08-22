import React from "react";

export default class NewsletterForm extends React.Component {
  state = {
    email: "",
  }

  handleInputChange = event => {
    const value = event.target.value;

    this.setState({
      email: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    alert("You have been successfully subscribed to our newsletter!");
  }

  render() {
    return (
      <section className="newsletter">
        <form className="newsletter__form" onSubmit={this.handleSubmit} action="#" method="post">
          <h6 className="newsletter__title">Subscribe to our Newsletter!</h6>
          <ul className="newsletter__list">
            <li className="newsletter__element">
              <input 
                type="email" 
                name="newsletter-email" 
                id="newsletter__email"
                required
                minLength="6" 
                maxLength="50"
                aria-label="Email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange} 
              />
            </li>
            <li className="newsletter__element">
              <button type="submit" className="newsletter__button">Subscribe</button>
            </li>
          </ul>
        </form>
      </section>
    )
  }
}