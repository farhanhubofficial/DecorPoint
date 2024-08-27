// CurtainTile.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../Store/Api/CartSlice';

function CurtainTile({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  const handleImageClick = () => {
    navigate(`/subproducts/${product.id}`);
  };

  return (
    <div className="group flex flex-col items-center border-2 border-red-900 gap-3 h-[364px] mt-10 ml-5 rounded-xl">
      <div className="h-[180px]">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-60 w-72 cursor-pointer"
          onClick={handleImageClick}
        />
        <h1 className="font-bold text-xl lg:text-sm">Name: {product.name}</h1>
        <h1>Price: ksh {product.price}</h1>
        <h1>Material: {product.material}</h1>
        <button
          className="mt-1 bg-slate-800 text-white h-10 w-40 rounded-lg"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default CurtainTile;
