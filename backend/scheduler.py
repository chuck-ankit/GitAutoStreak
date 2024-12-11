# backend/scheduler.py
from apscheduler.schedulers.background import BackgroundScheduler
from github_committer import schedule_commits

scheduler = BackgroundScheduler()

def start_scheduler():
    scheduler.start()
    print("Scheduler started.")