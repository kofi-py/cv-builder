import React, { useRef } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
import CVPreview from "./components/CVPreview";
import { useReactToPrint } from "react-to-print";

function App() {
  const [generalInfo, setGeneralInfo] = React.useState({});
  const [educationInfo, setEducationInfo] = React.useState({});
  const [practicalInfo, setPracticalInfo] = React.useState({});
  const previewRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
    documentTitle: "CV",
  });

  return (
    <div>
      <h1>CV Builder</h1>
      <GeneralInfo onSubmit={setGeneralInfo} />
      <EducationExperience onSubmit={setEducationInfo} />
      <PracticalExperience onSubmit={setPracticalInfo} />

      <h2>CV Preview</h2>
      <CVPreview
        ref={previewRef}
        general={generalInfo}
        education={educationInfo}
        practical={practicalInfo}
      />

      <button
        onClick={handlePrint}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          background: "#58c4dd",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Export as PDF
      </button>
    </div>
  );
}

export default App;
