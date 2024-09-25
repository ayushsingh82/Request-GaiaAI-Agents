import React, { useState } from 'react';

const Form = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    aiAgent: '',
    bountyPrize: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-md mt-[0px] w-[500px] ">
      <h2 className="text-2xl font-bold mb-4">AI Agent Request Form</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-900 border border-purple-500 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contact" className="block mb-2">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-900 border border-purple-500 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="aiAgent" className="block mb-2">AI Agent Needed:</label>
          <input
            type="text"
            id="aiAgent"
            name="aiAgent"
            value={formData.aiAgent}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-900 border border-purple-500 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bountyPrize" className="block mb-2">Bounty Prize:</label>
          <input
            type="number"
            id="bountyPrize"
            name="bountyPrize"
            value={formData.bountyPrize}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-900 border border-purple-500 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-purple-500 hover:bg-purple-700 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Form;
