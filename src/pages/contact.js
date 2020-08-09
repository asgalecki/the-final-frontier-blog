import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';

export default function Home() {
  return (
    <Layout>
      <div className="layout__container">
        <Main>
          <h1 className="contact__title">Contact</h1>
          <p className="contact__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque rem qui beatae maxime odio laborum magni, expedita iure consectetur animi unde? Itaque facere adipisci dolore quae totam aliquid, distinctio possimus eaque debitis eius tempora labore cumque voluptatum quos perspiciatis quam repellat officiis. Nam commodi repudiandae illo laboriosam, quaerat exercitationem.</p>
        </Main>
      </div>
    </Layout>
  )
}