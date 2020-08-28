import React from "react";
import Layout from "../components/Layout";
import Main from '../components/Main/Main';

const ThankYouPage = () => (
  <Layout>
    <div className="layout__container">
        <Main>
          <div className="main__container">
            <h1 className="contact__title">Contact Us:</h1>
            <p className="contact__paragraph">Thank you for your message!</p>
          </div>
        </Main>
      </div>
  </Layout>
)

export default ThankYouPage;
