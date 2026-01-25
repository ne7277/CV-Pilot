import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  return (
    <main className="home-body">
      <div className="hero-card">
        <h2>Build documents that actually work</h2>
        <p>
          Choose what you want to create and get a clean, printable,
          professional layout instantly.
        </p>

        <div className="button-container">
          <button
            className="primary-btn"
            onClick={() => navigate("/cv")}
          >
            Create Professional CV
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/biodata")}
          >
            Create Marriage Biodata
          </button>
        </div>
      </div>
    </main>
  );
};

export default Body;
