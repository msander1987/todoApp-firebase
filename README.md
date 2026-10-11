# Overview

I wanted to build a simple real-time To-Do List app to learn how to connect a basic web page with a cloud database like Firebase Firestore without needing a back-end server.

This app is built using HTML, CSS, and plain JavaScript. It lets you create, view, update, and delete tasks. Since it connects to Firebase Firestore using `onSnapshot`, any changes appear instantly on the screen without needing to reload the page.

### How to Use the Program

1. Open `index.html` in your browser.
2. Type a task name, choose a priority level, and click **Add Task**.
3. Your new task will show up in the list below.
4. Click **Complete** to cross off a task, or click **Delete** to remove it.

My main goal was to practice using asynchronous JavaScript (`async/await`) and learn how real-time databases work.

[Software Demo Video](https://youtu.be/PDIBib6fANY)

# Cloud Database

I used **Google Cloud Firestore**, which is a NoSQL database hosted in the cloud that lets you store and sync data in real time.

### Database Structure

The database has one main collection called **`tasks`**. Each task document inside this collection includes:

* `title`: Name of the task (text).
* `priority`: Priority level ("Low", "Medium", or "High").
* `completed`: Status of the task (`true` or `false`).
* `createdAt`: Timestamp showing when the task was added.

# Development Environment

### Tools Used

* **VS Code**: Editor used to write all HTML, CSS, and JS code.
* **Git & GitHub**: Used to track changes and host the project code.
* **Firebase Console**: Used to set up the Firestore database.

### Languages & Libraries

* **HTML5 & CSS3**: For the layout and styling.
* **JavaScript (ES6)**: For app functionality and handling user actions.
* **Firebase SDK (v10)**: Imported via CDN links to connect JavaScript directly to Firestore.

# Useful Websites

* [Firebase Documentation](https://firebase.google.com/docs/firestore)

# Future Work

* Add simple form checks so users cannot add empty tasks.
* Add buttons to filter tasks by active or completed.
* Make the CSS design look a bit cleaner on mobile screens.