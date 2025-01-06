import Image from "next/image";

const LNG = ["FR", "EN", "DE", "NL", "IT", "ES"];

const Navbar = () => {
  return (
    <>
      {/* Barre de navigation */}
      <nav className="bg-gray-900 text-white w-full">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Forfait de Post-Stationnement (FPS)"
              width={150}
              height={50}
              priority
            />
          </div>
          {/* Langues */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {LNG.map((lng) => (
              <div
                key={lng}
                className="cursor-pointer hover:underline hover:text-blue-400 transition duration-300"
                style={{
                  borderBottom: lng === "FR" ? "2px solid white" : "none",
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
        className="relative flex items-center justify-center w-full h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white p-6">
          <h1 className="text-3xl font-bold mb-4">
            Paiement sécurisé pour le Forfait de Post-Stationnement (FPS)
          </h1>
          <p className="text-lg">
            Ce site vous permet de régler votre avis de paiement pour le Forfait de Post-Stationnement (FPS) en ligne de manière sécurisée. Veuillez effectuer le paiement dans les délais indiqués pour éviter toute majoration.
          </p>
        </div>
      </div>

      {/* Pied de page */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Ce site est géré par le service de traitement des contraventions. Tous droits réservés.
          </p>
          <p className="text-sm mt-2">
            Conçu pour vous offrir une expérience simple, rapide et sécurisée.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
