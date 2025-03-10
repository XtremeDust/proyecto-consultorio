import Image from "next/image";
import Nav from "@/components/nav";
import Main from "@/components/main/main"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      <Nav className="fixed top-0 left-0 w-full z-50 bg-emerald-900 border-b shadow-md" />
      
      <div className="h-[80px] md:h-32 lg:h-32 xl:h-[80px]" />
      <main className="flex-grow flex items-center justify-center">
          <Main/>
      </main>
      <Footer/>
    </div>
  );
}
