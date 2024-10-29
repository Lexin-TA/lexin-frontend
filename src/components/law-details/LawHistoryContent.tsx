import Link from "next/link"

interface HistoryCardProps {
    documentId: string
    historyType: string
    title: string
    description: string
    enactedDate?: Date
}
function HistoryCard({
    documentId,
    historyType,
    title,
    description,
    enactedDate
}: HistoryCardProps) {
    return (
        <article className="flex flex-col items-start mb-5">
            <div className="mb-2 text-sm text-bright-blue font-semibold rounded-lg bg-light-gray py-1 pl-3 pr-1 border-l-4 border-solid border-bright-blue">
                {historyType}
            </div>
            <Link 
                href={`/legal-docs/${documentId}`} 
                className="text-dark-navy-blue font-bold text-lg"
            >
                {title}
            </Link>
            <div className="font-semibold text-sm text-darkGrayText">
                {description}
            </div>
        </article>
    )
} 

export default function LawHistoryContent() {
    return (
        <div className="">
            <div className="pl-8 pt-10">
                <HistoryCard 
                    documentId={'utf6t677i1e3d7'}
                    historyType={'Mencabut sebagian oleh'}
                    title={'Undang-Undang Nomor 1 Tahun 2024'}
                    description={'sdfghjklkjhgfdfghjkjhgfdsdfghjkjhgfdsdfghjkjhgfdsdfghjk'}
                />
                <HistoryCard 
                    documentId={'u3f6t677i1e3d7'}
                    historyType={'Mencabut sebagian oleh'}
                    title={'Undang-Undang Nomor 2 Tahun 2024'}
                    description={'sdfghjklkjhgfdfghjkjhgfdsdfghjkjhgfdsdfghjkjhgfdsdfghjk'}
                />
            </div>
        </div>
    )
}