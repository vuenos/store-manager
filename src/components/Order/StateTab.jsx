import React, { useState } from "react";
import TabChild from "./TabChild";

const StateTab = (children) => {

    const [selectedIndex, setSelectedIndex] = useState(1);
    
    const {data} = children;

    const selecteButton = (props) => {

        // 여기서 selected 값을 넣어준다.
        setSelectedIndex(props);

        console.log("props: ",props);
    }

    return (
        <div className="mb-5 bg-gray-200 d-flex align-items-center step-wrap border-gray-400 border-bottom">
            {data.map((value,i) => (
                <TabChild 
                    index={value.index}
                    selected={selectedIndex}
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

export default StateTab;