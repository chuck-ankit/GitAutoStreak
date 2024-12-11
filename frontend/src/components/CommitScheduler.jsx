import React, { useState } from "react";
import axios from "axios";

const CommitScheduler = () => {
  const [repo, setRepo] = useState("");
  const [minCommits, setMinCommits] = useState(5);
  const [maxCommits, setMaxCommits] = useState(15);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate repository format
    const isValidRepo = /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/.test(repo);
    if (!isValidRepo) {
      setMessage("Please enter a valid repository name in the format username/repo");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/schedule", {
        repo,
        minCommits,
        maxCommits,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">GitHub Commit Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Repository (username/repo):</label>
          <input
            type="text"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="flex gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Min Commits:</label>
            <input
              type="number"
              value={minCommits}
              onChange={(e) => setMinCommits(Number(e.target.value))}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Max Commits:</label>
            <input
              type="number"
              value={maxCommits}
              onChange={(e) => setMaxCommits(Number(e.target.value))}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Scheduling..." : "Schedule Commits"}
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default CommitScheduler;
