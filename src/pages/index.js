import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';
import SEO from "../components/Seo";

export default function Home() {
  return (
    <Layout>
      <SEO />
      <div className="layout__container">
        <Main>
          <div className="main__container">
            <p className="main__paragraph">Loading content...</p>
          </div>
        </Main>
        <Aside />
      </div>
    </Layout>
  )
}