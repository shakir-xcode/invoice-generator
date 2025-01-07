"use client";

import React, { useState } from "react";

export default function ImageUploadForm() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 100 * 1024) {
        // 100KB size limit
        setError("File size exceeds 100KB. Please upload a smaller image.");
        setImage(null);
        setPreview(null);
        return;
      }

      setError("");
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please upload an image.");
      return;
    }
    alert(`Image uploaded successfully: ${image.name}`);
    // Add code to send the image to the backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="image-upload" className="block font-bold">
          Upload Image:
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {preview && (
        <div className="mt-4">
          <p>Image Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover border rounded"
          />
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
