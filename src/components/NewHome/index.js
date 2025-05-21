import React, { useState, useEffect } from "react";
import Select from "react-select";
import Header from "../Header";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Loader from "../Loader";
import "./index.css";

const NewHome = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [matchedDiseases, setMatchedDiseases] = useState([]);
  const [symptomOptions, setSymptomOptions] = useState([]);
  const [error, setError] = useState("");
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate('/register');
    }
  }, [jwtToken, navigate]);

  useEffect(() => {
    setLoading(true); // Set loading state to true
    fetch("/diseases.json")
      .then((response) => response.json())
      .then((data) => {
        setDiseases(data.diseases);
        const allSymptoms = Array.from(
          new Set(data.diseases.flatMap((disease) => disease.symptoms))
        );
        setSymptomOptions(
          allSymptoms.map((symptom) => ({ label: symptom, value: symptom }))
        );
        setLoading(false); // Set loading state to false after data fetch
      })
      .catch((error) => {
        console.error("Error fetching diseases:", error);
        setLoading(false); // Ensure loading state is set to false on error
      });
  }, []);

  const handleSearch = () => {
    setLoading(true); // Start loading

    setTimeout(() => {
      const selectedSymptomValues = selectedSymptoms.map((symptom) =>
        symptom.value.toLowerCase()
      );
      const matched = diseases.filter((disease) =>
        selectedSymptomValues.some((symptom) =>
          disease.symptoms.includes(symptom)
        )
      );
      if (matched.length === 0) {
        setError("No diseases match the given symptoms.");
      } else {
        setError("");
        setMatchedDiseases(matched);
      }
      setLoading(false); 
    }, 2000);
  };

  if (jwtToken === undefined) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="app-container">
        <h1 className="heading">Cure Your Disease</h1>
        <div className="input-container">
          <label htmlFor="symptoms" className="color">Enter symptoms:</label>
          <Select
            isMulti
            id="symptoms"
            options={symptomOptions}
            value={selectedSymptoms}
            onChange={setSelectedSymptoms}
            placeholder="Select symptoms"
          />
        </div>
        
        <div className="select-container">
          <label htmlFor="gender" className="color">Select gender:</label>
          <Select
            id="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" }
            ]}
            value={gender}
            onChange={setGender}
            placeholder="Select gender"
          />
        </div>
      
        <div className="age-container">
          <label htmlFor="age" className="color">Enter age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>
        
        <button onClick={handleSearch}style={{color:'white'}}>Submit Symptoms</button>
        
        {/* Full-screen Loader */}
        {loading && <Loader />}
        
        <div className="results-container">
          {error && <p className="error-message">{error}</p>}
          {matchedDiseases.length > 0 ? (
            matchedDiseases.map((disease, index) => (
              <div key={index} className="disease-card">
                <h2>{disease.name}</h2>
                <p>
                  <strong>Disease Overview:</strong> {disease.description}
                </p>
                <p>
                  <strong>Warning Indicators:</strong>{" "}
                  {disease.symptoms.join(", ")}
                </p>
                <p>
                  <strong>Medication:</strong> {disease.medication.join(", ")}
                </p>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </>
  );
};

export default NewHome;
