import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Todo = ({ todo, toggleDone }) => {
  return (
    <ListItem button>
      <ListItemText primary={todo.name} className={todo.isDone ? 'is-done' : ''} onClick={() => toggleDone(todo.id)} />
    </ListItem>
  );
}

export default Todo;
