import React from "react";
import Link from "next/link";

const About = () => { 
  return (
    <>
    <div>
      <div className="flex flex-col items-center justify-center text-white p-10">
        <div className="flex items-center gap-1 font-bold text-5xl">
          About TeaBreeze
        </div>
      </div>
      
      <div className="bg-white h-1 opacity-5"></div>

      <div className="text-white py-10 px-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            At TeaBreeze, our mission is to empower tea enthusiasts and entrepreneurs by providing a dedicated platform for crowdfunding their unique tea-related projects. Whether you're launching a new tea blend, opening a tea shop, or creating innovative tea accessories, TeaBreeze is here to help bring your vision to life.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg">
            Founded by a group of passionate tea lovers, TeaBreeze is more than just a crowdfunding platform. We're a community of tea enthusiasts who believe in the power of collaboration and shared passion. Our team is dedicated to supporting both creators and backers in their journey towards bringing exciting tea projects to fruition.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-lg">
            <li><strong>Discover:</strong> Explore a wide range of tea-related projects and find the ones that inspire you.</li>
            <li><strong>Support:</strong> Back your favorite projects by pledging funds to help them reach their goals.</li>
            <li><strong>Create:</strong> Launch your own tea project and share your passion with the world.</li>
            <li><strong>Enjoy:</strong> Receive unique rewards and experiences from the projects you support.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg">
            <li><strong>Passion:</strong> We are driven by a love for tea and the desire to share it with the world.</li>
            <li><strong>Community:</strong> We believe in the power of bringing people together to support innovative ideas.</li>
            <li><strong>Transparency:</strong> We are committed to maintaining openness and honesty in all our interactions.</li>
            <li><strong>Support:</strong> We provide resources and guidance to help creators succeed.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            Have questions or need assistance? Reach out to us at <a href="mailto:support@teabreeze.com" className="text-blue-400 underline">support@teabreeze.com</a>. We're here to help!
          </p>
        </section>
      </div>

      <div className="bg-white h-1 opacity-5"></div>

      <div className="text-white py-20 text-center">
        <Link href="./">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default About

export const metadata = {
  title: 'About - TeaBreeze',
}