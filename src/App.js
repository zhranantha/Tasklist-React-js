import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/TaskList.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  return (
    <Container className="my-5">
      <div className="task-list-header">
        <h1 className="m-0">Task List</h1>
        <button 
          className="add-task-button" 
          onClick={handleShowForm}
          style={{
            background: '#6c5ce7',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            color: 'white',
            fontWeight: '600',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#D76C82'}  
          onMouseLeave={(e) => e.target.style.backgroundColor = '#B03052'}  

        >
          + Add Task
        </button>
      </div>
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        showEditForm={showEditForm} 
      />
      <TaskForm
        show={showForm}
        handleClose={handleCloseForm}
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
      />
    </Container>
  );
}

export default App;