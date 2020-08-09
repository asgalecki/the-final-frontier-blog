import React from 'react';
import { Link } from 'gatsby';

import Nasa1 from '../../assets/images/nasa1.jpg';

const PostCard = () => {
  return (
    <section className="post-card">
      <img
        className="post-card__image"
        src={Nasa1}
        alt="Random space photo from NASA"
      />
      <article className="post-card__details">
        <h1 className="post-card__title">Title</h1>
        <p className="post-card__date">2nd August 2020</p>
        <p className="post-card__tags">
          <Link className="tags__link" to="./">#Space</Link> 
          <Link className="tags__link" to="./">#Sun</Link>
          <Link className="tags__link" to="./">#Moon</Link>
        </p>
        <p className="post-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio quas minima               dignissimos,  placeat, pariatur repellendus sequi quo quam accusamus iure? Beatae laborum recusandae iusto maxime repellat omnis officiis accusamus...
        <Link className="post-card__link" to="/">Read more</Link></p>
      </article>
    </section>
  )
};

export default PostCard;