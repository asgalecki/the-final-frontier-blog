import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';

export default function Home() {
  return (
    <Layout>
      <div className="layout__container">
        <Main>
        </Main>
        <Aside />
      </div>
    </Layout>
  )
}