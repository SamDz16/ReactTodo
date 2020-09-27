import React, { useState, useEffect } from "react";

import { db } from "./firebase";
import firebase from "firebase";

import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import ListTodo from "./components/ListTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // When the app loads, we need to fetch all the todoos ffrom
  //the database

  useEffect(() => {
    // This fires when the app loads for the first time!
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const removeTodo = (id) => {
    db.collection("todos")
      .doc(id)
      .delete()
      .then(() => console.log("Document was deleted!"))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ height: "100vh" }} className="bg-light">
      <div className="container">
        <h1 className="text-center display-4 pb-3">Welcome To My Todo App</h1>
        <AddTodo input={input} setInput={setInput} addTodo={addTodo} />
        <ListTodo todos={todos} removeTodo={removeTodo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
