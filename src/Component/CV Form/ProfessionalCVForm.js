import { useState, useEffect } from "react";
import "./ProfessionalCVForm.css";

export default function ProfessionalCVForm() {
  const [cv, setCV] = useState({
    header: {
      fullName: "",
      title: "",
      phone: "",
      email: "",
      location: "",
      linkedin: "",
      github: "",
    },
    summary: "",
    skills: "",
    experience: [{ jobTitle: "", company: "", duration: "", bullets: [""] }],
    projects: [{ name: "", tech: "", bullets: [""] }],
    education: [{ degree: "", institution: "", year: "" }],
  });

  useEffect(() => {
    const savedCV = localStorage.getItem("professional_cv_data");
    if (savedCV) setCV(JSON.parse(savedCV));
  }, []);

  const updateHeader = (e) =>
    setCV({
      ...cv,
      header: { ...cv.header, [e.target.name]: e.target.value },
    });

  const updateField = (key, value) =>
    setCV({ ...cv, [key]: value });

  const updateArray = (section, index, key, value) => {
    const updated = [...cv[section]];
    updated[index][key] = value;
    setCV({ ...cv, [section]: updated });
  };

  const updateBullet = (section, i, bi, value) => {
    const updated = [...cv[section]];
    updated[i].bullets[bi] = value;
    setCV({ ...cv, [section]: updated });
  };

  const addItem = (section, item) =>
    setCV({ ...cv, [section]: [...cv[section], item] });

  const addBullet = (section, i) => {
    const updated = [...cv[section]];
    updated[i].bullets.push("");
    setCV({ ...cv, [section]: updated });
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("professional_cv_data", JSON.stringify(cv));
    alert("CV saved successfully!");
  };

  const resetForm = () => {
    if (
      !window.confirm(
        "This will clear the entire form and preview. Are you sure?"
      )
    )
      return;

    localStorage.removeItem("professional_cv_data");

    setCV({
      header: {
        fullName: "",
        title: "",
        phone: "",
        email: "",
        location: "",
        linkedin: "",
        github: "",
      },
      summary: "",
      skills: "",
      experience: [{ jobTitle: "", company: "", duration: "", bullets: [""] }],
      projects: [{ name: "", tech: "", bullets: [""] }],
      education: [{ degree: "", institution: "", year: "" }],
    });
  };

  return (
    <div className="cv-layout">
      <div className="cv-form-wrapper">
        <h1>Professional CV Form</h1>

        <Section title="Name & Contact">
          {Object.keys(cv.header).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key.replace(/([A-Z])/g, " $1")}
              value={cv.header[key]}
              onChange={updateHeader}
            />
          ))}
        </Section>

        <Section title="Professional Summary">
          <textarea
            value={cv.summary}
            onChange={(e) => updateField("summary", e.target.value)}
          />
        </Section>

        <Section title="Core Skills">
          <textarea
            value={cv.skills}
            onChange={(e) => updateField("skills", e.target.value)}
          />
        </Section>

        <Section title="Professional Experience">
          {cv.experience.map((exp, i) => (
            <Block key={i}>
              <input
                placeholder="Job Title"
                value={exp.jobTitle}
                onChange={(e) =>
                  updateArray("experience", i, "jobTitle", e.target.value)
                }
              />
              <input
                placeholder="Company"
                value={exp.company}
                onChange={(e) =>
                  updateArray("experience", i, "company", e.target.value)
                }
              />
              <input
                placeholder="Duration"
                value={exp.duration}
                onChange={(e) =>
                  updateArray("experience", i, "duration", e.target.value)
                }
              />

              <strong>Impact Bullets</strong>
              {exp.bullets.map((b, bi) => (
                <input
                  key={bi}
                  value={b}
                  onChange={(e) =>
                    updateBullet("experience", i, bi, e.target.value)
                  }
                />
              ))}
              <button onClick={() => addBullet("experience", i)}>
                + Add Bullet
              </button>
            </Block>
          ))}

          <button
            className="add-btn"
            onClick={() =>
              addItem("experience", {
                jobTitle: "",
                company: "",
                duration: "",
                bullets: [""],
              })
            }
          >
            + Add Experience
          </button>
        </Section>

        <Section title="Projects">
          {cv.projects.map((p, i) => (
            <Block key={i}>
              <input
                placeholder="Project Name"
                value={p.name}
                onChange={(e) =>
                  updateArray("projects", i, "name", e.target.value)
                }
              />
              <input
                placeholder="Tech Stack"
                value={p.tech}
                onChange={(e) =>
                  updateArray("projects", i, "tech", e.target.value)
                }
              />

              {p.bullets.map((b, bi) => (
                <input
                  key={bi}
                  value={b}
                  onChange={(e) =>
                    updateBullet("projects", i, bi, e.target.value)
                  }
                />
              ))}
              <button onClick={() => addBullet("projects", i)}>
                + Add Bullet
              </button>
            </Block>
          ))}

          <button
            className="add-btn"
            onClick={() =>
              addItem("projects", {
                name: "",
                tech: "",
                bullets: [""],
              })
            }
          >
            + Add Project
          </button>
        </Section>

        <Section title="Education">
          {cv.education.map((e, i) => (
            <Block key={i}>
              <input
                placeholder="Degree"
                value={e.degree}
                onChange={(ev) =>
                  updateArray("education", i, "degree", ev.target.value)
                }
              />
              <input
                placeholder="Institution"
                value={e.institution}
                onChange={(ev) =>
                  updateArray("education", i, "institution", ev.target.value)
                }
              />
              <input
                placeholder="Year"
                value={e.year}
                onChange={(ev) =>
                  updateArray("education", i, "year", ev.target.value)
                }
              />
            </Block>
          ))}
          <button
            className="add-btn"
            onClick={() =>
              addItem("education", {
                degree: "",
                institution: "",
                year: "",
              })
            }
          >
            + Add Degree
          </button>
        </Section>

        <div className="form-actions">
          <button className="save-btn" onClick={saveToLocalStorage}>
            Save Draft
          </button>
          <button className="reset-btn" onClick={resetForm}>
            Clear / Reset
          </button>
        </div>
      </div>

      <div className="cv-preview a4">
        <button className="print-btn" onClick={() => window.print()}>
          Download PDF
        </button>

        <div className="cv-header">
          <h1>{cv.header.fullName || "Nehal"}</h1>
          <p className="cv-subtitle">{cv.header.title}</p>
          <p className="cv-contact">
            {cv.header.email} | {cv.header.phone} | {cv.header.location}
          </p>

          {(cv.header.linkedin || cv.header.github) && (
            <p className="cv-links">
              {cv.header.linkedin && <>LinkedIn: {cv.header.linkedin}</>}
              {cv.header.github && <> | GitHub: {cv.header.github}</>}
            </p>
          )}
        </div>

        {cv.summary && (
          <PreviewCard title="PROFESSIONAL SUMMARY">
            <p className="cv-summary">{cv.summary}</p>
          </PreviewCard>
        )}

        <PreviewCard title="SKILLS">
          <ul>
            {cv.skills
              .split(",")
              .filter(Boolean)
              .map((s, i) => (
                <li key={i}>{s.trim()}</li>
              ))}
          </ul>
        </PreviewCard>

        <PreviewCard title="EXPERIENCE">
          {cv.experience.map((e, i) => (
            <div key={i} className="cv-item">
              <strong>
                {e.jobTitle} — {e.company}
              </strong>
              <div className="cv-muted">{e.duration}</div>
              <ul>
                {e.bullets.filter(Boolean).map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </PreviewCard>

        <PreviewCard title="PROJECTS">
          {cv.projects.map((p, i) => (
            <div key={i} className="cv-item">
              <strong>{p.name}</strong>
              <div className="cv-muted">{p.tech}</div>
              <ul>
                {p.bullets.filter(Boolean).map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </PreviewCard>

        <PreviewCard title="EDUCATION">
          {cv.education.map((e, i) => (
            <div key={i} className="cv-item">
              <strong>{e.degree}</strong>
              <div className="cv-muted">
                {e.institution} ({e.year})
              </div>
            </div>
          ))}
        </PreviewCard>
      </div>
    </div>
  );
}

const Section = ({ title, children }) => (
  <section className="cv-section">
    <h2>{title}</h2>
    {children}
  </section>
);

const Block = ({ children }) => (
  <div className="cv-block">{children}</div>
);

const PreviewCard = ({ title, children }) => (
  <div className="preview-card">
    <div className="preview-card-header">
      <span>{title}</span>
      <div className="preview-line" />
    </div>
    {children}
  </div>
);
