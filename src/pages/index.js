import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
    <div>
      <h1>Come See My Projects</h1>
      <p>I make tea, podcasts and web and mobile apps.</p>
      <div>
        <Link to="/bio/">Click for my bio!</Link>
      </div>
    </div>
);

export default IndexPage;
