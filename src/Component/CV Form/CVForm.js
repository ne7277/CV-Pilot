import React, { useState } from "react";
import "./CVForm.css";

export default function CVForm() {
  const [template, setTemplate] = useState("classic");

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app">
      <h1>Resume Builder</h1>
      <p>Create your professional CV</p>

      <div className="container">
        {/* ================= FORM ================= */}
        <section className="form-section">
          <h2>Personal Information</h2>

          <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          <input name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
          <input name="linkedin" placeholder="LinkedIn URL" value={formData.linkedin} onChange={handleChange} />
          <input name="github" placeholder="GitHub URL" value={formData.github} onChange={handleChange} />

          <h2>Professional Summary</h2>
          <textarea rows="4" name="summary" value={formData.summary} onChange={handleChange} />

          <h2>Skills</h2>
          <textarea rows="3" name="skills" value={formData.skills} onChange={handleChange} />

          <h2>Experience</h2>
          <textarea rows="4" name="experience" value={formData.experience} onChange={handleChange} />

          <h2>Education</h2>
          <textarea rows="3" name="education" value={formData.education} onChange={handleChange} />

          <h2>Projects</h2>
          <textarea rows="4" name="projects" value={formData.projects} onChange={handleChange} />
        </section>

        <section className={`preview-section cv-preview ${template}`}>
          
          <div className="template-switcher">
            <button onClick={() => setTemplate("classic")}>Classic</button>
            <button onClick={() => setTemplate("modern")}>Modern</button>
            <button onClick={() => setTemplate("minimal")}>Minimal</button>
          </div>

          <button className="print-btn preview-print-btn" onClick={() => window.print()}>
            Download / Print PDF
          </button>

          {template === "classic" && (
            <>
              <div className="cv-header">
                <h1>{formData.fullName || "Your Name"}</h1>
                <h2>{formData.jobTitle || "Frontend Developer"}</h2>
              </div>

              <div className="cv-body">
                <aside className="cv-left">
                  <h3>CONTACT</h3>
                  <p>{formData.phone}</p>
                  <p>{formData.email}</p>
                  <p>{formData.location}</p>

                  <h3>SKILLS</h3>
                  <p>{formData.skills}</p>
                </aside>

                <main className="cv-right">
                  <h3>SUMMARY</h3>
                  <p>{formData.summary}</p>

                  <h3>EXPERIENCE</h3>
                  <p>{formData.experience}</p>

                  <h3>EDUCATION</h3>
                  <p>{formData.education}</p>

                  <h3>PROJECTS</h3>
                  <p>{formData.projects}</p>
                </main>
              </div>
            </>
          )}

          {template === "modern" && (
            <div className="modern-layout">
              <aside className="modern-left">
                <h1>{formData.fullName || "Your Name"}</h1>
                <p className="title">{formData.jobTitle}</p>

                <p><b>Email:</b>{formData.email}</p>
                <p><b>Phone:</b>{formData.phone}</p>
                <p><b>Location:</b>{formData.location}</p>

                <h4>Skills</h4>
                <p>{formData.skills}</p>
              </aside>

              <main className="modern-right">
                <h3>Summary</h3>
                <p>{formData.summary}</p>

                <h3>Experience</h3>
                <p>{formData.experience}</p>

                <h3>Education</h3>
                <p>{formData.education}</p>

                <h3>Projects</h3>
                <p>{formData.projects}</p>
              </main>
            </div>
          )}

          {template === "minimal" && (
            <div className="minimal-layout">
              <h1>{formData.fullName || "Your Name"}</h1>
              <h2>{formData.jobTitle}</h2>

              <p className="contact">
                {formData.email} | {formData.phone} | {formData.location}
              </p>

              <hr />

              <p><b>Summary:</b> {formData.summary}</p>
              <p><b>Skills:</b> {formData.skills}</p>
              <p><b>Experience:</b> {formData.experience}</p>
              <p><b>Education:</b> {formData.education}</p>
              <p><b>Projects:</b> {formData.projects}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
