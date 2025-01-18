// Careers.js

import React, { useState } from 'react';
import {
  FaLightbulb,
  FaShieldAlt,
  FaPalette,
  FaChartLine,
  FaHandsHelping,
} from 'react-icons/fa'; // Example icons
import emailjs from 'emailjs-com'; // <-- import EmailJS

const Careers = () => {
  // Basic local form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    graduationDate: '',
    speciality: '',
    position: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Using EmailJS to send data
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // If your EmailJS template references just one field (e.g., {{user_name}}),
    // we can combine all data into a single string:
    const templateParams = {
      user_name: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Graduation Date: ${formData.graduationDate}
Speciality: ${formData.speciality}
Position: ${formData.position}
Message: ${formData.message}
      `,
    };

    // Send email via EmailJS
    emailjs
      .send(
        'service_4hrebk8',    // Service ID
        'template_1zxs0jz',   // Template ID
        templateParams,
        '1mIy5IpEpJPFCN01g'   // User (public) ID
      )
      .then((response) => {
        alert('Application submitted successfully!');
        console.log('EmailJS SUCCESS:', response.status, response.text);

        // Clear form after success
        setFormData({
          name: '',
          email: '',
          phone: '',
          graduationDate: '',
          speciality: '',
          position: '',
          message: '',
        });
      })
      .catch((error) => {
        alert('There was an error sending your application.');
        console.log('EmailJS FAILED...', error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section - (omitted for brevity or you can place a header/banner) */}

      {/* Main content container */}
      <div className="flex-grow max-w-6xl mx-auto px-6 py-10">
        {/* Intro Paragraph */}
        <section className="mb-10">
          <p className="text-gray-800 leading-relaxed">
            At <span className="font-semibold">Aly Arafa</span>, we believe that our success 
            is driven by the talent, dedication, and passion of our team members. 
            We are always looking for individuals who share our commitment to excellence 
            and are eager to contribute to the growth and success of our brand. If you are 
            seeking an exciting career in the furniture industry, we invite you to explore 
            the opportunities available at <span className="font-semibold">Aly Arafa</span>.
          </p>
        </section>

        {/* Why Work with Us - Card Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Work with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Inspiring Work Environment */}
            <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition group">
              <FaLightbulb className="text-gray-400 text-3xl mb-4 group-hover:scale-105 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Inspiring Work Environment</h3>
              <p className="text-gray-600">
                Join a dynamic and creative team that fosters innovation, collaboration, 
                and continuous learning.
              </p>
            </div>

            {/* Card 2: Quality and Craftsmanship */}
            <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition group">
              <FaShieldAlt className="text-gray-400 text-3xl mb-4 group-hover:scale-105 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Quality & Craftsmanship</h3>
              <p className="text-gray-600">
                Work with premium materials and create furniture pieces that stand 
                the test of time.
              </p>
            </div>

            {/* Card 3: Passion for Design */}
            <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition group">
              <FaPalette className="text-gray-400 text-3xl mb-4 group-hover:scale-105 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Passion for Design</h3>
              <p className="text-gray-600">
                Contribute to beautiful, timeless furniture collections that blend 
                aesthetics, comfort, and functionality.
              </p>
            </div>

            {/* Card 4: Career Development */}
            <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition group">
              <FaChartLine className="text-gray-400 text-3xl mb-4 group-hover:scale-105 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Career Development</h3>
              <p className="text-gray-600">
                Enjoy ongoing training, mentorship opportunities, and a clear path to 
                help you grow to your full potential.
              </p>
            </div>

            {/* Card 5: Team Spirit */}
            <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition group">
              <FaHandsHelping className="text-gray-400 text-3xl mb-4 group-hover:scale-105 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Team Spirit</h3>
              <p className="text-gray-600">
                Join a supportive, inclusive environment where your ideas 
                and contributions are valued.
              </p>
            </div>

            {/* (Optional) more cards or an empty placeholder */}
          </div>
        </section>

        {/* Current Openings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Openings</h2>
          <p className="text-gray-700 leading-relaxed">
            We have a range of exciting career opportunities across various departments. 
            Whether you are a designer, sales professional, craftsman, or have expertise 
            in operations, marketing, or customer service, we may have a position that 
            aligns with your skills and aspirations.
          </p>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Please ensure to include your resume, cover letter, and any relevant portfolio 
            or work samples as a link in your message.
          </p>
          <p className="mt-2 text-sm text-gray-500 italic">
            Note: Only shortlisted candidates will be contacted for further evaluation 
            and interviews. We are an equal opportunity employer and welcome applications 
            from individuals of all backgrounds and experiences.
          </p>
        </section>

        {/* Application Form */}
        <section className="bg-white p-6 rounded-md shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="example@domain.com"
                />
              </div>
            </div>

            {/* Row 2: Phone, Graduation Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label
                  htmlFor="graduationDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date Of Graduation
                </label>
                <input
                  id="graduationDate"
                  name="graduationDate"
                  type="date"
                  value={formData.graduationDate}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Row 3: Speciality, Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="speciality"
                  className="block text-sm font-medium text-gray-700"
                >
                  Speciality
                </label>
                <input
                  id="speciality"
                  name="speciality"
                  type="text"
                  value={formData.speciality}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. Interior Design, Marketing..."
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Position
                </label>
                <input
                  id="position"
                  name="position"
                  type="text"
                  value={formData.position}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. Designer, Sales..."
                />
              </div>
            </div>

            {/* Message / Additional Info */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="5"
                placeholder="Tell us about yourself, share a link to your resume/portfolio, etc."
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-right">
              <button
                type="submit"
                className="inline-block bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Careers;
