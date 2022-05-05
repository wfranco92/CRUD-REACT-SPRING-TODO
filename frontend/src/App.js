import React from 'react';
import {List} from './components/List';
import Form from './components/Form';

function App() {
  return <React.Fragment>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </React.Fragment>
}

export default App;
