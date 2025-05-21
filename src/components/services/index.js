// src/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../Header';
const servicesData = [
  {
    title: "General Check-up",
    description: "Comprehensive health examinations to ensure overall well-being.",
    icon: "🩺",
    link: "/newHome"
  },
  {
    title: "Cardiology",
    description: "Advanced cardiac care for all heart-related conditions.",
    icon: "❤️",
    link: "https://www.narayanahealth.org/specialities/cardiology-adult"
  },
  {
    title: "Dermatology",
    description: "Expert care for skin, hair, and nail conditions.",
    icon: "🧴",
    link: "https://www.uhhospitals.org/services/dermatology-services/conditions-and-treatments"
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency services to handle critical health situations.",
    icon: "🚑",
    link: "/contact"
  },
  {
    title: "Pediatrics",
    description: "Comprehensive medical care for infants, children, and adolescents.",
    icon: "👶",
    link: "https://hebervalleymedical.com/"
  },
];
const isExternalLink = (link) => {
    return link.startsWith("http");
  };

const Services = () => {
  return (
    <><Header /><div className="services">
          <h1>Our Services</h1>
          <div className="services-container">
              {servicesData.map((service, index) => (
                  <div key={index} className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      {isExternalLink(service.link) ? (
              <a href={service.link} target="_blank" rel="noopener noreferrer" className="service-title">
                <h2>{service.title}</h2>
              </a>
            ) : (
              <Link to={service.link} className="service-title">
                <h2>{service.title}</h2>
              </Link>
            )}
                      <p>{service.description}</p>
                  </div>
              ))}
          </div>
      </div></>
  );
};

export default Services;
