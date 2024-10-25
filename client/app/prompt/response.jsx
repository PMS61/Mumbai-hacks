import React from "react";

const Response = ({ response }) => {
  return (
    <div className="mt-4 p-4 border rounded-md bg-gray-800 text-white">
      <h3 className="text-lg font-semibold mb-2">Response:</h3>
      <p>{response}</p>
    </div>
  );
};

export default Response;
