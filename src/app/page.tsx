import QuizzCard from "@/components/QuizzCard";
import Image from "next/image";
import quizzData from "@/data/quizzData.json";


const quizzList = quizzData.quizzList;

export default function Home() {

  return (
    <>
      <main>
        <header className="m-3 flex justify-center items-center h-66">
          <Image src="/logo.png" alt="quizz" width={350} height={350} />
        </header>
        <section id="quizz-list" className="flex-col gap-2 ">
          {quizzList.map((quizz) => (
            <QuizzCard key={quizz.id} quizz={quizz} />
          ))}
        </section>
      </main>
    </>
  );
}
