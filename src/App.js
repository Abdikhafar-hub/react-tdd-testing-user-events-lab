import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: {
      interest1: false,
      interest2: false,
      interest3: false,
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      interests: {
        ...prevFormData.interests,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <header>
        <h1>Hi, I'm [Your Name]</h1>
        <img src="https://via.placeholder.com/350" alt="My profile pic" />
      </header>

      <section>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
      </section>

      <section>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <br />
          <label>
            Select your areas of interest:
            <br />
            <label>
              <input
                type="checkbox"
                name="interest1"
                checked={formData.interests.interest1}
                onChange={handleCheckboxChange}
              />
              Interest 1
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="interest2"
                checked={formData.interests.interest2}
                onChange={handleCheckboxChange}
              />
              Interest 2
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="interest3"
                checked={formData.interests.interest3}
                onChange={handleCheckboxChange}
              />
              Interest 3
            </label>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {submitted && <p>Thank you for signing up!</p>}
      </section>

      <footer>
        <a href="https://github.com">GitHub</a> | <a href="https://linkedin.com">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
