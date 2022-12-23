import React from "react";
import Search from "components/Search/Search";
import CardList from "components/CardList";

const AllList = () => {

    const search = [
        {
            index: 1,
            title: '기간검색'
        },
        {
            index: 2,
            title: '연동몰/계정'
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

export default AllList;