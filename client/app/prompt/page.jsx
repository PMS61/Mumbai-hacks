"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import Response from "./response";

const PromptInputBar = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSend = async () => {
    if (message.trim()) {
      setLoading(true); // Set loading to true when request starts

      try {
        const res = await fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });

        const data = await res.json();
        setResponse(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when request completes
      }

      setMessage("");
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
      <div className="fixed top-0 left-0 right-0 p-8 flex items-center space-x-4">
        <textarea
          className="flex-grow bg-gray-900 h-20 resize-none p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          rows="1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
        />
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
      {loading ? (
        <div className="mt-4 text-center text-white">Loading...</div>
      ) : (
        response && <Response response={response} />
      )}
    </div>
  );
};

export default PromptInputBar;
