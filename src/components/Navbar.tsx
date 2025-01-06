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
              alt="Plateforme officielle"
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
            Accédez à des services fiables et sécurisés
          </h1>
          <p className="text-lg">
            Notre plateforme simplifie vos démarches et garantit votre
            tranquillité d'esprit grâce à des solutions innovantes.
          </p>
        </div>
      </div>

      {/* Section d'informations */}
      <section className="bg-white py-10 px-4">
        <div className="container mx-auto text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Pourquoi choisir notre plateforme ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Avantage 1 */}
            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Sécurité avant tout
              </h3>
              <p className="text-gray-600">
                Nous utilisons les normes les plus strictes pour protéger vos
                données et garantir une expérience en toute sérénité.
              </p>
            </div>
            {/* Avantage 2 */}
            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Facilité d'utilisation
              </h3>
              <p className="text-gray-600">
                Une interface intuitive et accessible à tous, que vous soyez
                débutant ou expérimenté.
              </p>
            </div>
            {/* Avantage 3 */}
            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Support réactif
              </h3>
              <p className="text-gray-600">
                Une équipe dédiée prête à répondre à vos questions et à
                résoudre vos problèmes rapidement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 Plateforme officielle. Tous droits réservés.
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
