import Image from "next/image";

const LNG = ["FR", "EN", "DE", "NL", "IT", "ES"];

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-around w-full h-[20vh]">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="logo"
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
          <h2
            className="text-xl font-bold text-white border-b-1 p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          >
            Bonjour, vous êtes sur le site de télépaiement du forfait de post-stationnement
          </h2>
          <h2
            className="text-sm text-white p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
Ce site est entièrement sécurisé. Vous pouvez y régler tout avis de paiement du forfait de post-stationnement (FPS) qui vous a été adressé par e-mail.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
