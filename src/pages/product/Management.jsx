import React, {useEffect, useState} from 'react';
import SelectType from "../../components/Product/ManagementGoods/SelectType";
import SearchGoods from "../../components/Product/ManagementGoods/SearchGoods";
import StatusGoods from "../../components/Product/ManagementGoods/StatusGoods";
import GoodsList from "../../components/Product/ManagementGoods/GoodsList";

const Management = () => {
  const [ManagementType, setManagementType] = useState("1")

  const ChangeType = (type) => {
    setManagementType(type);
  }


  useEffect(()=> {
    console.log(ManagementType)
  },[ManagementType])
  return (
    <div>

      <SelectType
        ManagementType={ManagementType}
        setType={ChangeType}
      />
      {
        ManagementType === "2" ?
          <StatusGoods/>
          : null
      }

      <SearchGoods/>
      <GoodsList/>
    </div>
  );
};

export default Management;
