import { JobProvider } from "../contexts/JobContext";
import Navbar from "@/components/navbar";
import InputBox from "../components/filter/InputBox";
import CardList from "../components/card/CardList";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <JobProvider>
      <main className="flex min-h-screen flex-col items-center justify-start text-black">
        <Navbar />
        <div className="container mx-auto bg-cyan-grayBg px-4 pb-8 sm:px-4 lg:px-0 md:px-0">
          <InputBox />
          <CardList />
        </div>
        <Footer />
      </main>
    </JobProvider>
  );
}
