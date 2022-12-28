import React from 'react';

const Tab = (data) => {
  const {icon,title,subject,selected} = data;
  return (
          <div className={'step-box text-center min-w-125px me-2 ' + (selected === icon ? 'active' : '')}>
            <span className="d-inline-flex align-items-center justify-content-center rounded-circle w-25px h-25px text-white bg-gray-500 fw-boldest step-number">{icon}</span>
            <div className="fs-4 fw-boldest text-gray-500 mt-4 step-text">{title}</div>
          </div>
  )
};

export default Tab;
