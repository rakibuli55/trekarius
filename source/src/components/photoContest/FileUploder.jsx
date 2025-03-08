import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import CommonButton from "../common/CommonButton";
import toast from "react-hot-toast";

function FileUploder({ onFileChange, value, onNext }) {
  const [uploadedFiles, setUploadedFiles] = useState(value || []);

  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const onDrop = (acceptedFiles, rejectedFiles) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onFileChange([...uploadedFiles, ...newFiles]);
    if (rejectedFiles.length > 0) {
      toast.error("Please upload a file smaller than 10 MB.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
    },
    maxSize: MAX_FILE_SIZE,
    multiple: true,
  });

  // Remove a specific file
  const removeFile = (fileName) => {
    const updatedFiles = uploadedFiles.filter((file) => file.name !== fileName);
    setUploadedFiles(updatedFiles);
    onFileChange(updatedFiles);
  };

  useEffect(() => {
    setUploadedFiles(value);
  }, [value]);

  return (
    <div>
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className="mt-8 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-10 py-20 custom-xs:px-5 custom-xs:py-6 text-center transition hover:bg-gray-100"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-lg font-medium text-gray-600">
            Drop the files here...
          </p>
        ) : (
          <>
            <p className="text-lg font-medium text-gray-600 custom-xs:text-base">
              Drag & drop photos and videos here
            </p>
            <p className="my-4 text-gray-400 custom-xs:text-sm">— OR —</p>
            <button type="button" className="rounded-lg custom-xs:text-sm custom-xs:px-4 bg-orange-500 px-6 py-2 text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 font-semibold">
              Select Files From Your Device
            </button>
          </>
        )}
      </div>
      {/* preview  */}
      <div className="mt-6 grid grid-cols-2 custom-md:grid-cols-3 gap-4 w-[800px] max-md:w-full mx-auto">
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-[12px] overflow-auto relative"
          >
            {file.type.startsWith("image/") ? (
              <img
                src={file.preview}
                alt={file.name}
                className="h-32 custom-xs:h-[90px] w-full object-cover"
              />
            ) : (
              <video src={file.preview} className="h-32 custom-xs:h-[90px] w-full object-cover" />
            )}
            <p className="p-2 text-sm font-medium text-gray-700">
              {file.name}
            </p>
            {/* Remove Button */}
            <button
              type="button"
              className="absolute top-2 right-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              onClick={() => removeFile(file.name)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className={`text-right mt-10 ${uploadedFiles.length === 0 ? 'pointer-events-none opacity-50' : 'opacity-100 pointer-events-auto'}`} onClick={onNext}>
        <CommonButton text="Next" type="fill" bgColor="#FF7701" />
      </div>
    </div>
  );
}

export default FileUploder;
