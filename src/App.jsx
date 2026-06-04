import { useState } from 'react'
import useGithubUser from './hooks/useGithubUser'
import ProfileCard from "./components/ProfileCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [username, setUsername] = useState("");
  const { user, loading, error } = useGithubUser(username);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">
        GitHub Profile Finder
      </h1>

      <SearchBar onSearch={setUsername} />

      {loading && (
        <p className="mt-6 text-lg font-medium text-blue-600">
          Loading...
        </p>
      )}

      {error && (
        <p className="mt-6 text-lg font-medium text-red-500">
          {error}
        </p>
      )}

      {user && (
        <ProfileCard user={user} />
      )}
    </div>
  );
}

  

export default App;