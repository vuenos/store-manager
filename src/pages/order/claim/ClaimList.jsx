import React from "react";
import Tabs2 from "components/Tabs2";
import Tabs3 from "components/Tabs3";
import Search from "components/Search/Search";
import CardList from "components/CardList";

const ClaimList = () => {

    const data =[
        {
            index: 1,
            icon:"claim-cancel",
            title:"취소",
            count:15,
            subject:"cancle",         
        },
        {
            index: 2,
            icon:"claim-return",
            title:"반품",
            count:36,
            subject:"return"
        },
        {
            index: 3,
            icon:"claim-change",
            title:"교환",
            count:2,
            subject:"exchange"
        }
    ];

    const data2 = [
        {
            index: 1,
            title: "취소요청",
            count: 2
        },
        {
            index: 2,
            title: "취소완료",
            count: 13
        },
        {
            index: 3,
            title: "취소철회",
            count: 0
        }
    ];

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
            <h1>ClaimList</h1>

            <Tabs2 
                data={data}
            />

            <Tabs3 
                data2={data2} 
            />

            <Search 
                search={search}
            />

            <CardList />

        </div>
    )
}

export default ClaimList;