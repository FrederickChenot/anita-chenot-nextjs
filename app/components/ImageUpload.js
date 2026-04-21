"use client";
import { useState } from "react";

export default function ImageUpload({ currentImg, onUpload }) {
  const [uploading, setUploading] = useState(false);

  async function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await res.json();
    const optimizedUrl = data.secure_url.replace(
      "/upload/",
      "/upload/w_800,h_600,c_fill,q_auto,f_auto/"
    );
    onUpload(optimizedUrl);
    setUploading(false);
  }

  return (
    <div className="flex flex-col gap-3">
      {currentImg && (
        <img src={currentImg} alt="aperçu" className="h-40 w-full object-cover rounded border border-[#E8D5B7]"/>
      )}
      <label className="cursor-pointer inline-flex items-center gap-2 border border-[#E8D5B7] text-[#7A6240] font-[var(--font-lato)] text-xs px-4 py-2 rounded hover:border-[#C4832A] hover:text-[#C4832A] transition-colors w-fit">
        {uploading ? "Upload en cours..." : currentImg ? "Changer la photo" : "Choisir une photo"}
        <input type="file" accept="image/*" onChange={handleFile} className="hidden" disabled={uploading}/>
      </label>
    </div>
  );
}
