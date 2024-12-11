# GitAutoStreak

## Description
**GitAutoStreak** is a web application designed to help developers maintain their GitHub streaks effortlessly. By automating the process of creating commits, the tool ensures that your GitHub profile remains active daily, even during busy times. The project consists of a user-friendly frontend interface, a powerful backend for GitHub interaction, and a scheduler for automating daily commits.

### Key Features
- **Random Commit Generator**: Automatically creates a random number (5-15) of commits daily.
- **Customizable Settings**: Users can specify the repository and the range of daily commits.
- **Secure Authentication**: Uses a personal GitHub token to authenticate API requests.
- **Modern UI**: Built with React.js and Tailwind CSS for a responsive and intuitive user experience.
- **Backend Automation**: Powered by Flask, with scheduled tasks using APScheduler.
- **Easy Deployment**: Dockerized setup for seamless local and cloud deployment.

---

## Project Structure
```
GitAutoStreak/
├── backend/
│   ├── app.py                 # Main backend logic (API endpoints)
│   ├── scheduler.py           # Scheduler logic for periodic commits
│   ├── github_committer.py    # GitHub API utility functions
│   ├── config.py              # Configuration file for API tokens and constants
│   └── requirements.txt       # Python dependencies
├── frontend/
│   ├── public/
│   │   └── index.html         # Main HTML template for React
│   ├── src/
│   │   ├── components/
│   │   │   └── CommitScheduler.jsx  # React component for scheduling commits
│   │   ├── App.jsx            # Main React app entry point
│   │   ├── index.js           # React DOM rendering
│   │   └── styles.css         # Custom CSS (optional with Tailwind)
│   └── package.json           # Frontend dependencies
├── .env                       # Environment variables (e.g., GitHub token)
├── README.md                  # Project documentation
├── .gitignore                 # Ignore unnecessary files for version control
└── docker-compose.yml         # Docker Compose for full-stack deployment
```

---

## Installation and Setup

### Prerequisites
- Python 3.9+
- Node.js 16+
- Docker (optional for containerized deployment)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/chuck-ankit/GitAutoStreak.git
   cd GitAutoStreak/backend
   ```
2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```
3. Configure the `.env` file:
   ```
   GITHUB_TOKEN=your_personal_access_token
   ```
4. Start the Flask server:
   ```bash
   python app.py
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

### Docker Deployment
1. Build and run the containers:
   ```bash
   docker-compose up
   ```
2. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

---

## Usage
1. Open the web application.
2. Enter your GitHub repository in the format `username/repo`.
3. Set the minimum and maximum number of daily commits.
4. Click **Set Scheduler** to automate your commits.
5. Check your GitHub repository daily to see the generated commits.

---

## Technologies Used
### Frontend
- React.js
- Tailwind CSS

### Backend
- Flask
- PyGithub
- APScheduler

### Deployment
- Docker
- Docker Compose

---

## Limitations
- Automation may not align with GitHub’s terms of service. Use responsibly.
- Designed for educational and personal use only.

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Flask Documentation](https://flask.palletsprojects.com/)

