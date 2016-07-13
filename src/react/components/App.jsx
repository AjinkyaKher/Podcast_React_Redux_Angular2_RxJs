import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <Row className="mui--text-center">
   <br />
   <Col md="10" md-offset="1">
    <Panel style={{ backgroundColor: '#3F51B5' }}>
      <div>
        <AddTodo />
        <VisibleTodoList />
      </div>
    </Panel>
    </Col>
  </Row>
);

export default App;
