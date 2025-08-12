import { ShoppingCart } from "lucide-react";
import useCartContext from "./useCartContext";
function CartIcon() {
  const { cartItems } = useCartContext();
  return (
    <div>
      <div class="flex items-center justify-center">
        <h1 class="text-xl font-bold">welcome to shopping</h1>
      </div>
      <div className="fixed top-4 right-4 md:top-6 md:right-8 z-50">
        <div className="relative inline-block">
          <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            {cartItems.length}
          </p>
          <ShoppingCart className="h-8 w-8 cursor-pointer text-gray-700 hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default CartIcon;
