import './todo.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [newTask1, setNewTask1] = useState<string>('');
  const [editIndex,setEditIndex] = useState<number>(-1);

  const handleDelete = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const handleEdit = (index: number) => {
    setEditIndex(index)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const changeTask = (event)=>{
      setNewTask1(event.target.value);
  }

  const updateTask=()=>{
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
      updatedTasks[editIndex] = newTask1; // Update the task at the editIndex with the new value from the input
      setTasks(updatedTasks); // Update the tasks state with the updated array
      setEditIndex(-1); // Reset the editIndex to -1 to exit the edit mode
  }

  return (
    <div>
      <div className="top-bar">
        <div className="logout-icon"><Link to='/'>
          <i className="fas fa-sign-out-alt">Logout</i></Link>
        </div>
      </div>
      <main className="c">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="headings">To-Do List</h1>
          <div className="form-group">
            <input
             
             type="text"
              className="add"
              id="add"
              placeholder="Add new task"
              value={newTask}
              onChange={handleInputChange}
            />
            <button type="submit" id="todo" className="adds">Add</button>
          </div>
        </form>
        <div className="list" id="list">
          {tasks.map((task, index) => (
            <div className="items" key={index}>
              {
                editIndex!=index?<div>{task}</div>:<form className="textInside"><input type="text" onChange={changeTask} placeholder={task} id="none" className='none'/> <button type="submit" id="okButton" onClick={updateTask}></button></form>
              }
              <div className="symbol">
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(index)} style={{ cursor: "pointer" }} />
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(index)} style={{ cursor: "pointer", marginLeft: "15px" }} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Todo