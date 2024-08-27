import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
} from '../Store/Api/CartSlice';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total number of items and total price
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementItemQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItemQuantity(id));
  };

  return (
    <div className="max-w-4xl  mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Your Cart
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.length > 0 ? (
          items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover mb-4 rounded"
              />
              <div className="text-center">
                <h2 className="font-bold text-xl text-gray-800">{item.name}</h2>
                <div className="flex items-center justify-center space-x-2 my-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    disabled={item.quantity === 1}
                    className={`w-8 h-8 bg-red-500 text-white rounded ${
                      item.quantity === 1
                        ? 'cursor-not-allowed opacity-50'
                        : 'hover:bg-red-600'
                    }`}
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="w-8 h-8 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-600">
                  Price: <span className="font-semibold">ksh {item.price}</span>
                </p>
                <p className="text-gray-600">
                  Total: <span className="font-semibold">ksh {item.quantity * item.price}</span>
                </p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-2 bg-red-500 text-white h-8 w-full rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">
            Your cart is empty.
          </p>
        )}
      </ul>
      {items.length > 0 && (
        <div className="mt-8 border-t border-gray-300 pt-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Total Items: <span className="text-blue-700">{totalItems}</span>
          </h2>
          <h2 className="text-2xl font-semibold text-gray-700">
            Total Price: <span className="text-blue-700">ksh {totalPrice}</span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
