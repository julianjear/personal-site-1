import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Julian Alvarez 🚀</h2>
        <p><a href="mailto:julianjear10@gmail.com">julianjear10@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Julian. I love building things, learning, and leading others.
        I am a Co-Founder & the CTO of a startup named <a href="https://www.vize.mx/acerca-de-nosotros">Vize</a>,
        and will start working at Facebook as a Software Engineer in June 2021.
        I am obsessed with the infinite journey of personal growth and
        love uncovering new ways to continue expanding and manifesting my infinite potential.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Julian Alvarez <Link to="/">julianalvarez.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
