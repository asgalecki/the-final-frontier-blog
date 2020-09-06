import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main/Main';

export default function Home() {
  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <div className="main__container">
            <h1 className="about__title">About</h1>
            <p className="about__paragraph">Blog about the space, astronomy and science.</p>
          </div>
        </Main>
      </div>
    </Layout>
  )
}