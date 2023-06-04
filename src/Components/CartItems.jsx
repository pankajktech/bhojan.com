import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../Redux/cartSlice";

import { IMG_CDN_LINK } from "../Contents";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const clearCartItem = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center min-h-[84vh]">
      <h1 className="text-2xl font-bold border-b-2 border-b-pink-600 text-center mt-10 w-10">
        Cart
      </h1>
      <p className="mb-10">{cartItems?.length} Items</p>
      <div className="flex flex-col items-center">
        {cartItems?.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="border-b-2 border-b-slate-300 mb-4 flex justify-between w-[400px]"
          >
            <div className="w-[65%] lg:w-[70%]">
              <h3 className="font-bold">{item?.card?.info?.name}</h3>
              <p className="text-teal-600">
                {item?.card?.info?.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item?.card?.info?.price / 100)
                  : " "}
              </p>
              <p className="my-3 opacity-50">
                quantity:
                {
                  cartItems.filter(
                    (cartItem) => cartItem.card.info.id === item.card.info.id
                  ).length
                }
              </p>
            </div>
            <div className="mb-5">
              <img
                className="h-[100px] w-[200px]"
                src={IMG_CDN_LINK + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
                loading="lazy"
              />
            </div>
          </div>
        ))}

        <div className="flex justify-between w-[400px]">
          <h1 className="font-bold">Total</h1>
          <h1 className="font-bold">
            {cartItems?.reduce((acc, item) => {
              return acc + item?.card?.info?.price;
            }, 0) > 0
              ? new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(
                  cartItems?.reduce((acc, item) => {
                    return acc + item?.card?.info?.price;
                  }, 0) / 100
                )
              : " "}
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => clearCartItem()}
          className="bg-gray-900 hover:bg-gray-800 w-36 flex items-center justify-center text-white my-5 py-2"
        >
          Clear Cart
        </button>
        <button className="bg-gray-900 hover:bg-gray-800 w-36 flex items-center justify-center text-white my-5 py-2 ml-5">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
