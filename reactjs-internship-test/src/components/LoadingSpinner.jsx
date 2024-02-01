import React from "react";

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center my-5 py-5">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
