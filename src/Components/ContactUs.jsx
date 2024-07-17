import React, { useState } from 'react';

export const ContactUs = () => {
  const [inputs, setInputs] = useState({});
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://autoavenuebackend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      if (response.ok) {
        setMessageSent(true);
        setError('');
        setInputs({});
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Contact Us
      </h1>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We’re here to help! Whether you have questions about our inventory,
          need assistance with financing, or want to schedule a test drive, our
          team at Auto Avenue is ready to assist you. Please fill out the
          contact form below or reach out to us directly using the provided
          contact information.
        </p>

        {messageSent && (
          <p className="text-green-600">Your message has been sent successfully!</p>
        )}

        {error && (
          <p className="text-red-600">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              value={inputs.email || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter your email"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Phone Number:</span>
            <input
              type="tel"
              name="phone"
              value={inputs.phone || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter your phone number"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Message:</span>
            <textarea
              name="message"
              value={inputs.message || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Write your message"
            />
          </label>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default ContactUs;
