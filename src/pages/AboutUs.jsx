import React from "react";

import Header from "../layout/Header";
import AUGetQuote from "../layout/AUGetQuote";
import AUProblemsT from "../layout/AUProblemsT";
import AUNumbers from "../layout/AUNumbers";
import AUVideoCard from "../layout/AUVideoCard";
import AUTeam from "../layout/AUTeam";
import ClientList from "../layout/ClientList";
import AUWorkWithUs from "../layout/AUWorkWithUs";
import Footer from "../layout/Footer";
import AUBigCompanies from "../layout/AUBigCompanies";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <Header />
      <AUGetQuote />
      <AUProblemsT />
      <AUNumbers />
      <AUVideoCard />
      <AUTeam />
      <AUBigCompanies />
      <ClientList />
      <AUWorkWithUs />
      <Footer />
    </div>
  );
}
