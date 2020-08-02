import React from 'react';
import { Link } from 'gatsby';

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <section className="post-card">
          <img
            className="post-card__image"
            src="https://source.unsplash.com/collection/235/4928×3280"
            alt="Random space photo from NASA"
          />
          <article className="post-card__details">
            <h1 className="post-card__title">Title</h1>
            <p className="post-card__date">2nd August 2020</p>
            <p className="post-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio quas minima dignissimos, placeat, pariatur repellendus sequi quo quam accusamus iure? Beatae laborum recusandae iusto maxime repellat omnis officiis accusamus...
            <Link className="post-card__link" to="/">Read more</Link></p>
          </article>
        </section>
        <section className="post-card">
          <img
            className="post-card__image"
            src="https://source.unsplash.com/collection/235/4928×3280"
            alt="Random space photo from NASA"
          />
          <article className="post-card__details">
            <h1 className="post-card__title">Title</h1>
            <p className="post-card__date">2nd August 2020</p>
            <p className="post-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio quas minima dignissimos, placeat, pariatur repellendus sequi quo quam accusamus iure? Beatae laborum recusandae iusto maxime repellat omnis officiis accusamus...
            <Link className="post-card__link" to="/">Read more</Link></p>
          </article>
        </section>
        <section className="post-card">
          <img
            className="post-card__image"
            src="https://source.unsplash.com/collection/235/4928×3280"
            alt="Random space photo from NASA"
          />
          <article className="post-card__details">
            <h1 className="post-card__title">Title</h1>
            <p className="post-card__date">2nd August 2020</p>
            <p className="post-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio quas minima dignissimos, placeat, pariatur repellendus sequi quo quam accusamus iure? Beatae laborum recusandae iusto maxime repellat omnis officiis accusamus...
            <Link className="post-card__link" to="/">Read more</Link></p>
          </article>
        </section>
      </div>
    </main>
  )
};

export default Main;