import { Product } from "@/types/product";
import { Button } from "../ui/button";
import { ToastAction } from "../ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/stores/cartStore";

type Props = {
  item: Product;
};

function ProductItem({ item }: Props) {
  const { toast } = useToast();
  const { upsertCartItem } = useCartStore((state) => state);
  const handleAddButton = () => {
    upsertCartItem(item, 1);
    toast({
      title: "Adicionado ao carrinho!",
      description: item.name,
      action: <ToastAction altText="fechar">Fechar</ToastAction>,
    });
  };
  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
        <div className="mt-3 flex flex-col gap-2">
          <p>{item.name}</p>
          <p className="text-muted-foreground">R${item.price.toFixed(2)}</p>
          <Button variant="outline" onClick={handleAddButton}>
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
