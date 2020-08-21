import React from 'react';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <div className="not-found__container">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__paragraph">Looks like you are lost in space...</p>
      <Link className="not-found__link" to={'/'}>Go back home</Link>
    </div>
  )
}