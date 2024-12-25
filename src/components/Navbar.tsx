import Image from "next/image";

const LNG = ["FR", "EN", "DE", "NL", "IT", "ES"];

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-around w-full h-[20vh]">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Forfait de Post-Stationnement (FPS)"
            width={370}
            height={40}
            priority
          />
        </div>
        <div className="flex items-center gap-2">
          {LNG.map((lng) => (
            <div
              className="cursor-pointer"
              key={lng}
              style={{
                borderBottom: lng === "FR" ? "1px solid black" : "",
              }}
            >
              {lng}
            </div>
          ))}
        </div>
      </nav>
      <div
        className="flex flex-col items-center justify-center w-full min-h-[20vh]"
        style={{
          background: "url(/banner.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center px-2 py-2">
          <h1
            className="text-xl font-bold text-white border-b-1 p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          >
            Paiement sécurisé pour le Forfait de Post-Stationnement (FPS)
          </h1>
          <h2
            className="text-sm text-white p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            Ce site vous permet de régler votre avis de paiement pour le Forfait de Post-Stationnement (FPS) en ligne de manière sécurisée. Veuillez effectuer le paiement dans les délais indiqués pour éviter toute majoration.
          </h2>
          <div className="bg-yellow-500 text-black p-4 mt-4 mx-auto max-w-xl rounded">
            <div className="font-bold mb-2">🛈 Informations importantes :</div>
            <ul className="list-disc list-inside text-left pl-4">
              <li>Montant initial avant majoration : 35,00€</li>
              <li>Délai de paiement : Voir les détails sur votre avis de paiement.</li>
            </ul>
          </div>
         
        </div>
      </div>
      <footer className="text-center text-sm text-gray-600 py-4">
        Ce site est géré par le service de traitement des contraventions. Tous droits réservés. Pour toute question, veuillez consulter notre <a href="" className="text-blue-500 underline">FAQ</a>.
      </footer>
    </>
  );
};

export default Navbar;
