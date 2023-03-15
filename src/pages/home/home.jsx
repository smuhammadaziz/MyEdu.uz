import React from 'react';
import './home.scss';

import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Footer from '../../components/footer/footer';
import Form from '../../components/forms/form';
import Index from '../../components/statistics/stats';

function Home() {
  return (
    <div className='home'>
      <header>
        <Header />
      </header>

      <main>
        <section>
          <Intro />
          <Index />
          <Form />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
