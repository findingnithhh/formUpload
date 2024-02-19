"use client";
import { describe } from "node:test";
import React, { useState } from "react";
import Image from "next/image";
const Card = ({ user ,setdata}) => {
  const handleDelete = (id: number) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirmed) {
      setdata(user.filter((user) => user.id !== id));
    }
  };
  return (
    <div className="flex justify-center items-center flex-col">
      {user.map((item) => (
        <div
          className="card card-side bg-base-100 shadow-xl w-[700px] mb-10"
          key={item.id}
        >
          <figure>
            <Image
              src={item.image}
              width={200}
              height={100}
              alt={item.username}
              className="w-[200px] h-[280px] object-cover"
              priority={true}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.username}</h2>
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
