# Albums Manager React App

## Description
This is a React application for managing albums. It allows users to fetch albums from an external API, add new albums, update existing ones, and delete albums. The application makes use of the JSONPlaceholder API for fetching and managing album data.

## Features
- Fetch and display albums from the JSONPlaceholder API.
- Add new albums by making a POST request to the API.
- Update existing albums by making a PUT request to the API.
- Delete albums by making a DELETE request to the API.

## Installation
To run this project locally, follow these steps:

1. Clone the repository to your local machine using the following command:
   ```
   git clone https://github.com/coding-destini/Skill_Test_CN.git
   ```

2. Navigate to the project directory:
   ```
   cd albums-manager-react-app
   ```

3. Install dependencies using npm:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- JSONPlaceholder API
- react-hot-toast for notifications
- animate.css for animation

## Folder Structure
```
albums-manager-react-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── AddAlbumForm.js
│   │   ├── AlbumItem.js
│   │   ├── AlbumList.js
│   │   ├── EditAlbumForm.js
│   │   └── ...
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
