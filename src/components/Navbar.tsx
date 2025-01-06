import Image from "next/image";

const LNG = ["FR", "EN", "DE", "NL", "IT", "ES"];

const Navbar = () => {
  return (
    <>
      {/* Barre de navigation */}
      <nav className="flex flex-col md:flex-row items-center justify-between w-full h-[20vh] px-6 bg-gray-100 shadow-md">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Service FPS"
            width={200}
            height={50}
            priority
          />
        </div>
        <div className="flex items-center gap-6">
          {LNG.map((lng) => (
            <div
              className="cursor-pointer text-base font-medium hover:underline"
              key={lng}
              style={{
                borderBottom: lng === "FR" ? "2px solid #000" : "none",
              }}
            >
              {lng}
            </div>
          ))}
        </div>
      </nav>

      {/* Bannière */}
      <div
        className="flex flex-col items-center justify-center w-full min-h-[30vh] text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-70 text-white rounded-lg p-6">
          <h1 className="text-2xl font-bold">
            Bienvenue sur la plateforme officielle
          </h1>
          <p className="mt-4 text-lg">
            Simplifiez la gestion de vos démarches liées au Forfait de
            Post-Stationnement (FPS) grâce à notre plateforme en ligne.
          </p>
        </div>
      </div>

      {/* Informations complémentaires */}
      <section className="px-6 py-8 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800">
          À propos de ce service
        </h2>
        <p className="mt-4 text-gray-700">
          Ce site est dédié à la gestion des informations concernant le Forfait
          de Post-Stationnement (FPS). Vous pouvez consulter vos avis et
          accéder à des informations essentielles pour vos démarches. Notre
          plateforme sécurisée vous garantit une navigation en toute
          tranquillité.
        </p>
      </section>

      {/* Pied de page */}
      <footer className="text-center text-sm text-gray-600 py-4 bg-gray-200">
        <p>
          Service officiel du Forfait de Post-Stationnement (FPS). Tous droits
          réservés.
        </p>
        <p className="mt-2">
          Ce site respecte les normes de sécurité et de confidentialité en
          vigueur.
        </p>
      </footer>
    </>
  );
};

export default Navbar;
