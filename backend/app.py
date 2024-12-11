# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from scheduler import start_scheduler
from github_committer import schedule_commits

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

@app.route('/api/schedule', methods=['POST'])
def schedule():
    data = request.json
    repo_name = data.get('repo')
    min_commits = data.get('minCommits', 5)
    max_commits = data.get('maxCommits', 15)

    if not repo_name:
        return jsonify({"error": "Repository name is required"}), 400

    schedule_commits(repo_name, min_commits, max_commits)
    return jsonify({"message": "Scheduler set successfully!"}), 200

if __name__ == "__main__":
    start_scheduler()
    app.run(debug=True)