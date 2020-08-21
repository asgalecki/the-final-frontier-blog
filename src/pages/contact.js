import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import ContactForm from '../components/Forms/ContactForm';

export default function Home() {
  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <div className="main__container">
            <h1 className="contact__title">Contact Us:</h1>
            <ContactForm />
          </div>
        </Main>
      </div>
    </Layout>
  )
}