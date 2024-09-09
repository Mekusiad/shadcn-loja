import { Cart } from "@/types/cart";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
  cartItem: Cart;
};

function CartItemQuantity({ cartItem }: Props) {
  const { upsertCartItem } = useCartStore((state) => state);

  const handleMinusButton = () => {
    upsertCartItem(cartItem.product, -1);
  };

  const handlePlusButton = () => {
    upsertCartItem(cartItem.product, 1);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleMinusButton}
        variant={"outline"}
        size={"icon"}
        className="size-6"
      >
        <MinusIcon className="size-3" />
      </Button>
      <p>{cartItem.quantity}</p>
      <Button
        onClick={handlePlusButton}
        variant={"outline"}
        size={"icon"}
        className="size-6"
      >
        <PlusIcon className="size-3" />
      </Button>
    </div>
  );
}

export default CartItemQuantity;
