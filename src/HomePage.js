import React from "react";

const projects = [
  {
    title: "Highway & Road",
    description:
      "Asian Highway project, Gaforgon, Mymensingh – modern road infrastructure for smooth connectivity.",
    images: ["/kkk.jpg", "/ll.jpg"],
  },
  {
    title: "Interior Design",
    description:
      "Bangladesh Static Interior Work – delivering elegant and sustainable design solutions.",
    images: ["/mm.jpg", "/uu.jpg"],
  },
  {
    title: "Interior Design",
    description:
      "Mohakhali Epi Building Interior – premium corporate workspace with modern finish.",
    images: ["/aa.jpg", "/bb.jpg"],
  },
  {
    title: "Building Construction",
    description: "Natore Civil Surgeon office.",
    images: ["/cc.jpg", "/dd.jpg"],
  },
  {
    title: "Apartment Complex",
    description: "Jolshiri Abashon G+8 nine-storied building.",
    images: ["/e.jpg", "/ee.jpg"],
  },
  {
    title: "River Side Construction",
    description: "CC block casting, Jamalpur.",
    images: ["/f.jpg", "/ff.jpg"],
  },
  {
    title: "Hospital Building",
    description: "EPI clinic, Rangpur.",
    images: ["/g.jpg", "/gg.jpg"],
  },
];

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center">
        <img
          src="/kk.jpg"
          alt="Trust Builder Logo"
          className="w-40 h-40 mb-4 rounded-full border-4 border-white shadow-xl animate-bounce"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Trusted Builders & Engineers Consultancy
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Building Dreams with Innovation and Trust – Residential, Commercial & Infrastructure Experts
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600">
          About Us
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            <strong>Managing Director:</strong> Engr. Abu Jahed Sarker  
            (BSc in Civil Engineering, NSU – Membership # M-50607)
          </p>
          <p>
            Trusted Builders & Engineers Consultancy (TBE) is a professional
            engineering and construction firm providing end-to-end solutions for
            building, infrastructure, and consultancy projects across Bangladesh.
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Our Services
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Building Construction (Civil work, Structure & Architecture)</li>
              <li>Building Supervision</li>
              <li>Architectural Drawing</li>
              <li>Building Design</li>
              <li>Plumbing Work</li>
              <li>Electrical Work</li>
              <li>Interior Design & Drawing</li>
              <li>Total Cost Estimation of Building</li>
              <li>Free Consultancy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-700">
          Our Projects
        </h2>
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 ${
                idx % 2 === 0
                  ? "bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50"
                  : "bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50"
              }`}
            >
              {/* Alternate Layout */}
              {idx % 2 === 0 ? (
                <>
                  <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={project.title}
                        className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-500"
                      />
                    ))}
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg">
                      {project.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-pink-700">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg">
                      {project.description}
                    </p>
                  </div>
                  <div className="md:w-1/2 order-1 md:order-2 grid grid-cols-2 gap-4">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={project.title}
                        className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-500"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-700">
          Contact Us
        </h2>
        <div className="max-w-3xl mx-auto text-center space-y-3 text-lg">
          <p>
            <strong>Address:</strong> Ka-22/1, South Kuril, Nadda, Dhaka-1212
          </p>
          <p>
            <strong>Phone:</strong> 017670-30219, 01627-530911
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:tbecbuilders@gmail.com"
              className="text-blue-600 underline"
            >
              tbecbuilders@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
