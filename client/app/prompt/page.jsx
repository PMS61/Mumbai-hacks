"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import Response from "./response";
import Link from "next/link";

const PromptInputBar = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState(""); // Store submitted prompt
  const [loading, setLoading] = useState(false); // Loading state

  const handleSend = async () => {
    if (message.trim()) {
      setLoading(true); // Start loading state
      setSubmittedMessage(message); // Set submitted message when sending

      try {
        const res = await fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });

        const data = await res.json();
        setResponse(data.message); // Set response after fetching
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading state
      }

      setMessage(""); // Clear input field
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <div className="w-full p-8 flex items-center justify-center space-x-4">
        <div className="pt-1 px-1 w-full rounded-md"  style={{"background": "linear-gradient(45deg, #4DDBD2, #B31FD8)"}}>
          <textarea
            className="flex-grow bg-gray-900 w-full h-16 p-4 rounded-md focus:outline-none focus:ring-2 text-white"
            rows="1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
          />
        </div>
        <button
          className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          onClick={handleSend}
          aria-label="Send Message"
          disabled={loading} // Disable button while loading
        >
          <Send size={20} />
        </button>
      </div>

      {/* Loader: Display while loading */}
      {loading && <div className="mt-4 text-center text-white">Loading...</div>}

      {/* Display submitted prompt and response together after response is generated */}
      {!loading && submittedMessage && response && (
        <div className="mt-4 p-4 bg-gray-800 rounded-md text-white text-center">
          <div><strong>Prompt:</strong> {submittedMessage}</div>
          <Response response={response} />
          <Link href='/map'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Heatmap</button></Link>
        </div>
      )}
    </div>
  );
};

export default PromptInputBar;
