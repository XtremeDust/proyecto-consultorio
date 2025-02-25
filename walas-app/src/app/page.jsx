import Image from "next/image";
import Nav from "@/components/nav";
import Main from "@/components/main"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      <Nav/>
      <main>
        <div className="m-2 p-2">
          <Main/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
