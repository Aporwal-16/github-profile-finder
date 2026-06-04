# GitHub Profile Finder

A simple and responsive React application that allows users to search for any GitHub profile and view public information such as avatar, bio, repositories, followers, following count, location, and company.

## 🚀 Features

* Search GitHub users by username
* Display profile avatar and basic information
* View public repository count
* View followers and following statistics
* Display location and company details (if available)
* Direct link to the GitHub profile
* Loading and error handling states
* Responsive UI built with Tailwind CSS

## 🛠️ Technologies Used

* React
* Vite
* Tailwind CSS
* GitHub REST API
* Custom React Hooks

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── ProfileCard.jsx
│   └── SearchBar.jsx
│
├── hooks/
│   └── useGithubUser.js
│
├── App.jsx
└── main.jsx
```

## 📸 Preview

Search for a GitHub username and instantly view profile information.

Example:

```text
Username: octocat
```

Displays:

* Avatar
* Name
* Username
* Bio
* Repositories
* Followers
* Following
* Location
* Company
* Profile Link

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Aporwal-16/github-profile-finder.git
```

### Navigate to the project folder

```bash
cd github-profile-finder
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

## 🔑 GitHub API Token (Optional)

To avoid API rate limits, create a GitHub Personal Access Token and add it to a `.env` file:

```env
VITE_GITHUB_TOKEN=your_github_token
```

The application automatically uses the token when available.

## 📖 How It Works

1. User enters a GitHub username.
2. The custom hook (`useGithubUser`) fetches user data from the GitHub API.
3. Loading and error states are managed automatically.
4. User information is displayed inside the Profile Card component.

## 🌐 GitHub API Endpoint

```http
https://api.github.com/users/{username}
```

## 🎯 Future Improvements

* Dark mode support
* Search history
* Display user repositories
* Display pinned repositories
* Show contribution statistics
* Debounced search input
* Pagination for repositories

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ using React and Tailwind CSS.