import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import React from 'react';
import useStore from 'Store/Context';
import Form from './Form';

function Contact() {
  const { currView } = useStore();

  return (
    <section>
      <div className="absolute left-40 z-10">
        <FrontText
          shouldDisplay={currView === 4}
          heading1="Contact"
          bottom="L.nats51@yahoo.com"
        />
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      <Form shouldDisplay={currView === 4} />
    </section>
  );
}

export default Contact;
