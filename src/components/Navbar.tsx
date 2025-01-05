import Image from "next/image";

const LNG = ["FR", "EN", "DE", "NL", "IT", "ES"];

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between w-full h-[20vh] px-4">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Service de gestion du Forfait de Post-Stationnement (FPS)"
            width={370}
            height={40}
            priority
          />
        </div>
        <div className="flex items-center gap-4">
          {LNG.map((lng) => (
            <div
              className="cursor-pointer text-lg font-medium"
              key={lng}
              style={{
                borderBottom: lng === "FR" ? "2px solid black" : "none",
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
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-4 py-6">
          <h1
            className="text-2xl font-bold text-white py-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              borderRadius: "8px",
            }}
          >
            Plateforme sécurisée pour le Forfait de Post-Stationnement (FPS)
          </h1>
          <p
            className="text-md text-white py-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "8px",
            }}
          >
            Accédez à une plateforme simple et sécurisée pour gérer vos démarches
            liées au Forfait de Post-Stationnement (FPS). Retrouvez toutes vos
            informations en quelques clics.
          </p>
        </div>
      </div>
      <footer className="text-center text-sm text-gray-600 py-4">
        Service officiel de gestion du Forfait de Post-Stationnement (FPS).
        Tous droits réservés.
      </footer>
    </>
  );
};

export default Navbar;
