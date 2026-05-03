import { useState } from 'react';
import './App.css';

function App() {
        const [patient, setPatient] = useState({
    name: "",
    bloodGroup: "",
    age: "",
    height: "",
    mobile: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(patient);

    // reset form
    setPatient({
      name: "",
      bloodGroup: "",
      age: "",
      height: "",
      mobile: ""
    });
  };

  return (
    <div className="container">
      <h2>Hospital Case Paper</h2>

      <form onSubmit={handleSubmit}>
        <label>Patient Name:</label>
        <input
          type="text"
          name="name"
          value={patient.name}
          onChange={handleChange}
          required
        />

        <label>Blood Group:</label>
        <input
          type="text"
          name="bloodGroup"
          value={patient.bloodGroup}
          onChange={handleChange}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={patient.age}
          onChange={handleChange}
          required
        />

        <label>Height (cm):</label>
        <input
          type="number"
          name="height"
          value={patient.height}
          onChange={handleChange}
          required
        />

        <label>Mobile Number:</label>
        <input
          type="text"
          name="mobile"
          value={patient.mobile}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <h3>Patient Details</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Blood Group:</strong> {submittedData.bloodGroup}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Height:</strong> {submittedData.height} cm</p>
          <p><strong>Mobile:</strong> {submittedData.mobile}</p>
        </div>
      )}
    </div>
  );
    
}

export default App;
