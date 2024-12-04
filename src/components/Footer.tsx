"use client";

import { Separator } from "./ui/separator";

type Props = {};

const FOOTER_LINKS = [
  {
    title: "Informations",
    links: [
      { title: "Aide sur le site", url: "" },
      {
        title:
          "Confidentialité / Informations personnelles / Cookies et autres traceurs",
        url: "",
      },
      { title: "Sécurité informatique", url: "" },
      { title: "Glossaire", url: "" },
      { title: "Foire aux questions", url: "" },
    ],
  },
  {
    title: "Qualité de service",
    links: [
      {
        title: "Accessibilité : Conformité partielle",
        url: "",
      },
      { title: "Les engagements de la DGFlP", url: "" },
    ],
  },
  {
    title: "Autres sites",
    links: [
      {
        title:
          "ANTAÏ : Agence nationale de traitement automatisé des infractions",
        url: "",
      },
      {
        title: "Forfait post-stationnement",
        url: "",
      },
    ],
  },
];

const Footer = ({}: Props) => {
  return (
    <footer
      id="footer-tai"
      className="bg-[#414856] w-full mt-10 flex flex-col text-white"
    >
      <div className="flex flex-col gap-4 md:flex-row justify-around my-5 px-4 ">
        {FOOTER_LINKS.map((item) => (
          <div className="block-item">
            <h3 className=" border-b-white border-b-2 text-2xl mb-5">
              {item.title}
            </h3>
            <ul>
              {item.links.map((link) => (
                <li>
                  <a href={link.url} className="underline text-lg">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex p-4 items-center justify-around bg-[#363C48]">
        <a
          href="https://x.com/?lang=fr"
          rel="noopener"
          target="_blank"
          className="underline link-external"
          title="Nouvelle fenêtre"
        >
          Service-public.fr
        </a>
        <Separator orientation="vertical" />
        <a
          href="https://x.com/?lang=fr"
          rel="noopener"
          target="_blank"
          className="link-external underline"
          title="Legifrancefr - Nouvelle fenêtre"
        >
          Legifrance gouv fr
        </a>
      </div>
      <div className="flex items-center justify-center p-8 bg-[#272729] text-lg ">
        <p>
          {" "}
          © Direction générale des Finances publiques -{" "}
          <a
            id="mention-legales"
            className="xt underline"
            href="https://x.com/?lang=fr"
          >
            Mentions légales
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
