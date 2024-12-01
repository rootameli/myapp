import { useForm } from "react-hook-form";
import { PaymentProps, schema } from "./Informations";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

type Props = {
  setStep: (step: number) => void;
  setData: (data: PaymentProps) => void;
};

function PaymentForm({ setData, setStep }: Props) {
  const form = useForm<PaymentProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: PaymentProps) => {
    setData(data);
    setStep(3);
  };

  return (
    <Form {...form}>
      <form
        className="my-8 flex flex-col gap-4 items-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Image src="/bank-cards.jpg" width={200} height={100} alt="" />
        <div className="flex gap-4 flex-col md:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titulaire de la carte</FormLabel>
                <FormControl>
                  <Input placeholder="Prénom et Nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numéro de carte</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Numéro de carte"
                    {...field}
                    type="text"
                    maxLength={19}
                    onChange={(e) => {
                      const value = e.target.value;
                      form.setValue(
                        "cardNumber",
                        value
                          .replace(/\s/g, "")
                          .replace(/(\d{4})/g, "$1 ")
                          .trim()
                      );
                    }}
                    className="border-2 border-gray-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <FormField
            control={form.control}
            name="expirationDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date d'expiration</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Date d'expiration (MM/AA)"
                    onChange={(e) => {
                      const value = e.target.value;
                      form.setValue(
                        "expirationDate",
                        value
                          .replace(/\//g, "")
                          .replace(/(\d{2})/, "$1/")
                          .trim()
                      );
                    }}
                    className="border-2 border-gray-300"
                    maxLength={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input placeholder="CVV" {...field} maxLength={3} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <button type="submit" className="bg-blue-950 text-white py-2 px-4 ">
            CONTINUER
          </button>
          <div className="flex items-center gap-2 mt-2">
            <FaLock />
            <p>Ce site est entièrement sécurisé</p>
          </div>
        </div>
      </form>
    </Form>
 
  );
}

export default PaymentForm;
