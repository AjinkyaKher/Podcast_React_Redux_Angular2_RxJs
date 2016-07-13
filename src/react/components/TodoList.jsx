import React, { PropTypes } from 'react';

const TodoList = ({ todos, onTodoClick }) => (
  <ul className="mui--text-center mui-list--unstyled"
    style={{ fontSize: '2.5em' }}
  >
    {todos.map(todo =>
      <li key={todo.id}
        onClick={() => onTodoClick(todo.id)}
        style={{
          cursor: 'pointer',
          color: '#FFFFFF',
        }}
      >
      {
        todo.completed ?
        <i className="fa fa-check-circle"></i> :
        <i className="fa fa-circle"></i>
      }
      { "  " } {todo.text}
    </li>
  )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
