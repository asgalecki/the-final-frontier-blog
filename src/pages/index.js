import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';
import PostCard from '../components/Main/Post-card';

export default function Home() {
  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <PostCard />
          <PostCard />
          <PostCard />
        </Main>
        <Aside />
      </div>
    </Layout>
  )
}