import Head from "next/head";

import { api } from "~/utils/api";
import Banner from "~/components/Banner";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Usta Sushi</title>
        <meta
          name="Usta sushi bursadaki en lezzetli sushi yapan yeridir."
          content="TESLİMAT NOKTALARIMIZ: METRO İSTASYONLARI, HEYKEL, MUDANYA, DEMİRTAŞ, GÖRÜKLE YERLEŞİM. YOĞUNLUK SEBEBİYLE SİPARİŞİNİZİ LÜTFEN ÖNCEKİ GÜNDEN VERİNİZ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center  bg-[#fbe9df]">
        <Navbar />
        <Banner />
        <Footer />
      </main>
    </>
  );
}
