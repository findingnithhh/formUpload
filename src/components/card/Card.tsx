import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="card card-side bg-base-100 shadow-xl w-[700px] mb-10">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Preview</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
