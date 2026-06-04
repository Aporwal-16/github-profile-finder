import { useEffect, useState } from "react";

function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) return;

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    setLoading(true);
    setUser(null);
    setError("");

    fetch(`https://api.github.com/users/${username}`, {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(
            data.message === "Bad credentials"
              ? "Invalid GitHub token"
              : data.message || "User not found"
          );
        }

        return data;
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(err.message);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  return { user, loading, error };
}

export default useGithubUser;