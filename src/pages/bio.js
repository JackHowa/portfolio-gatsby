import React from 'react';
import Link from 'gatsby-link';

const BioPage = () => (
    <div>
      <div style={{ color: 'orange' }}>I'm Jack</div>
      <img src="https://www.fillmurray.com/200/300" alt="Not actually me"/>
      <Link to="/">Go back to the homepage</Link>
    </div>
);

export default BioPage;