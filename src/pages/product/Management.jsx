import React, {useState} from 'react';
import SelectType from "../../components/Product/ManagementGoods/SelectType";
import ManagementSelect from "../../components/Product/ManagementGoods/ManagementSelect";

const Management = () => {
  return (
    <div>
      <SelectType/>
      <ManagementSelect/>
    </div>
  );
};

export default Management;
