# 🏋️ FitLog — Workout Library & Training Planner

FitLog is a modern and responsive workout library and training planner built with Next.js, TypeScript, and Tailwind CSS.

The application allows users to explore different workouts, view detailed exercise information, create a daily training plan, save workouts for later, and track basic workout statistics through a simple and focused interface.

## 🔗 Live Demo

https://assignment6-six-murex.vercel.app/

---

## 📖 About The Project

FitLog is designed as a practical workout management application where users can discover exercises and organize their daily training routine.

The project focuses on building a responsive frontend with modern Next.js development practices, REST API integration, client-side state management, reusable components, and local data persistence.

The interface uses a dark fitness-focused design with neon lime accents to create a clean and focused workout experience.

---

## ✨ Key Features

### 🏋️ Workout Library

Browse a collection of workouts and view important information such as:

- Exercise name
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories burned
- Sets and reps
- Rating
- Exercise description

### 📋 Daily Training Plan

Users can add workouts to their daily training plan and manage their selected exercises from the **My Plan** section.

### 🔖 Saved Workouts

Users can save workouts for later and access them from the Saved section.

### 📊 Workout Statistics

The application provides basic statistics for the selected workouts, including:

- Total exercises
- Total workout minutes
- Estimated calories

### ↕️ Workout Sorting

Workouts in the training plan can be sorted by:

- Duration
- Calories
- Rating

### ✅ Workout Completion

Users can mark workouts as completed after finishing them.

### 🔍 Workout Details

Each workout has a dedicated details page containing additional information and exercise instructions.

### 💾 Local Persistence

Workout plans and saved workouts are stored using browser local storage so the user's selections remain available after refreshing the page.

### 📱 Responsive Design

The application is designed to provide a usable experience across:

- Desktop
- Tablet
- Mobile devices

### 🔔 Toast Notifications

The application provides feedback when users add, remove, save, or complete workouts.

---

## 🛠️ Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- REST API
- Local Storage

---

## 🔌 API

FitLog retrieves workout information from the following REST API:

https://api.abcz.workers.dev/api/fitlog

The API provides workout information including exercise names, equipment, difficulty, duration, calories, ratings, descriptions, and instructions.

---

## 📂 Project Structure

```text
assignment6/
│
├── app/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Library.tsx
│   │   └── Navbar.tsx
│   │
│   ├── context/
│   │   └── PlanContext.tsx
│   │
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│   └── images and assets
│
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nafisanahin/assignment6.git
```

### 2. Navigate to the Project

```bash
cd assignment6
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open the Application

Visit:

```text
http://localhost:3000
```

---

## 🖥️ Main Pages

### Workout Library

The homepage displays the available workout collection and allows users to explore different exercises.

### Workout Details

Users can open an individual workout to view detailed exercise information and instructions.

### My Plan

The My Plan page allows users to:

- View today's workouts
- View saved workouts
- Sort workouts
- See workout statistics
- Mark workouts as completed
- Remove workouts

---

## 🎯 Project Goals

The main goals of this project are to practice:

- Next.js application development
- React component-based architecture
- TypeScript
- REST API integration
- Client-side state management
- Local storage
- Responsive web design
- Reusable UI components
- Modern frontend styling

---

## 📱 Responsive Experience

FitLog is built with responsive design principles so that the main workout features remain accessible across different screen sizes.

---

## 📄 License

This project was created as an educational project for practicing modern web development with Next.js and related technologies.

---

## 👨‍💻 Project

**FitLog — Workout Library & Training planner**

Built using Next.js, React, TypeScript, and Tailwind CSS.
