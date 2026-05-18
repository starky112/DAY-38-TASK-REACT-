import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter something"
      />

      <button onClick={handleFocus}>
        Focus
      </button>
    </div>
  );
};

export default FocusInput;