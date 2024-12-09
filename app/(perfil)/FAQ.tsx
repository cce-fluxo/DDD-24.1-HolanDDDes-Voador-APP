import Pergunta from "@/components/Pergunta";
import { View } from "react-native";

export default function FAQ(){
    return(
        <View className="bg-white w-screen h-screen flex items-center ">
            <Pergunta titulo="Como funcionam os cancelamentos?" texto="Vamos cuidar do seu cancelamento rapidamente: se o motivo for uma mudança nos planos, vá até Viagens para cancelar a reserva. Você verá o valor do reembolso durante o processo de cancelamento."/>
            <Pergunta titulo="Como pagar a viagem?" texto="Você está com tudo pronto para reservar, mas ainda falta pagar. A boa notícia é que aceitamos diferentes formas de pagamento, e as opções dependem apenas do país em que a conta do pagamento está localizada. Se você precisar dividir seu pagamento, tem essa opção, desde que a estadia seja elegível e haja uma opção de plano de pagamento no checkout."/>
            <Pergunta titulo="Como encontrar o status da minha reserva como hóspede?" texto="Ao fazer uma Reserva Instantânea, ela é confirmada automaticamente. Se você enviou um pedido de reserva ao anfitrião, ele terá 24 horas para responder. Se ele recusar ou não responder, não se preocupe: você não precisa pagar nada e pode reservar outra acomodação. De qualquer forma, verifique se a sua conta está atualizada."/>
        </View>
    )
}