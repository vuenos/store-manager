import React from "react";
import TabChild from "./Tab/TabChild";

const Tabs2 = (children) => {

    const {data} = children;

    const selecteButton = (props) => {
        console.log(props)
    }

    return (
        <div className="mb-5 bg-gray-200 d-flex align-items-center step-wrap border-gray-400 border-bottom">
            {data.map((value,i) => (

                <TabChild 
                    key={i}
                    icon={value.icon}
                    title={value.title}
                    count={value.count}
                    subject={value.subject}
                    selecteButton={selecteButton}
                />

            ))}
        </div>
    )
};

export default Tabs2;