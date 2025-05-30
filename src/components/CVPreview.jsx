import React, { forwardRef } from 'react';
import '../styles/CVPreview.css';

const CVPreview = forwardRef(({ general, education, practical }, ref) => {
  return (
    <div className="cv-preview" ref={ref}>
      <h1>{general.name}</h1>
      <p>Email: {general.email}</p>
      <p>Phone: {general.phone}</p>

      <h2>Education</h2>
      <p><strong>School:</strong> {education.school}</p>
      <p><strong>Title of Study:</strong> {education.title}</p>
      <p><strong>Date:</strong> {education.date}</p>

      <h2>Practical Experience</h2>
      <p><strong>Company:</strong> {practical.company}</p>
      <p><strong>Position:</strong> {practical.position}</p>
      <p><strong>Responsibilities:</strong> {practical.responsibilities}</p>
      <p><strong>Duration:</strong> {practical.start} – {practical.end}</p>
    </div>
  );
});

export default CVPreview;
