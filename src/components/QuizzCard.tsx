import Link from 'next/link';
import prisma from '@/lib/prisma';

export interface QuizzCardProps {
    id: string;
    title: string;
    description: string | null;
}

export default function QuizzCard({ quizz }: { quizz: QuizzCardProps }) {

    return (
        <Link className="p-4 m-2 bg-primary/20 rounded-lg shadow-md w-sm flex flex-col items-center hover:bg-accent/40" href={`/quizz${quizz.id}`}>
            <h2 className="text-xl font-semibold text-black">{quizz.title}</h2>
            <p className="text-gray-800">{quizz.description}</p>
        </Link>
    );
}