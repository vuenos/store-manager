import React from 'react';

const TabChild = (children) => {
    const {icon, title, count, subject} = children;    
    
    return (
        <div className="step-box step-box02 text-center min-w-125px me-2" onClick={()=> children.selecteButton(subject)}>
            <div className={"fs-4 fw-boldest text-gray-500 step-text w-100 bg-tab-image "+ icon}>

                <div className="mt-12">
                    {title}

                    <p className="m-0 fs-7 fw-normal">{count}</p>
                </div>

            </div>
        </div>
    )
}

export default TabChild;