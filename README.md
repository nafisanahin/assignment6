
Project Name
FitLog — Workout Library & Training Planner

FitLog
FitLog is a dark, modern workout library and training planner built for people who want to browse exercises, save useful workouts, and build a focused workout plan. The app provides a simple interface for exploring exercises and keeping track of today's training.

Live Demo
https://assignment6-six-murex.vercel.app/

Technologies Used
Next.js

React

TypeScript

Tailwind CSS

DaisyUI

React Icons

React Toastify

REST API

Local Storage

Features
Workout Library
Browse a collection of workouts with exercise information such as equipment, duration, calories, and rating.

Workout Details
Open an individual workout to view its details and instructions.

Today's Plan
Add workouts to a personal plan and keep track of the exercises selected for the day.

Saved Workouts
Bookmark workouts and keep them in a separate Saved section for later.

Sorting
Sort workouts in the plan by duration, calories, or rating.

Workout Completion
Mark exercises as completed when they are finished.

Plan Statistics
View the number of exercises, total minutes, and estimated calories for the current list.

Responsive Design
The interface works across desktop, tablet, and mobile screen sizes.

Toast Notifications
Get quick feedback when workouts are added, removed, saved, or marked as completed.

Dark Fitness UI
Uses a dark interface with neon lime accents for a focused gym-style visual design.

What Users Can Do
Browse available workouts from the workout library.

View detailed information about each workout.

Add workouts to today's training plan.

Save workouts for later.

Remove workouts from the plan or saved list.

Mark completed workouts as done.

Sort workouts based on duration, calories, or rating.

Track total exercises, workout time, and estimated calories.

Use the application comfortably on different screen sizes.

Project Structure
app/
├── components/
├── my-plan/
├── workout/
├── globals.css
├── layout.tsx
└── page.tsx
Getting Started
Install the dependencies:

npm install
Run the development server:

npm run dev
Open the application in your browser:

http://localhost:3000
API
FitLog uses the FitLog workout API to load workout data:

https://api.abcz.workers.dev/api/fitlog

