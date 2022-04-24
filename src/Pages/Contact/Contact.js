import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import React, { useState } from 'react';
import useStore from 'Store/Context';
import Form from './Form';

class CleanForm {
  constructor() {
    this.mail = '';
    this.message = '';
  }
}

function Contact() {
  const { currView } = useStore();

  const [form, setForm] = useState(new CleanForm());
  const [submited, setSubmited] = useState(false);

  const handleChange = (e) => {
    if (submited) setSubmited(false);
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    setForm(new CleanForm());
    setSubmited(true);
  };

  return (
    <section>
      <div className="absolute left-40 z-10">
        <FrontText
          shouldDisplay={currView === 2}
          heading1="Contact"
          bottom="Tech Stack"
        />
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      <Form onClick={handleSubmit} />
    </section>
  );
}

export default Contact;
