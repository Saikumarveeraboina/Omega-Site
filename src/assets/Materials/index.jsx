import "./index.css";

const materialsData = {
  "Semester 1": [
    {
      title: "All units (1-5)",
      type: "Notes",
      url: "https://drive.google.com/drive/folders/1-D89Flt6eCL4zvY6832G5Vi3NVzIgcBI",
    },
  ],
  "Semester 2": [
    {
      title: "All Units (1-5)",
      type: "Notes",
      url: "https://drive.google.com/drive/folders/1NXpcN8eMeii6pGIY4xZu4mb4yoTwyQMM",
    },
  ],
  "Semester 3": [
    {
      title: "Remaining Subjects will be updated soon - Stay tuned",
      type: "",
      url: "https://drive.google.com/drive/folders/1ppCLFIS3hyWEjqqc-alxxWIJaVWKCauC?usp=sharinghttps://drive.google.com/drive/folders/1ppCLFIS3hyWEjqqc-alxxWIJaVWKCauC?usp=sharing",
    },
  ],
  "Semester 4": [
    {
      title: "We will Update soon",
      type: "",
      url: "https://ik.imagekit.io/gagrbw4f8/update.png",
    },
  ],
};

const Materials = () => {
  return (
    <div className="materials-container">
      <h1 style={{fontFamily: "roboto", fontSize:"22px"}}>Study Materials</h1>

      {Object.entries(materialsData).map(
        ([semester, materials]) => (
          <div key={semester} className="semester">
            <h2 style={{fontFamily: "roboto", fontSize:"18px"}}>{semester}</h2>

            {materials.map((item, index) => (
              <div key={index} className="material-card">
                <p style={{fontFamily: "roboto", fontSize:"18px"}}>
                  {item.title} – {item.type}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-btn"
                >
                  Open
                </a>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Materials;
