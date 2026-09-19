# MongoDB Practice Projects

A collection of projects I built while learning **MongoDB, Mongoose, Node.js, and Express.js** through hands-on practice.

This repository contains **three mini-projects and one main full-stack project**. Each project helped me understand how a frontend communicates with an Express.js backend and how the backend works with MongoDB using Mongoose.

---

## 📚 Projects

### 1. 📇 Simple Contact Form Collector

A simple application for collecting and storing contact form submissions.

#### Features

* Submit contact information
* Store name, email, and message in MongoDB
* Send data from the frontend to the backend
* Retrieve stored contact data

#### Concepts Practiced

* MongoDB
* MongoDB Atlas
* Mongoose
* Schemas and Models
* Creating documents
* `.save()`
* GET and POST routes
* Express.js
* Frontend-backend communication

---

### 2. 📊 Student Progress Tracker

An application for storing and displaying student progress.

#### Features

* Add student progress
* Store student name
* Store course name
* Store completion percentage
* Retrieve progress data
* Display progress information on the frontend

#### Concepts Practiced

* MongoDB
* Mongoose
* Schemas and Models
* Creating documents
* Saving data
* Retrieving data
* GET and POST routes
* Express.js
* Frontend-backend communication

---

### 3. 📝 Quick Notes Saver App

A simple application for saving and displaying notes.

#### Features

* Create notes
* Add a note title
* Add note content
* Store notes in MongoDB
* Retrieve saved notes
* Display notes dynamically on the frontend

#### Concepts Practiced

* MongoDB documents
* Mongoose
* Schemas and Models
* Creating documents
* `.save()`
* `find()`
* GET and POST routes
* Express.js
* Frontend-backend communication

---

### 4. 💬 Student Feedback Manager

The main full-stack project in this repository.

The application allows students to submit feedback through a frontend form and provides a separate page for displaying submitted feedback.

#### Features

* Student feedback form
* Student name
* Rating
* Comments
* Submit feedback
* Store feedback in MongoDB
* Retrieve submitted feedback
* Display feedback dynamically

#### Data Flow

```text
User
  ↓
Feedback Form
  ↓
Frontend
  ↓
POST Request
  ↓
Express.js Backend
  ↓
Mongoose
  ↓
MongoDB
```

For displaying feedback:

```text
MongoDB
  ↓
Mongoose
  ↓
GET Route
  ↓
Express.js Backend
  ↓
Frontend
  ↓
Feedback Display
```

#### Concepts Practiced

* MongoDB
* MongoDB Atlas
* Mongoose
* Schemas and Models
* POST routes
* GET routes
* Controllers
* MVC architecture
* Saving documents
* Retrieving documents
* Frontend-backend communication
* Error handling
* Environment variables

---

## 🛠️ Technologies Used

* **JavaScript**
* **Node.js**
* **Express.js**
* **MongoDB**
* **MongoDB Atlas**
* **Mongoose**
* **HTML**
* **CSS**

---

## 🧠 MongoDB Concepts Practiced in These Projects

These four projects helped me practice:

* MongoDB databases
* Collections
* Documents
* MongoDB Atlas
* MongoDB connection
* `mongoose.connect()`
* Mongoose schemas
* Mongoose models
* Creating documents
* `.save()`
* `find()`
* GET requests
* POST requests
* Express.js routes
* Controllers
* MVC architecture
* Frontend-backend communication
* Environment variables
* Error handling

---

## 🔬 Additional MongoDB Practice

Alongside these projects, I also practiced **MongoDB CRUD operations separately** through smaller backend exercises.

These exercises are kept outside this repository because they were mainly focused on practicing database operations rather than building complete UI-based projects.

### CRUD Operations Practiced

#### Create

* Creating documents
* `.save()`

#### Read

* `find()`
* `findOne()`
* `findById()`

#### Update

* `findByIdAndUpdate()`
* `$set`
* `$inc`
* `$push`

#### Delete

* `findByIdAndDelete()`

#### Other MongoDB Practice

* `$pull`
* Schema validation
* Update operators
* Delete operations

---

## 📂 Repository Structure

```text
mongodb-practice-projects/
│
├── contactDB/
│   ├── frontend/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── models/
│   │   └── Contact.js
│   ├── server.js
│   └── package.json
│
├── feedback/
│   ├── frontend/
│   │   ├── index.html
│   │   ├── feedback.html
│   │   ├── style.css
│   │   ├── feedback.css
│   │   ├── script.js
│   │   └── feedback.js
│   ├── models/
│   │   └── Feedback.js
│   ├── server.js
│   └── package.json
│
├── quick-notes/
│   ├── frontend/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── models/
│   │   └── Note.js
│   ├── server.js
│   └── package.json
│
├── st-progress/
│   ├── frontend/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── models/
│   │   └── Progress.js
│   ├── server.js
│   └── package.json
│
├── index.html
├── style.css
├── README.md
└── .gitignore
```

---

## 🔐 Environment Variables

Each backend uses a `.env` file to store the MongoDB connection string.

Example:

```env
MONGO_URI=your_mongodb_connection_string
```

The `.env` files are **not included in this repository** and are excluded using `.gitignore`.

---

## 🎯 Learning Journey

I learned MongoDB through a combination of **hands-on projects and separate database exercises**.

My learning progression looked like this:

```text
MongoDB Basics
      ↓
MongoDB Atlas
      ↓
Mongoose
      ↓
Schemas & Models
      ↓
Create & Read Data
      ↓
Express GET / POST Routes
      ↓
Frontend ↔ Backend Communication
      ↓
MVC Architecture
      ↓
Full-Stack Student Feedback Manager
      ↓
Additional CRUD Practice
```

Building these projects helped me understand how MongoDB fits into a real backend application rather than learning database concepts only through theory.

---

## 🚀 Future Learning

Next, I plan to explore:

* Advanced MongoDB queries
* Aggregation Pipeline
* Indexing
* MongoDB relationships
* Advanced Mongoose
* Authentication and authorization
* Advanced backend architecture
* Larger full-stack applications

---

## 💡 Purpose of This Repository

This repository is primarily a **learning and practice collection**.

The goal was to strengthen my understanding of MongoDB and backend development by building small applications and gradually moving toward a complete full-stack project.

> **Learning by building, one project at a time.**
