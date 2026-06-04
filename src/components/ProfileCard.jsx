function ProfileCard({ user }) {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 mt-8">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-blue-500"
        />

        <h2 className="text-2xl font-bold mt-4">
          {user.name || "No Name"}
        </h2>

        <p className="text-gray-500">@{user.login}</p>

        {user.bio && (
          <p className="text-center text-gray-600 mt-3">
            {user.bio}
          </p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 text-center mt-6">
        <div>
          <h3 className="text-xl font-bold">
            {user.public_repos}
          </h3>
          <p className="text-gray-500">Repos</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            {user.followers}
          </h3>
          <p className="text-gray-500">Followers</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            {user.following}
          </h3>
          <p className="text-gray-500">Following</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {user.location && (
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {user.location}
          </p>
        )}

        {user.company && (
          <p>
            <span className="font-semibold">Company:</span>{" "}
            {user.company}
          </p>
        )}
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="block text-center bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 transition"
      >
        View Profile
      </a>
    </div>
  );
}

export default ProfileCard;