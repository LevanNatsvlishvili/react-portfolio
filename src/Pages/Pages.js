import React from 'react';
import Welcome from './Welcome';
function Pages() {
  return (
    <div className="relative z-index-1">
      <section className="blue">
        <Welcome />
      </section>
      <section className="red">2</section>
      <section className="green">3</section>
      <section className="purple">4</section>
    </div>
  );
}

export default Pages;
