import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services.components/Services";
import ContactUS from "../../components/ContactUS/ContactUS";
import Testimonials from "../../components/Reviews/Reviews";

function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Testimonials />
      <div>
        <ContactUS />
      </div>
    </>
  );
}

export default Home;
