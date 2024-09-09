import { useCartStore } from "@/stores/cartStore";
import { useCheckoutStore } from "@/stores/CheckoutStore";

export const useGenerateMessage = () => {
  const { name, address } = useCheckoutStore((state) => state);
  const { cart } = useCartStore((state) => state);

  const orderProducts = [];

  for (const item of cart) {
    orderProducts.push(`${item.quantity} x ${item.product.name}`);
  }

  return `***Dados do cliente:***
 Nome:${name}
 Endereço: Rua ${address.street}, Casa ${address.number} - (${
    address.complement
  })
 Bairro: ${address.district}, ${address.city}/${address.state.toUpperCase()} 
-----
***Pedido:***
${orderProducts.join("\n")}
  
  `;
};
