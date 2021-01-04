import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Julian Alvarez via email @ michael.l.dangelo@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: <a href="mailto:julianjear10@gmail.com">julianjear10@gmail.com</a> or reach out to me on any of the social platforms.</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
