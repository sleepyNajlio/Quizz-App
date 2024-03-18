import QuizzCard from "@/components/QuizzCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <header className="m-3 flex justify-center items-center h-66">
          {/* <h1 className=" text-3xl">Quizz App</h1> */}
          <Image src="/logo.png" alt="quizz" width={350} height={350} />
        </header>
        <section id="quizz-list">
          <QuizzCard
            quizz={{
              id: "1",
              title: "Quizz 1",
              description: "This is the first quizz",
            }}
          />


        </section>
      </main>
    </>
  );
}
