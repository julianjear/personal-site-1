import React from 'react';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Main from '../layouts/Main';

const url = 'https://infinitemindspodcast.us18.list-manage.com/subscribe/post?u=7ef744c2b21b96acce8b69ac1&amp;id=0d2a0588ee';

// const SimpleForm = () => <MailchimpSubscribe url={url}/>

const Index = () => (
  <Main
    description={"Julian Alvarez's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hello Universe! ¡Hola Amigos! 👋</Link></h2>
        </div>
      </header>
      <p> Hello friends! I'm Julian and I'm an entrepreneur, software engineer, and podcaster.
        Please feel free to read more <Link to="/about">about me</Link>.
        You can also check out my {' '}
        <Link to="/resume">resume</Link> {' '}
        or <Link to="/contact">contact me</Link>.
      </p>
      <h3>The Launch of My New Podcast, Inventing The Future</h3>
      <p>
        Inventing The Future is a podcast that I will be launching on the week of Jan 11th, 2021.
        This podcast will focus on the meaningful problems that entrepreneurs around the world {' '}
        are working to solve, how they are approaching the problem with their unique solution,
        and the mindsets that they have developed to endure the adversity and challenges of {' '}
        building something from the ground up. If you are interested in entrepreneurship,
        business, leadership, exponential technologies, or self-improvement, you'll love {' '}
        this podcast.
      </p>
      <p>
        Subscribe to my newsletter to recieve updates on new episodes every 2 weeks. I'll also {' '}
        include insights, resources, and quotes that are designed to help you live a healthier,
        fulfilling, and more productive life. If you sign up right now, you'll receive an {' '}
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:6751186976025706496/" target="_blank" rel="noreferrer">annual review and reflection Notion template</a> {' '}
        to help you win your year.
      </p>
      <h4>Subscribe</h4>
      <MailchimpSubscribe url={url} />
    </article>
  </Main>
);

export default Index;
