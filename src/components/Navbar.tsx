import Image from "next/image";

const LNG = ["FR", "EN", "DE", "NL", "IT", "ES"];

const Navbar = () => {
  return (
    <>
      {/* Barre de navigation */}
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo agrandi */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Forfait de Post-Stationnement (FPS)"
              width={220} // Agrandi
              height={75} // Agrandi
              priority
            />
          </div>
          {/* Langues */}
          <div className="flex gap-4 mt-4 md:mt-0 text-gray-800">
            {LNG.map((lng) => (
              <div
                key={lng}
                className="cursor-pointer hover:underline hover:text-blue-600 transition duration-300"
                style={{
                  borderBottom: lng === "FR" ? "2px solid black" : "none",
                }}
              >
                {lng}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Bannière */}
      <div
        className="relative flex items-center justify-center w-full h-[60vh] md:h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white p-6 pt-16">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Paiement sécurisé pour le Forfait de Post-Stationnement (FPS)
          </h1>
          <p className="text-lg">
            Ce site vous permet de régler votre avis de paiement pour le Forfait
            de Post-Stationnement (FPS) en ligne de manière sécurisée. Veuillez
            effectuer le paiement dans les délais indiqués pour éviter toute
            majoration.
          </p>

          {/* Alerte de paiement */}
          <div className="mt-6 bg-red-600 text-white rounded-lg p-6 max-w-lg mx-auto">
            {/* Titre centré */}
            <h2 className="text-lg font-bold text-center">
              ⚠️ Ticket en attente de règlement
            </h2>

            {/* Contenu aligné à gauche */}
            <div className="text-left mt-2">
              <p>
                <strong>Montant :</strong> 35,00 euros
              </p>
              <p className="mt-1">
                <strong>N° de télépaiement :</strong> 91815017 3001890 021 663 19
              </p>
              <p className="mt-1">
                <strong>Clé :</strong> 72 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pied de page */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm">
            Plateforme officielle sécurisée pour le traitement des contraventions
          </p>
          <p className="text-sm mt-2">
            Tous droits réservés © 2025.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
