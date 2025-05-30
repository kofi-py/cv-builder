import React, { useState } from "react";
import "../styles/PracticalExperience.css";

function PracticalExperience() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="section">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="company"
            value={info.company}
            onChange={handleChange}
            placeholder="Company Name"
            required
          />
          <input
            name="position"
            value={info.position}
            onChange={handleChange}
            placeholder="Position Title"
            required
          />
          <textarea
            name="responsibilities"
            value={info.responsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
            required
          />
          <input
            name="from"
            value={info.from}
            onChange={handleChange}
            placeholder="From (Date)"
            required
          />
          <input
            name="to"
            value={info.to}
            onChange={handleChange}
            placeholder="Until (Date)"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Company:</strong> {info.company}
          </p>
          <p>
            <strong>Position:</strong> {info.position}
          </p>
          <p>
            <strong>Responsibilities:</strong> {info.responsibilities}
          </p>
          <p>
            <strong>From:</strong> {info.from}
          </p>
          <p>
            <strong>Until:</strong> {info.to}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default PracticalExperience;
