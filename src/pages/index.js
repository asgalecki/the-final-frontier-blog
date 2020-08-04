import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Aside from '../components/Aside';

export default function Home() {
  return (
    <Layout>
      <div className="layout__container">
        <Main />
        <Aside />
      </div>
    </Layout>
  )
}
