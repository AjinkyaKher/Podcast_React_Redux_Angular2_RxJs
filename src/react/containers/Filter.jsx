/* eslint-disable */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import { setVisibilityFilter } from '../actions';

const Filter = ({ dispatch }) => (
    <Tabs justified initialSelectedIndex={0}>
        <Tab value="pane-1" label="ALL" onActive={() => dispatch(setVisibilityFilter('SHOW_ALL'))} />
        <Tab value="pane-2" label="ACTIVE" onActive={() => dispatch(setVisibilityFilter('SHOW_ACTIVE'))} />
        <Tab value="pane-2" label="COMPLETED" onActive={() => dispatch(setVisibilityFilter('SHOW_COMPLETED'))} />
    </Tabs>  
);

Filter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Filter);