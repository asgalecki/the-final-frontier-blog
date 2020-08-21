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
            <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque rem qui beatae maxime odio laborum magni, expedita iure consectetur animi unde? Itaque facere adipisci dolore quae totam aliquid, distinctio possimus eaque debitis eius tempora labore cumque voluptatum quos perspiciatis quam repellat officiis. Nam commodi repudiandae illo laboriosam, quaerat exercitationem.</p>
          </div>
        </Main>
      </div>
    </Layout>
  )
}