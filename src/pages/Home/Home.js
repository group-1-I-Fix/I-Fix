import React from "react";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";
import Services from "../../components/Services.components/Services";
import ContactUS from "../../components/ContactUS/ContactUS";

function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Reviews />
      <div>
        <ContactUS />
      </div>
    </>
  );
}

export default Home;
