import React, { useState } from "react";

const CommentInput = ({ placeholder = "Add a comment...", onSend }) => {
  const [comment, setComment] = useState("");

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSendClick = () => {
    if (comment.trim()) {
      onSend && onSend(comment.trim());
      setComment(""); // Clear the input field after sending
    }
  };

  return (
    <>
    <style>
        {
            `
            /* Container styles */
.comment-input-container {
  display: flex;
  align-items: center;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}

/* Input field styles */
.comment-input {
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #4a4a4a;
}

.comment-input::placeholder {
  color: #c6c6c6;
}

/* Send button styles */
.send-button {
  background: none;
  border: none;
  color: #4a4a4a;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.send-button:hover {
  color: #007bff;
}

.send-button.disabled {
  color: #c6c6c6;
  cursor: not-allowed;
}
`
        }
    </style>
    <div className="comment-input-container">
      <input
        type="text"
        className="comment-input"
        placeholder={placeholder}
        value={comment}
        onChange={handleInputChange}
      />
      <button
        className={`send-button ${!comment.trim() ? "disabled" : ""}`}
        onClick={handleSendClick}
        disabled={!comment.trim()} // Disable button when input is empty
      >
        ▶
      </button>
    </div>
    </>
  );
};

export default CommentInput;
