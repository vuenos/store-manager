import React from "react";
import Search from "components/Search/Search";
import CardList from "components/CardList";

const CsList = () => {
    
    const search = [
        {
            index: 1,
            title: '문의접수일'
        },
        {
            index: 2,
            title: '연동몰/계정'
        },
        {
            index: 3,
            title: '처리상태'
        }
    ];

    return (
        <div>
            
            <Search
                search={search}
            />

            <CardList />

        </div>
    )
}

export default CsList;