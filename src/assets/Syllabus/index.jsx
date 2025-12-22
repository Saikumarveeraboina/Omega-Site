import { useState } from "react";
import "./index.css";

const Syllabus = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  // 6 theory (4 credits each) + 3 practicals (1.5 credits each)
  const credits = [4, 4, 4, 4, 4, 4, 1.5, 1.5, 1.5];

  const gradePoints = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    F: 0,
  };

  const [grades, setGrades] = useState(Array(9).fill(""));
  const [sgpa, setSgpa] = useState(null);

  const handleChange = (index, value) => {
    const updated = [...grades];
    updated[index] = value.toUpperCase();
    setGrades(updated);
  };

  const calculateSGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
      const grade = grades[i];

      if (!gradePoints.hasOwnProperty(grade)) {
        alert("Enter valid grades: S, A, B, C, D, E, F");
        return;
      }

      totalPoints += gradePoints[grade] * credits[i];
      totalCredits += credits[i];
    }

    setSgpa((totalPoints / totalCredits).toFixed(2));
  };

  const resetCalculator = () => {
    setGrades(Array(9).fill(""));
    setSgpa(null);
  };

  return (
    <>
      <div className="products-container">
        <h1 className="products-title">Semester Syllabus</h1>
        <p className="products-subtitle">We update soon</p>

        <button
          className="grade-btn"
          onClick={() => setShowCalculator(true)}
        >
          View Grade Calculator
        </button>
      </div>

      {showCalculator && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-btn"
              onClick={() => setShowCalculator(false)}
            >
              ✕
            </button>

            <h2>Grade Calculator</h2>

            {grades.map((grade, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                placeholder={
                  index < 6
                    ? `Theory ${index + 1} Grade`
                    : `Practical ${index - 5} Grade`
                }
                value={grade}
                onChange={(e) =>
                  handleChange(index, e.target.value)
                }
              />
            ))}

            <button className="calc-btn" onClick={calculateSGPA}>
              Calculate SGPA
            </button>

            <button className="reset-btn" onClick={resetCalculator}>
              Reset
            </button>

            {sgpa && (
              <p className="result">
                SGPA: <strong>{sgpa}</strong>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Syllabus;
