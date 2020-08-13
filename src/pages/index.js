import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';
import PostCardList from '../components/Main/Post-card-list';

export default function Home() {
  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <PostCardList />
        </Main>
        <Aside />
      </div>
    </Layout>
  )
}