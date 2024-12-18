import { useForm } from "react-hook-form";
import { InformationProps, infoSchema } from "./Informations";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaLock } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import Loader from "./Loader";

type Props = {
  setStep: (step: number) => void;
  setData: (data: InformationProps) => void;
};

function InfoForm({ setData, setStep }: Props) {
  const form = useForm<InformationProps>({
    resolver: zodResolver(infoSchema),
  });

  const onSubmit = (data: InformationProps) => {
    setData(data);
    setStep(2);
  };

  return (
    
    <Form {...form}>
      <form
        className="my-8 flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex gap-4 flex-col md:flex-row">
                  <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Prénom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>
        <FormField
          control={form.control}
          name="adressPostale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse</FormLabel>
              <FormControl>
                <Input placeholder="Adresse" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4 flex-col md:flex-row">
          <FormField
            control={form.control}
            name="ville"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ville</FormLabel>
                <FormControl>
                  <Input placeholder="Ville" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="codePostal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code Postal</FormLabel>
                <FormControl>
                  <Input placeholder="Code Postal" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
<div className="flex gap-4 flex-col md:flex-row">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="Téléphone" {...field} />
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

export default InfoForm;
