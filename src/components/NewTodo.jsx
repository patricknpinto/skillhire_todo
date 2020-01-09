import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const Todo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  }

  const onChange = (e) => {
    setTodo(e.target.value);
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Name" onChange={onChange} value={todo} />
    </form>
  );
}

export default Todo;
