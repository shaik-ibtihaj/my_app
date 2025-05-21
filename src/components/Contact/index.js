import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Contact = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate('/register');
    }
  }, [jwtToken, navigate]);

  const toggleAccordion = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  if (jwtToken === undefined) {
    return null;
  }

  const cities = [
    {
      name: 'Mumbai',
      emergencyNumbers: [
        { name: 'Police Emergency', number: '100' },
        { name: 'Fire Service', number: '101' },
        { name: 'Ambulance Service', number: '102' },
      ],
    },
    {
      name: 'Delhi',
      emergencyNumbers: [
        { name: 'Police Control', number: '100' },
        { name: 'Fire Brigade', number: '101' },
        { name: 'Ambulance Control', number: '102' },
      ],
    },
    {
      name: 'Bangalore',
      emergencyNumbers: [
        { name: 'Emergency Police', number: '100' },
        { name: 'Fire Control Room', number: '101' },
        { name: 'Emergency Medical Services', number: '102' },
      ],
    },
    {
      name: 'Kolkata',
      emergencyNumbers: [
        { name: 'Police Helpline', number: '100' },
        { name: 'Fire Emergency', number: '101' },
        { name: 'Emergency Ambulance', number: '102' },
      ],
    },
    {
      name: 'Chennai',
      emergencyNumbers: [
        { name: 'Police Assistance', number: '100' },
        { name: 'Fire Services', number: '101' },
        { name: 'Emergency Ambulance Services', number: '102' },
      ],
    },
    {
      name: 'Hyderabad',
      emergencyNumbers: [
        { name: 'Police Help', number: '100' },
        { name: 'Fire Brigade Services', number: '101' },
        { name: 'Medical Emergency', number: '102' },
      ],
    },
    {
      name: 'Ahmedabad',
      emergencyNumbers: [
        { name: 'Police Assistance Service', number: '100' },
        { name: 'Fire Emergency Control', number: '101' },
        { name: 'Emergency Medical Care', number: '102' },
      ],
    },
    {
      name: 'Pune',
      emergencyNumbers: [
        { name: 'Police Emergency Help', number: '100' },
        { name: 'Fire Brigade Support', number: '101' },
        { name: 'Ambulance Emergency', number: '102' },
      ],
    },
    {
      name: 'Jaipur',
      emergencyNumbers: [
        { name: 'Police Emergency Control', number: '100' },
        { name: 'Fire Rescue Services', number: '101' },
        { name: 'Emergency Medical Response', number: '102' },
      ],
    },
    {
      name: 'Surat',
      emergencyNumbers: [
        { name: 'Police Emergency Response', number: '100' },
        { name: 'Fire Safety Services', number: '101' },
        { name: 'Emergency Medical Services', number: '102' },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="emergency-contacts-container">
        <h1 className="heading">Emergency Health Contact Details - Indian Cities</h1>
        <div className="accordion-grid">
          {cities.map((city, index) => (
            <div key={index} className={`contact-section ${activeSection === city.name.toLowerCase() ? 'active' : ''}`}>
              <h2 onClick={() => toggleAccordion(city.name.toLowerCase())} className="accordion-title">
                {city.name}
              </h2>
              {activeSection === city.name.toLowerCase() && (
                <ul>
                  {city.emergencyNumbers.map((emergency, idx) => (
                    <li key={idx}>
                      <a href={`tel:${emergency.number}`}>{emergency.name}: {emergency.number}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
