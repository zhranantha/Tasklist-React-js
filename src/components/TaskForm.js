import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/TaskForm.css';

export default function TaskForm({ show, handleClose, addTask, editTask, taskToEdit }) {
  const [task, setTask] = useState({ name: '', priority: 'Medium', status: 'To Do' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    taskToEdit ? editTask(task) : addTask(task);
    setTask({ name: '', priority: 'Medium', status: 'To Do' });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              placeholder="Enter your task"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={task.status}
              onChange={(e) => setTask({ ...task, status: e.target.value })}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: '#B03052', // warna pink muda
                borderColor: '#ffb6c1', // border warna yang sama
              }}
              type="submit"
            >
              {taskToEdit ? 'Update Task' : 'Add Task'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}