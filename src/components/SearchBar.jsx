import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    onSearch(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg flex gap-3"
    >
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;