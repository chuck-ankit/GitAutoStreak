# backend/github_committer.py
import random
import datetime
from github import Github
from config import GITHUB_TOKEN

def schedule_commits(repo_name, min_commits, max_commits):
    g = Github(GITHUB_TOKEN)
    repo = g.get_repo(repo_name)

    for _ in range(random.randint(min_commits, max_commits)):
        content = f"Random commit on {datetime.datetime.now()}"
        filename = f"file_{datetime.datetime.now().timestamp()}.txt"
        repo.create_file(filename, "Automated commit", content)
