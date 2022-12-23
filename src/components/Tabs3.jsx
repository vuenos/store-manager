import React from 'react';

const Tabs3 = (children) => {

    const {data2} = children;

    return (
        <div>

            <div className="py-4">

                <div className="d-flex flex-wrap mall-wrap">

                    {data2.map((value,i) => (                                         
                        <a className="btn btn-outline btn-outline-white btn-active-secondary p-4 py-3 me-2 text-start w-125px" href="#"key={i}>
                            <p className="text-end">{value.title}</p>
                            <p className="text-end mb-0">{value.count}</p>
                        </a>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Tabs3;