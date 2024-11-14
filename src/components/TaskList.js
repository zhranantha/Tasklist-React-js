import React from 'react';
import '../styles/TaskList.css';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  const getStatusIcon = (status) => {
    switch(status) {
      case 'Done':
        return <i className="bi bi-check-circle-fill" style={{ color: 'green' }}></i>;
      case 'In Progress':
        return <i className="bi bi-arrow-repeat" style={{ color: 'green' }}></i>;
      default:
        return <i className="bi bi-circle" style={{ color: 'green' }}></i>;
    }    
  };

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task-item status-${task.status}`}>
          <div className="task-info">
            <div className="task-details">
              <span className="label">task</span>
              <h3 className="task-name">{task.name}</h3>
            </div>
            <div className="priority-container">
              <span className="label">priority</span>
              <div className={`priority-badge priority-${task.priority}`}>
                {task.priority}
              </div>
            </div>
            <div className="status-container">
              <div className="status-badge">
                {task.status}
              </div>
            </div>
            <div className="status-icon">
              {getStatusIcon(task.status)}
            </div>
          </div>
          <div className="task-actions">
            <button 
              className="action-button" 
              onClick={() => showEditForm(task)}
            >
              ✏️
            </button>
            <button 
              className="action-button delete-button" 
              onClick={() => deleteTask(task.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;