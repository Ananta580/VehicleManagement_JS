import React from "react";
import Hero from "../../components/Hero";

const AboutUs = () => {
  return (
    <div className="">
      <Hero title={"About Us"} subtitle={"Know about our team and mission"} />
      <div className=" flex flex-col items-center">
        <div className="py-16 px-6 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 text-xl">
              To create a seamless and user-friendly car management experience,
              empowering our users to efficiently manage their automotive data
              while driving innovation in the industry.
            </p>
          </div>
        </div>
        <div className="py-24 px-6 w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-5 text-center text-gray-800">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <img
                  src="https://api.dicebear.com/9.x/identicon/svg?seed=Leo"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">
                  Bibek Shrestha
                </h3>
                <p className="text-gray-500">Lead Developer</p>
              </div>
              <div className="bg-white p-6  rounded-lg text-center">
                <img
                  src="https://api.dicebear.com/9.x/identicon/svg?seed=Ryan"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">
                  Subash Pariyar
                </h3>
                <p className="text-gray-500">Software Developer</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <img
                  src="https://api.dicebear.com/9.x/identicon/svg?seed=Aidan"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">
                  Ananta Poudel
                </h3>
                <p className="text-gray-500">Product Manager</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <img
                  src="https://api.dicebear.com/9.x/identicon/svg?seed=Amaya"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">
                  Bikash Sapkota
                </h3>
                <p className="text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 px-6 bg-indigo-600 text-white w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg">
              To revolutionize car management solutions, paving the way for a
              smarter and more connected automotive future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
