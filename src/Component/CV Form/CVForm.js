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
        {/* FORM */}
        <section className="form-section">
          <h2>Personal Information</h2>

          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <input
            name="linkedin"
            placeholder="LinkedIn URL"
            value={formData.linkedin}
            onChange={handleChange}
          />
          <input
            name="github"
            placeholder="GitHub URL"
            value={formData.github}
            onChange={handleChange}
          />

          <h2>Professional Summary</h2>
          <textarea
            rows="4"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          ></textarea>

          <h2>Skills</h2>
          <textarea
            rows="3"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          ></textarea>

          <h2>Experience</h2>
          <textarea
            rows="4"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          ></textarea>

          <h2>Education</h2>
          <textarea
            rows="3"
            name="education"
            value={formData.education}
            onChange={handleChange}
          ></textarea>

          <h2>Projects</h2>
          <textarea
            rows="4"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
          ></textarea>
        </section>

        {/* PREVIEW */}
        <section className="preview-section cv-preview">

          <button
            className="print-btn preview-print-btn"
            onClick={() => window.print()}
          >
            Download / Print PDF
          </button>

          <div className="cv-header">
            <h1>{formData.fullName || "Your Name"}</h1>
            <h2>{formData.jobTitle || "Frontend / React Developer"}</h2>
          </div>

          <div className="cv-body">
            <aside className="cv-left">
              <h3>CONTACT</h3>
              <p>{formData.phone}</p>
              <p>{formData.email}</p>
              <p>{formData.location}</p>

              {formData.linkedin && <p>LinkedIn</p>}
              {formData.github && <p>GitHub</p>}

              {formData.skills && (
                <>
                  <h3>SKILLS</h3>
                  <p>{formData.skills}</p>
                </>
              )}
            </aside>

            {/* RIGHT COLUMN */}
            <main className="cv-right">
              {formData.summary && (
                <>
                  <h3>PROFESSIONAL SUMMARY</h3>
                  <p>{formData.summary}</p>
                </>
              )}

              {formData.experience && (
                <>
                  <h3>EXPERIENCE</h3>
                  <p>{formData.experience}</p>
                </>
              )}

              {formData.education && (
                <>
                  <h3>EDUCATION</h3>
                  <p>{formData.education}</p>
                </>
              )}

              {formData.projects && (
                <>
                  <h3>PROJECTS</h3>
                  <p>{formData.projects}</p>
                </>
              )}
            </main>
          </div>
        </section>
      </div>
    </div>
  );
}
