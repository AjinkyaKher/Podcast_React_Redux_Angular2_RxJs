/* eslint-disable */
import React, { PropTypes } from 'react';

const AppTitle = ({ color }) => {
   return (
     <h1 style={{color}}> Redux/React Todo App </h1>  
   );
}

AppTitle.propTypes = {
  color: PropTypes.string.isRequired, 
};

export default AppTitle;