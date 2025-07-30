import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg space-y-6 w-full max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-amber-700 text-center">
        Contact Us
      </h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-gray-900 placeholder-gray-400 transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email address"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-gray-900 placeholder-gray-400 transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-gray-900 placeholder-gray-400 transition resize-none"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
