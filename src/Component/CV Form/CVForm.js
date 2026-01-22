import React, { useState } from "react";
import "./CVForm.css";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
    projects: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <h1>Resume Builder</h1>
      <p>Create your professional CV</p>

      <div className="container">
        <section className="form-section">
          <h2>Personal Information</h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={formData.linkedin}
            onChange={handleChange}
          />

          <input
            type="url"
            name="github"
            placeholder="GitHub URL"
            value={formData.github}
            onChange={handleChange}
          />

          <h2>Professional Summary</h2>
          <textarea
            rows="4"
            name="summary"
            placeholder="Brief summary about yourself"
            value={formData.summary}
            onChange={handleChange}
          ></textarea>

          <h2>Skills</h2>
          <textarea
            rows="3"
            name="skills"
            placeholder="React, JavaScript, HTML, CSS"
            value={formData.skills}
            onChange={handleChange}
          ></textarea>

          <h2>Experience</h2>
          <textarea
            rows="4"
            name="experience"
            placeholder="Role, Company, Responsibilities"
            value={formData.experience}
            onChange={handleChange}
          ></textarea>

          <h2>Education</h2>
          <textarea
            rows="3"
            name="education"
            placeholder="Degree, Institute, Year"
            value={formData.education}
            onChange={handleChange}
          ></textarea>

          <h2>Projects</h2>
          <textarea
            rows="4"
            name="projects"
            placeholder="Project name, tech stack, description"
            value={formData.projects}
            onChange={handleChange}
          ></textarea>
        </section>
        <section className="preview-section">
          <h2>{formData.fullName || "Your Name"}</h2>
          <h4>{formData.jobTitle}</h4>

          <p>
            {formData.email}
            {formData.phone && ` | ${formData.phone}`}
          </p>

          <p>{formData.location}</p>

          <p>
            {formData.linkedin && <span>LinkedIn </span>}
            {formData.github && <span>| GitHub</span>}
          </p>

          {formData.summary && (
            <>
              <h3>Summary</h3>
              <p>{formData.summary}</p>
            </>
          )}

          {formData.skills && (
            <>
              <h3>Skills</h3>
              <p>{formData.skills}</p>
            </>
          )}

          {formData.experience && (
            <>
              <h3>Experience</h3>
              <p>{formData.experience}</p>
            </>
          )}

          {formData.education && (
            <>
              <h3>Education</h3>
              <p>{formData.education}</p>
            </>
          )}

          {formData.projects && (
            <>
              <h3>Projects</h3>
              <p>{formData.projects}</p>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
