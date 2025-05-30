import React, { useState } from "react";
import "../styles/EducationExperience.css";

function EducationExperience() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    school: "",
    title: "",
    date: "",
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
      <h2>Education Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="school"
            value={info.school}
            onChange={handleChange}
            placeholder="School Name"
            required
          />
          <input
            name="title"
            value={info.title}
            onChange={handleChange}
            placeholder="Title of Study"
            required
          />
          <input
            name="date"
            value={info.date}
            onChange={handleChange}
            placeholder="Date of Study"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>School:</strong> {info.school}
          </p>
          <p>
            <strong>Title:</strong> {info.title}
          </p>
          <p>
            <strong>Date:</strong> {info.date}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EducationExperience;
