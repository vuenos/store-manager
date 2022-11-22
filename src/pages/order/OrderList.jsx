import React from 'react';
import CardList from '../../components/CardList'
import Tabs2 from '../../components/Tabs2';

const OrderList = () => {

  const data =[
      {
          icon:"order-pay",
          title:"결제완료",
          count:12,
          subject:"payed"
      },
      {
          icon:"order-ready",
          title:"배송준비중",
          count:397,
          subject:"delivery_waiting"
      },
      {
          icon:"order-truck",
          title:"배송중",
          count:2,
          subject:"delivering"
      },
      {
          icon:"order-delivery",
          title:"배송완료",
          count:6,
          subject:"delivered"
      },        
      {
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

      <CardList />
    </div>
  )
}

export default OrderList;