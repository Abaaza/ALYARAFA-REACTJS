// ContactUs.js

import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    department: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit or process formData here (POST to API, etc.)
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for data.');
    setFormData({
      name: '',
      email: '',
      country: '',
      phone: '',
      department: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Intro / Contact Info */}
        <section className="mb-8 text-gray-800">
          <p className="leading-relaxed mb-4">
            Thank you for your interest in <span className="font-semibold">Aly Arafa</span> furniture. We value your feedback, inquiries, and suggestions. Please feel free 
            to get in touch with us using the information provided below. Our dedicated 
            team is ready to assist you.
          </p>

          <h2 className="text-xl font-semibold mb-2">General Inquiries:</h2>
          <p>Email: <a href="mailto:info@arafafurniture.com" className="text-blue-600">info@arafafurniture.com</a></p>
          <p>Phone: <a href="tel:+201027037000" className="text-blue-600">+201027037000</a></p>
          <p className="text-sm text-gray-600 mt-2">
            We aim to respond to all inquiries within 24-48 hours. Your satisfaction 
            is our priority, and we strive to provide you with the best possible assistance.
          </p>
        </section>

        {/* Showrooms */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Showroom Visits</h2>
          <p className="text-gray-700 mb-4">
            To experience our furniture collections firsthand, we invite you to visit our showrooms. 
            Our showrooms are designed to inspire and showcase the finest furniture pieces that exemplify 
            elegance and quality craftsmanship.
          </p>

          {/* Showroom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* New Cairo (Nu) */}
            <div className="bg-white p-4 rounded shadow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                New Cairo (Nu)
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                383,385 N Teseen Infront of Water Way White 2, New Cairo 1, 
                Cairo Governorate 11865 <br />
                (+20102 703 7000)
              </p>
              {/* Example mini map iframe (replace src with your Google Maps embed link) */}
              <iframe
                title="New Cairo Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.9310599695644!2d31.4957425!3d30.0233171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145820b1641e0cc3%3A0x54c2efc9cd477717!2sWaterway%20White%20II!5e0!3m2!1sen!2seg!4v1690673506661!5m2!1sen!2seg"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>

            {/* Mivida (Nu) */}
            <div className="bg-white p-4 rounded shadow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Mivida (Nu)
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Mivida Parcel 41 (D-03) Boulevard <br />
                (+201010362373)
              </p>
              {/* Mini map iframe */}
              <iframe
                title="Mivida Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110675.11977132196!2d31.252511931159237!3d29.970285554653023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822f1db5b0301%3A0x8689435ae2ce01d5!2sEmaar%20Mivida%20Boulevard!5e0!3m2!1sen!2seg!4v1690673563758!5m2!1sen!2seg"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>

            {/* Heliopolis (Van Du) */}
            <div className="bg-white p-4 rounded shadow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Heliopolis (Van Du)
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                14 Nabil El Wakkad St. <br />
                (+201065516886)
              </p>
              <iframe
                title="Heliopolis Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2570311576648!2d31.331366715445995!3d30.002244624493132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815cb95474517%3A0x93a3141ee69b9a6!2sNabil%20El%20Wakkad%20St.%2C%20Al%20Matar%2C%20El%20Nozha%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1690673676459!5m2!1sen!2seg"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>

            {/* Factory */}
            <div className="bg-white p-4 rounded shadow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Factory
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Building 702 3rd Settelment, Industrial Zone, Cairo, Egypt
              </p>
              {/* Example minimal or placeholder map */}
              <iframe
                title="Factory Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.4387893499766!2d31.373083415446434!3d30.01837612403279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458166cc843c257%3A0x64a700990fa74349!2sIndustrial%20Area%2C%20New%20Cairo%203!5e0!3m2!1sen!2seg!4v1690673724864!5m2!1sen!2seg"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>

            {/* New Administrative Capital */}
            <div className="bg-white p-4 rounded shadow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                New Administrative Capital
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Better Home Mall Opening Soon
              </p>
              <iframe
                title="New Capital Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5520.959265331971!2d31.670600586663308!3d29.99715053305213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582147e3a0709f%3A0x60c3745fd1f7e582!2sNew%20Administrative%20Capital!5e0!3m2!1sen!2seg!4v1690673774891!5m2!1sen!2seg"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>

            {/* Sweden Design House */}
            <div className="bg-white p-4 rounded shadow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Sweden Design House
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                ARAFA Möbler Storegardsvagen 31B LGH 1202 549 38, Skövde, 
                Götaland County, Sweden <br />
                (+46765653865)
              </p>
              <iframe
                title="Sweden House Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4249.684944767249!2d13.85049012426089!3d58.39057997913402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465bcaf280d294cd%3A0x5307819a00f964fd!2sSk%C3%B6vde%2C%20Sweden!5e1!3m2!1sen!2seg!4v1690673866645!5m2!1sen!2seg"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white p-6 rounded-md shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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

            {/* Row 2: Country, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Your Country</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Sweden">Sweden</option>
                  <option value="USA">USA</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
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
            </div>

            {/* Row 3: Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Select Department
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">-- Select Department --</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Design">Design</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="5"
                placeholder="Enter your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
