import React from 'react';
import CardList from 'components/CardList'
import Tabs2 from 'components/Tabs2';
import Search from 'components/Search/Search'

const OrderList = () => {

  const data =[
      {
          index: 1,
          icon:"order-pay",
          title:"결제완료",
          count:12,
          subject:"payed",         
      },
      {
          index: 2,
          icon:"order-ready",
          title:"배송준비중",
          count:397,
          subject:"delivery_waiting"
      },
      {
          index: 3,
          icon:"order-truck",
          title:"배송중",
          count:2,
          subject:"delivering"
      },
      {
          index: 4,
          icon:"order-delivery",
          title:"배송완료",
          count:6,
          subject:"delivered"          
      },        
      {
          index: 5,
          icon:"order-confirm",
          title:"구매확정",
          count:12,
          subject:"purchase_decided"
      }
  ];


  return (
  
    <div>
      <h1>OrderList</h1>

      <Tabs2 
        data={data}
      />

      <Search />

      <CardList />

    </div>

    )
}

export default OrderList;