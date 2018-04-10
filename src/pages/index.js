import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
    <div>
      <h1>Hi Gatsby</h1>
      <p>Welcome to your new Gatsby portfolio.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/bio/">Click for my bio!</Link>
    </div>
);

export default IndexPage;
