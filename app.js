// Import Firebase SDK functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBJTFnT2PGK-zPquUTQZPYXJpzssH5XJI-o",
  authDomain: "todoapp-firebase-26a35.firebaseapp.com",
  projectId: "todoapp-firebase-26a35",
  storageBucket: "todoapp-firebase-26a35.firebasestorage.app",
  messagingSenderId: "363238211990",
  appId: "1:363238211990:web:4158f4255c8eac31501db7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database instance
const db = getFirestore(app);

// Reference to the tasks collection in Firestore
const tasksCollection = collection(db, "tasks");

// Elements from the html DOM
const taskForm = document.getElementById("task-form");
const taskTitleInput = document.getElementById("task-title");
const taskPrioritySelect = document.getElementById("task-priority");
const taskList = document.getElementById("task-list");

// Real-time listener for task changes (Read)
onSnapshot(tasksCollection, (snapshot) => {
    taskList.innerHTML = "";

    snapshot.forEach((taskDoc) => {
        const task = taskDoc.data();
        const taskId = taskDoc.id;

        const li = document.createElement("li");
        li.dataset.id = taskId;

        // Apply completed style if task is finished
        const taskStyle = task.completed ? "text-decoration: line-through; color:red" : "";

        li.innerHTML = `
            <span style="${taskStyle}">
                <strong>${task.title}</strong> (${task.priority})
            </span>
            <button class="btn-complete">${task.completed ? "Undo" : "Complete"}</button>
            <button class="btn-delete">Delete</button>
        `;

        // Event listener to toggle completion
        const completeBtn = li.querySelector(".btn-complete");
        completeBtn.addEventListener("click", async () => {
            const taskRef = doc(db, "tasks", taskId);
            await updateDoc(taskRef, {
                completed: !task.completed
            });
        });

        // Event listener to delete task
        const deleteBtn = li.querySelector(".btn-delete");
        deleteBtn.addEventListener("click", async () => {
            const taskRef = doc(db, "tasks", taskId);
            await deleteDoc(taskRef);
        });

        taskList.appendChild(li);
    });
});

//Form to submit task event listener
taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = taskTitleInput.value.trim();
    const priority = taskPrioritySelect.value;

    if (!title) return;

    try {
        await addDoc(tasksCollection, {
            title: title,
            priority: priority,
            completed: false,
            createdAt: new Date()
        });

        taskForm.reset();
    } catch (error) {
        console.error("Error adding task:", error);
    }
});