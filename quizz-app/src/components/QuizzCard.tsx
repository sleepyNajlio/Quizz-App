import Link from 'next/link';

interface QuizzCardProps {
    id: string;
    title: string;
    description: string;
}

export default function QuizzCard({ quizz }: { quizz: QuizzCardProps }) {
    return (
        <div className="p-4 m-2 bg-primary/20 rounded-lg shadow-md w-sm flex flex-col items-center">
            <h2 className="text-xl font-semibold text-black">{quizz.title}</h2>
            <p className="text-gray-800">{quizz.description}</p>
        </div>
    );
}