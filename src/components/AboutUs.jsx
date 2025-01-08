// AboutUs.jsx

import React from 'react';

const AboutUs = () => {
  // Example timeline data with bigger images
  const timelineData = [
    {
      year: '1952',
      event: 'First carpentry shop',
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_6273-scaled.webp', // Example bigger image
    },
    {
      year: '1955',
      event: "First Showroom",
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_6272.webp',
    },
    {
      year: '1956',
      event: "First Truck",
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_6271.webp',
    },
    {
      year: '1968',
      event: 'First appearance of the second generation Dr. Aly Arafa',
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/ddddd.webp',
    },
    {
      year: '1990',
      event: "Dr. Aly Arafa started his own brand",
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/Screenshot-2023-08-10-at-6.44.28-PM.webp',
    },
    {
      year: '1991',
      event: 'Aly Arafa First Showroom',
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/029_Original.webp',
    },
    {
      year: '2000',
      event: 'First appearance of the third generation Mohamed Arafa',
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/dddddd.webp',
    },
    {
      year: '2013',
      event: 'Mahmoud Arafa enters admin with innovative perspectives',
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/AAAAAAAA.webp',
    },
    {
      year: '2015',
      event: "Advanced factory crafts modern furniture with top tier technology",
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/DDDDD-1.webp',
    },
    {
      year: '2020',
      event: "Designing the new Swedish furniture line, under Aly Arafa's guidance Nu",
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00349-1.webp',
    },
    {
      year: '2022',
      event: "Designing the new Dutch furniture line, under Aly Arafa's guidance Van Du",
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1986.webp',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">


      {/* 1) About Section (White background, black text) */}
      <div className="bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Aly Arafa Furniture</h2>
              <p className="leading-relaxed">
                Founded in 1952, Arafa is one of the leading suppliers of high-quality furniture in Egypt.
                In 1990, Aly Arafa was introduced as a sub-brand offering totally innovative choices for
                contemporary designs. Thanks to the potentials of the third generation that lead Aly Arafa
                to be widely admitted as a remarkable brand offering unique trends.
              </p>
            </div>

            {/* Image */}
            <div className="h-80 bg-gray-100 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://d1yp2xq08uy96k.cloudfront.net/images/ssssss-1.webp"
                alt="Heritage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2) Legacy Section (Dark-gray background, white text) */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="h-80 bg-gray-700 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://d1yp2xq08uy96k.cloudfront.net/images/dsds.webp"
                alt="Through Time"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">THROUGH TIME, BEYOND TIME</h2>
              <p className="leading-relaxed">
                Aly Arafa has inherited the core principles of the group with sincere consideration of
                customer service and high-end product quality. In addition to the widespread presence
                throughout the local market, our reputation crossed borders to Arab countries,
                where we furnished many luxurious spaces in KSA, UAE, Bahrain &amp; Kuwait.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3) Brands Section (White background, black text) */}
      <div className="bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Nu Brand */}
            <div className="space-y-6">
              {/* Dark-gray background for a white logo */}
              <div className="flex items-center justify-center h-64 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                {/* Replace with your white logo */}
                <img
                  src="https://d1yp2xq08uy96k.cloudfront.net/images/AGO00412-1.webp"
                  alt="Nu Logo"
                    className="w-full h-full object-cover opacity-90"
                />
              </div>
              <h3 className="text-2xl font-bold">A New Beginning - Nu</h3>
              <p className="leading-relaxed">
                Nu has inspired both the name and spirit from the intercontinental journey traveled yearly
                by this tiny but strong bird. Nu, which means "Now" in Swedish, works to reflect that wonderful
                blend between Egyptian and Swedish cultures through its contemporary designs and delightful colors.
              </p>
            </div>

            {/* Van Du Brand */}
            <div className="space-y-6">
              <div className="flex items-center justify-center h-64 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                {/* Replace with your white logo */}
                <img
                  src="https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4584.webp"
                  alt="Nu Logo"
                    className="w-full h-full object-cover opacity-90"
                />
              </div>
              <h3 className="text-2xl font-bold">UNVEILING Van Du</h3>
              <p className="leading-relaxed">
                Introducing Van Du collection by collaboration with remarkable Dutch designers.
                Van Du revives the spirit of the great historic painters of the Netherlands,
                displayed exclusively at our Heliopolis Branch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4) Milestones Timeline (Dark-gray background, white text) */}
{/* Timeline Section (Dark-gray background, white text) */}
<div className="bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold text-center mb-12">Our Journey Through Time</h2>
    
    {/* Responsive grid: 1 column on mobile, 2 on small screens, 3 on medium+ */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {timelineData.map((milestone, index) => (
        <div
          key={index}
          className="bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
        >
          {/* Bigger, squared image */}
          <img
            src={milestone.image}
            alt={milestone.year}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold ">{milestone.year}</h3>
            <p className="mt-2 leading-relaxed">{milestone.event}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* 5) Governance Section (White background, black text) */}
      <div className="bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Governance</h2>
          <div className="flex flex-col items-center">
            {/* Governance Image */}
            <div className="w-full md:w-2/3 h-100 bg-gray-100 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow mb-4">
              <img
                src="https://d1yp2xq08uy96k.cloudfront.net/images/AGO05187-scaled.webp"
                alt="Governance"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center max-w-2xl mx-auto leading-relaxed">
              From the left: Mahmoud Arafa, Aly Arafa &amp; Mohamed Arafa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
