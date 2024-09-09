import { Cart } from "@/types/cart";
import CartItemQuantity from "./CartItemQuantity";

type Props = {
  item: Cart;
};

function CartItem({ item }: Props) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 overflow-hidden">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-md">{item.product.name}</p>
        <p className="text-xs text-muted-foreground">
          {item.product.price.toFixed(2)}
        </p>
      </div>
      <div>
        <CartItemQuantity cartItem={item} />
      </div>
    </div>
  );
}

export default CartItem;
