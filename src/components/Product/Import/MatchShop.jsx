import React from 'react';

const MatchShop = (children) => {
  const {shops} = children;
  return (
    <div>
      <div className="rounded py-4 mb-5 pb-1">
        {shops ?
          shops.map((shop)=> (
            <div key={shop.id} className="mb-2 me-2 form-check-inline form-check-solid">
              <input id={shop.id} type="checkbox" name={shop.shopName} className="form-check-input d-none btn-check"  onClick={()=> console.log(shop.id)}/>
              <label htmlFor={shop.id} className="btn btn-outline btn-outline-white fw-normal btn-active-secondary p-2 d-flex align-items-center py-1">
                <img src={`/assets/media/icons/${shop.icon}`} alt={""}/>&nbsp;{shop.shopName}
              </label>
            </div>
          ))
          : null
        }
      </div>

    </div>
  );
};

export default MatchShop;
