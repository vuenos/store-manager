import React from 'react';
import PropTypes from 'prop-types';


const Dashboard = (props) => {

  Dashboard.propTypes = {
    title: PropTypes.string,
  }

  return (
    <div>
      <div>
        {props.title}
      </div>
    </div>
  )
}
export default Dashboard;