import React, { useState } from "react";
import "./BiodataBuilder.css";

const MarriageBiodata = () => {
  const [language, setLanguage] = useState("en");
  const [photo, setPhoto] = useState(null);

  const [data, setData] = useState({
    name: "",
    profession: "",
    dob: "",
    height: "",
    complexion: "",
    caste: "",
    gotra: "",
    hobby: "",
    education: "",
    grandfather: "",
    father: "",
    mother: "",
    brother: "",
    uncle: "",
    residence: "",
    village: "",
    contact: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const labels = {
    en: {
      title: "BIO-DATA",
      name: "Name",
      profession: "Profession",
      dob: "Date of Birth",
      height: "Height",
      complexion: "Complexion",
      caste: "Caste",
      gotra: "Gotra",
      hobby: "Hobby",
      education: "Educational Qualification",
      family: "Family Details",
      grandfather: "Grand Father",
      father: "Father",
      mother: "Mother",
      brother: "Brother(s)",
      uncle: "Uncle(s)",
      residence: "Residence",
      village: "Village",
      contact: "Contact No",
    },
    hi: {
      title: "परिचय पत्र",
      name: "नाम",
      profession: "व्यवसाय",
      dob: "जन्म तिथि",
      height: "ऊँचाई",
      complexion: "वर्ण",
      caste: "जाति",
      gotra: "गोत्र",
      hobby: "शौक",
      education: "शैक्षणिक योग्यता",
      family: "परिवार विवरण",
      grandfather: "दादा जी",
      father: "पिता जी",
      mother: "माता जी",
      brother: "भाई(यों)",
      uncle: "चाचा(यों)",
      residence: "निवास",
      village: "गाँव",
      contact: "संपर्क नंबर",
    },
  };

  return (
    <div className="biodata-app">
      {/* FORM */}
      <div className="biodata-form">
        <div className="switch-btn-container">
          <button
            className="switch-btn"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
          >
            Switch to {language === "en" ? "Hindi" : "English"}
          </button>
        </div>

        <h2>Marriage Biodata Form</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="profession" placeholder="Profession" onChange={handleChange} />
        <input name="dob" placeholder="Date of Birth" onChange={handleChange} />
        <input name="height" placeholder="Height" onChange={handleChange} />
        <input name="complexion" placeholder="Complexion" onChange={handleChange} />
        <input name="caste" placeholder="Caste" onChange={handleChange} />
        <input name="gotra" placeholder="Gotra" onChange={handleChange} />
        <input name="hobby" placeholder="Hobby" onChange={handleChange} />

        <textarea name="education" placeholder="Education" onChange={handleChange} />

        <h3>Family Details</h3>
        <input name="grandfather" placeholder="Grand Father" onChange={handleChange} />
        <input name="father" placeholder="Father" onChange={handleChange} />
        <input name="mother" placeholder="Mother" onChange={handleChange} />
        <textarea name="brother" placeholder="Brother(s)" onChange={handleChange} />
        <textarea name="uncle" placeholder="Uncle(s)" onChange={handleChange} />

        <textarea name="residence" placeholder="Residence" onChange={handleChange} />
        <input name="village" placeholder="Village" onChange={handleChange} />
        <input name="contact" placeholder="Contact Number" onChange={handleChange} />

        <input type="file" accept="image/*" onChange={handlePhotoUpload} />

        <button
          className="print-btn"
          onClick={() => window.print()}
        >
          Download / Print PDF
        </button>
      </div>

      {/* PREVIEW */}
      <div className="biodata-preview">
        <div className="preview-header">
          <h2 className="swasthik">卐</h2>
          <h1>॥ श्री गणेशाय नमः ॥</h1>
          <h2 className="swasthik">卐</h2>
        </div>

        <h2>{labels[language].title}</h2>

        {photo && <img src={photo} alt="profile" className="photo" />}

        <p><b>{labels[language].name}:</b> {data.name}</p>
        <p><b>{labels[language].profession}:</b> {data.profession}</p>
        <p><b>{labels[language].dob}:</b> {data.dob}</p>
        <p><b>{labels[language].height}:</b> {data.height}</p>
        <p><b>{labels[language].complexion}:</b> {data.complexion}</p>
        <p><b>{labels[language].caste}:</b> {data.caste}</p>
        <p><b>{labels[language].gotra}:</b> {data.gotra}</p>
        <p><b>{labels[language].hobby}:</b> {data.hobby}</p>

        <h3>{labels[language].education}</h3>
        <p>{data.education}</p>

        <h3>{labels[language].family}</h3>
        <p>{labels[language].grandfather}: {data.grandfather}</p>
        <p>{labels[language].father}: {data.father}</p>
        <p>{labels[language].mother}: {data.mother}</p>
        <p>{labels[language].brother}: {data.brother}</p>
        <p>{labels[language].uncle}: {data.uncle}</p>

        <p><b>{labels[language].residence}:</b> {data.residence}</p>
        <p><b>{labels[language].village}:</b> {data.village}</p>
        <p><b>{labels[language].contact}:</b> {data.contact}</p>
      </div>
    </div>
  );
};

export default MarriageBiodata;
