import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Todo from './Todo';
import NewTodo from './NewTodo';
import uuid from 'uuid/v1';

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'Learn GraphQL',
      isDone: false
    },
    {
      id: 2,
      name: 'Read a book',
      isDone: false
    },
    {
      id: 3,
      name: 'Build an app',
      isDone: false
    },
  ]);

  const toggleDone = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (id === todo.id) {
        todo.isDone = !todo.isDone;
        return;
      }
    });
    setTodos(newTodos)
  }

  const addTodo = (name) => {
    if (!name) {
      return
    }

    setTodos([...todos, { name, isDone: false, id: uuid() }])
  }

  return (
    <>
      <NewTodo addTodo={addTodo} />
      <List component="nav" aria-label="todo list">
        { todos.map((todo) => (<Todo key={todo.id} todo={todo} toggleDone={toggleDone} />)) }
      </List>
    </>
  );
}

export default Todos;
