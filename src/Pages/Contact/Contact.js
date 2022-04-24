import FrontText from 'Components/Animations/FrontText';
import Button from 'Components/Button';
import React, { useState } from 'react';
import useStore from 'Store/Context';

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

      <div className="signup-form right-36 w-1/3 py-8 px-8 rounded-lg z-20 absolute flex-col flex justify-center">
        <input
          type="text"
          className="bg-[#141414] my-2 rounded-3xl w-full py-2 text-sm px-4 outline-none w-full"
          placeholder="Email"
          required
          value={form.mail}
          name="mail"
          onChange={handleChange}
        />
        <textarea
          type="textarea"
          className=" bg-[#141414] my-2 h-28 rounded-3xl w-full py-4 text-sm px-4 outline-none w-full"
          placeholder="Message"
          required
          value={form.message}
          name="message"
          onChange={handleChange}
        />

        <div className="signup-button my-1 relative ">
          <button
            className={`w-full rounded-3xl flex justify-center items-center relative ${
              submited ? 'signup-button-clicked' : ''
            }`}
            onClick={handleSubmit}
          >
            <span>Submit</span>

            <svg
              className="feather feather-check"
              fill="none"
              height="24"
              stroke="#91b3bc"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

const Check = (
  <svg
    className="feather feather-check"
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Contact;
