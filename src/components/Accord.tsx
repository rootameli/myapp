"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Separator } from "./ui/separator";
import Link from "next/link";

type Props = {};

const ACCORD_DATA = [
  {
    title: `Paiement ou consignation d'une Amende Forfaitaire`,
    content:
      "Le numéro de télépaiement et la clé se situent sur la carte de paiement. Le numéro de télépaiement est constitué de 4 blocs de 4,4,4 et 2 chiffres ou 5 blocs de 4,4,4,4 et 2 chiffres et la clé sur sa droite sur 2 chiffres.",
  },
  {
    title: `Paiement ou consignation d'une Amende Forfaitaire Majorée`,
    content:
      "Pour un forfait de post-stationnement majoré, suivez les instructions de paiement de l'avis ou consignez le montant majoré en 45 jours. Le numéro de télépaiement et la clé se situent sur la carte de paiement. Le numéro de télépaiement est constitué de 4 blocs de 4,4,4 et 2 chiffres ou 5 blocs de 4,4,4,4 et 2 chiffres et la clé sur sa droite sur 2 chiffres.",
  },
  {
    title: `Paiement ou consignation d'une Amende Forfaitaire Délictuelle`,
    content:
      "Dans le cas d'une amende forfaitaire délictuelle, il vous appartient de choisir entre le règlement de l'amende selon les modalités précisées dans l'avis de contravention ou son consignement. L'option de consignation doit être exercée dans un délai de 30 jours à partir de la réception de l'avis. Le numéro de télépaiement et la clé se situent sur la carte de paiement. Le numéro de télépaiement est constitué de 4 blocs de 4,4,4 et 2 chiffres ou 5 blocs de 4,4,4,4 et 2 chiffres et la clé sur sa droite sur 2 chiffres.",
  },
  {
    title: `Paiement ou consignation d'un Forfait de Post-Stationnement Majoré`,
    content:
      "Pour un forfait de post-stationnement majoré, suivez les instructions de paiement de l'avis ou consignez le montant majoré en 45 jours. Le numéro de télépaiement et la clé se situent sur la carte de paiement. Le numéro de télépaiement est constitué de 4 blocs de 4,4,4 et 2 chiffres ou 5 blocs de 4,4,4,4 et 2 chiffres et la clé sur sa droite sur 2 chiffres.",
  },
];

const Accord = ({}: Props) => {
  return (
    <div className="w-[80%]">
      <div className="p-4 bg-gray-100 text-2xl text-[#0B6BA8]">
        Où trouver mon numéro de télépaiement et la clé ?
      </div>
      <Accordion type="single" collapsible>
        {ACCORD_DATA.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="p-4 underline cursor-pointer bg-gray-100 text-2xl text-[#0B6BA8] mt-4 ">
        <Link href="">
          Accéder aux autres questions
        </Link>
      </div>
      <div className="p-4 bg-gray-100 text-2xl text-[#0B6BA8] mt-4">
        Les autres moyens de payer à distance :
      </div>
      <div className="border p-4 flex items-center justify-around">
        <div className="flex gap-2 items-center justify-center ">
          <Image
            src="/moyen-app.svg"
            width={30}
            height={30}
            alt=""
          />
          PAR APPLI MOBILE
        </div>
        <Separator orientation="vertical" />
        <div className="flex gap-2 items-center justify-center">
          <Image
            src="/svgexport-1.svg"
            width={30}
            height={30}
            alt=""
          />
          PAR TÉLÉPHONE
        </div>
      </div>
    </div>
  );
};

export default Accord;
