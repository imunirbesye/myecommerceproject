import React from "react";
import ContactLayout from "../layout/ContactLayout";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ContactInformations from "../layout/ContactInformations";
import ContactLetsTalk from "../layout/ContactLetsTalk";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <ContactLayout />
      <ContactInformations />
      <ContactLetsTalk />
    </div>
  );
}
