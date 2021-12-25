import React from "react";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";
import Services from "../../components/Services.components/Services";
import ReservationForm from "../../components/reservation-form/reservation-form";
import ContactUS from "../../components/ContactUS/ContactUS";

function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Reviews />
      <div>
        <ReservationForm />
        <ContactUS />
      </div>
    </>
  );
}

export default Home;
