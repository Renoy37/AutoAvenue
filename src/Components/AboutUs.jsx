import React from 'react';

export const AboutUs = () => {
  return (
    <article id="about" className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>

      <section className="mb-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">Company Overview</h3>
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">Welcome To Auto Avenue</h3>
          <p className="text-gray-600 leading-relaxed">
            At Auto Avenue, our passion for cars drives us to provide our customers with an unparalleled car buying experience. With years of expertise in the automotive industry, we offer a diverse selection of new and pre-owned vehicles to suit every taste and budget. Our commitment to quality, transparency, and customer satisfaction sets us apart from the competition.
            <br /><br />
            Our Mission: Our mission is to help you find the perfect car that fits your lifestyle and needs. We strive to offer a wide range of high-quality vehicles at competitive prices while delivering exceptional customer service.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">Our Values</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><span className="font-semibold">Integrity:</span> We believe in honesty and transparency in all our dealings.</li>
          <li><span className="font-semibold">Customer Focus:</span> Our customers are at the heart of everything we do.</li>
          <li><span className="font-semibold">Excellence:</span> We are committed to providing top-notch service and support.</li>
          <li><span className="font-semibold">Innovation:</span> We continuously seek to improve and innovate our processes.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">Meet Our Team</h2>
        <p className="text-gray-600 leading-relaxed">
          Our dedicated team of professionals is here to guide you through every step of the car buying process. Get to know the people who make Auto Avenue a trusted name in the automotive industry.
          <br /><br />
          <span className="font-semibold">John Doe - CEO:</span> John brings over 20 years of automotive experience and a passion for customer service. Under his leadership, Auto Avenue has grown to become a leader in the industry.
          <br /><br />
          <span className="font-semibold">Jane Smith - Sales Manager:</span> Jane has a knack for understanding customers' needs and finding the perfect vehicle for them. Her friendly approach and extensive knowledge make the car buying process enjoyable and hassle-free.
          <br /><br />
          <span className="font-semibold">Michael Brown - Finance Expert:</span> Michael's expertise in automotive financing helps our customers find the best financing options available. He works tirelessly to ensure that every customer gets a deal that suits their budget.
          <br /><br />
          <span className="font-semibold">Emily Johnson - Customer Service Specialist:</span> Emily's commitment to customer satisfaction ensures that every customer leaves our dealership with a smile. She is always ready to assist with any questions or concerns.
        </p>
      </section>
    </article>
  );
};
