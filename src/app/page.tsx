import Footer from "@/components/Footer";
import Informations from "@/components/Informations";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <Navbar />

      <Informations />
      <Footer />
    </main>
  );
}
