import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary = (fileBuffer, fileName) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: "raw", // 🔥 important for PDFs
        folder: "resumes",
        public_id: fileName,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    ).end(fileBuffer);
  });
};

export const extractPublicId = (url) => {
  try {
    const parts = url.split("/");
    
    // get last part (filename with extension)
    const fileName = parts[parts.length - 1];

    // remove extension
    const publicId = fileName.split(".")[0];

    return publicId;
  } catch (err) {
    console.error("Error extracting public_id:", err);
    return null;
  }
};

export const deleteFromCloudinary = async (fileUrl) => {
  // getting the public id from the file url
  const publicId = extractPublicId(fileUrl);

  if (!publicId) {
    throw new Error("Invalid public_id");
  }

  const result = await cloudinary.uploader.destroy(publicId);

  console.log("Cloudinary delete result:", result);

  return result;
};
