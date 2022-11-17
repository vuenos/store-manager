import React from 'react';
import PropTypes from 'prop-types';


const Dashboard = (props) => {

  Dashboard.propTypes = {
    title: PropTypes.string,
  }

  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <div>Contents</div>
      </div>
    </div>
  )
}

export default Dashboard;