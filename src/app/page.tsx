import QuizzCard from "@/components/QuizzCard";
import Image from "next/image";
import quizzData from "@/data/quizzData.json";
import { GetStaticProps } from "next";
import prisma from "@/lib/prisma";



async function getQuizzList() {
  const quizzList = await await prisma.quizz.findMany({
    where: { published: true },
  });
  return quizzList;
}

export default async function Home() {
  const quizzList = await getQuizzList();
  console.log("quizzez" + quizzList);
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
