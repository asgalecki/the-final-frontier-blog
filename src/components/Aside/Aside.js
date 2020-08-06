import React from 'react';
import { Link } from 'gatsby';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__container">
        <section className="recent-posts">
          <h3 className="recent-posts__title">Recent posts</h3>
            <div className="recent-posts__post">
              <h4 className="recent-posts__post--title">Title</h4>
              <p className="recent-posts__date">2nd August 2020</p>
            </div>
            <div className="recent-posts__post">
              <h4 className="recent-posts__post--title">Title</h4>
              <p className="recent-posts__date">2nd August 2020</p>
            </div>
            <div className="recent-posts__post">
              <h4 className="recent-posts__post--title">Title</h4>
              <p className="recent-posts__date">2nd August 2020</p>
            </div>
        </section>
        <section className="tags">
          <h3 className="tags__title">Tags</h3>
          <p className="tags__paragraph">
            <Link className="tags__link" to="./">#Space</Link>
            <Link className="tags__link" to="./">#Sun</Link>
            <Link className="tags__link" to="./">#Moon</Link>
          </p>
        </section>
        <section className="links">
          <h3 className="links__title">Links</h3>
          <ul className="links__list">
            <li className="links__list--margin">
              <Link className="links__link" to="./">nasa</Link>
            </li>
            <li className="links__list--margin">
              <Link className="links__link" to="./">esa</Link>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  )
};

export default Aside;