import React from "react";
import { useNavigate } from "react-router-dom";


const Body = () => {
  const navigate = useNavigate();
  return (
    <main className="home-body">
      <div className="button-container">
        <button className="primary-btn" 
          onClick={() => navigate("/cv")}>
          Make Professional CV for Job
        </button>

        <button className="secondary-btn" onClick={() => navigate("/biodata")}>
          Make Marriage Biodata
        </button>
      </div>
    </main>
  );
};

export default Body;
