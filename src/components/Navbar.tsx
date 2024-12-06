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
            Service de télépaiement du Forfait de Post-Stationnement (FPS)
          </h1>
          <h2
            className="text-sm text-white p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            Rappel avant majoration : Veuillez régler votre amende de stationnement dans les délais impartis.
            En cas de non-paiement de cet avis, une majoration de 125,00 EUR sera appliquée.<br /><br />
            Ce site est entièrement sécurisé. Vous pouvez régler par carte bancaire (payer ou consigner) un avis de paiement du forfait de post-stationnement (FPS).<br />
          </h2>
          <div className="bg-red-600 text-white p-4 mt-4 mx-auto max-w-xl rounded">
            <div className="font-bold mb-2">⚠️ Vous avez un ticket en attente:</div>
            <ul className="list-disc list-inside text-left pl-2">
              <li>Montant forfaitaire avant majoration : 35,00€</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
