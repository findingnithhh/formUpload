"use client";
import { describe } from "node:test";
import React, { useState } from "react";
import Image from "next/image";
const Card = () => {
  const [data, setdata] = useState([
    {
      id: 1,
      name: "John Wick",
      description: "Click the button to watch on Jetflix app",
      img_url: "/john.jpg",
    },
    {
      id: 2,
      name: "Spider Man",
      description: "Click the button to watch on Jetflix app",
      img_url: "/spider.jpg",
    },
  ]);
  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirmed) {
      setdata(data.filter((data) => data.id !== id));
    }
  };
  return (
    <div className="flex justify-center items-center flex-col">
      {data.map((item) => (
        <div
          className="card card-side bg-base-100 shadow-xl w-[700px] mb-10"
          key={item.id}
        >
          <figure>
            <Image
              src={item.img_url}
              width={200}
              height={100}
              alt={item.name}
              className="w-[200px] h-[280px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info">Preview</button>
              <button
                className="btn btn-error"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Card };
