"use client";
import React from "react";
import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
interface FormData {
  id: string;
  username: string;
  image: string;
}
const AddForm = ({ setDataUser }) => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    username: "",
    image: "",
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0] || null;
    if (selectedImage) {
      const ImageUser = URL.createObjectURL(selectedImage);
      setFormData({
        ...formData,
        image: ImageUser,
      });
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDataUser((prevData) => [...prevData, formData]);
    setFormData({
      id: "",
      username: "",
      image: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="py-3 px-4 block w-[500px] border-gray-200 rounded-lg text-sm outline-none my-5 bg-gray-700 text-white"
          id="name"
          type="text"
          placeholder="ID"
          name="id"
          onChange={handleInputChange}
        ></input>
        {/* input text */}
        <input
          className="py-3 px-4 block w-[500px] border-gray-200 rounded-lg text-sm outline-none my-5 bg-gray-700 text-white"
          id="name"
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        ></input>
        {/* file */}
        <div className="flex items-center justify-center w-[500px]">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>
        {/* button */}
        <button type="submit" className="btn btn-neutral my-5 w-52">
          Submit
        </button>
      </form>
    </>
  );
};

export { AddForm };
