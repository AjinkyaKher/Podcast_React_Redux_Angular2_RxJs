import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Form from 'muicss/lib/react/form';
import Panel from 'muicss/lib/react/panel';

const AddTodo = ({ dispatch }) => {
  let input;

  const inputChange = (e) => {
    input = e.target;
  };

  return (
    <Panel style={{ backgroundColor: '#E8EAF6' }}>
      <Form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}
      >
        <Input onChange={inputChange}
          floatingLabel label="Enter a new Todo task..."
        />
        <Button color="primary">
          Add Todo
        </Button>
      </Form>
      </Panel>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
