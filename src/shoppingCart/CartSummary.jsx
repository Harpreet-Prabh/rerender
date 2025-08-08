import React, { useEffect, useState } from "react";
import useCartContext from "./useCartContext";

function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
function CartSummary() {
  const { cartItems } = useCartContext();
  const [grandTotal, setGrandTotal] = useState();
  useEffect(() => {
    let total = cartItems.map((item) => {
      return item.product.price * item.qty;
    });
    console.log(total);
    setGrandTotal(sumArray(total));
  }, [cartItems]);

  return (
    <div
      className="fixed top-12 right-4 md:top-13 md:right-8 z-50
     bg-blue-100 shadow-lg p-4 rounded-md w-[600px]"
    >
      <h2 className="text-lg font-semibold mb-3">Cart Summary</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className=" text-left border-b">
            <th className="">Product</th>
            <th className="">Price</th>
            <th className="">Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product, index) => {
            return (
              <tr>
                <td key={index} className="">
                  {product.product.name}
                </td>
                <td className="">{product.product.price}</td>
                <td className="flex gap-3 items-center py-2">
                  <button className="h-6  flex justify-center items-center w-6 rounded-full p-2 bg-red-200">
                    -
                  </button>
                  {product.qty}
                  <button className=" h-6  flex justify-center items-center w-6 rounded-full p-2 bg-red-200">
                    <span>+</span>
                  </button>
                </td>
                <td>{(product.product.price * product.qty)?.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="border-t">
            <td className="">Grand Total</td>
            <td colSpan="2" className="">
              {grandTotal?.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default CartSummary;
