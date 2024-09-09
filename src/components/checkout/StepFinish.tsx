import { useCheckoutStore } from "@/stores/CheckoutStore";

import { Button } from "../ui/button";
import { useGenerateMessage } from "@/lib/generateMessage";

function StepFinish() {
  const { name } = useCheckoutStore((state) => state);

  const message = useGenerateMessage();

  const linkZap = `https://wa.me//${
    import.meta.env.VITE_ZAP
  }?text=${encodeURIComponent(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong className="capitalize">{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso atendente
        irá te guiar no restante do atendimento.
      </p>
      <Button>
        <a target="_blank" href={linkZap}>
          Enviar para o Whatsapp
        </a>
      </Button>
    </div>
  );
}

export default StepFinish;
