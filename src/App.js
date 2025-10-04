// HomePage.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTools, FaBuilding } from "react-icons/fa";

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
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 text-white overflow-hidden bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">
        <motion.img
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src="/kk.jpg"
          alt="Trust Builder Logo"
          className="w-40 h-40 mb-6 rounded-full border-4 border-white shadow-xl"
        />
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white"
        >
          Trusted Builders & Engineers Consultancy
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-center max-w-2xl"
        >
          Building Dreams with Innovation and Trust – Residential, Commercial & Infrastructure Experts
        </motion.p>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white/20 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-24 bg-gray-50">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">About Us</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed text-center"
        >
          <p className="text-xl">
            <strong>Managing Director:</strong> Engr. Abu Jahed Sarker  
            (BSc in Civil Engineering, NSU – Membership # M-50607)
          </p>
          <p>
            Trusted Builders & Engineers Consultancy (TBE) is a professional
            engineering and construction firm providing end-to-end solutions for
            building, infrastructure, and consultancy projects across Bangladesh.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { icon: <FaBuilding />, title: "Construction", desc: "Civil, Structure & Architecture" },
              { icon: <FaTools />, title: "Supervision", desc: "Professional site & project supervision" },
              { icon: <FaBuilding />, title: "Interior Design", desc: "Modern & sustainable interiors" },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md p-6 rounded-xl"
              >
                <div className="text-4xl text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-600">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-700">Our Projects</h2>

        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-500 ${
                idx % 2 === 0
                  ? "bg-white"
                  : "bg-gradient-to-r from-purple-100 via-pink-100 to-purple-50"
              }`}
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                      />
                    ))}
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">{project.title}</h3>
                    <p className="text-gray-700 text-lg">{project.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-pink-700">{project.title}</h3>
                    <p className="text-gray-700 text-lg">{project.description}</p>
                  </div>
                  <div className="md:w-1/2 order-1 md:order-2 grid grid-cols-2 gap-4">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">Contact Us</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-blue-600" /> <strong>Address:</strong> Ka-22/1, South Kuril, Nadda, Dhaka-1212</p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-blue-600" /> <strong>Phone:</strong> 017670-30219, 01627-530911</p>
            <p className="flex items-center gap-3"><FaEnvelope className="text-blue-600" /> 
              <strong>Email:</strong>{" "}
              <a href="mailto:tbecbuilders@gmail.com" className="text-blue-600 underline">tbecbuilders@gmail.com</a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg p-6 rounded-xl space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
