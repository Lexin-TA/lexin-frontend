import Link from "next/link"

interface BasisCardProps {
    documentId: string
    title: string
    description: string
    enactedDate?: Date
} 
function BasisCard({
    documentId,
    title,
    description,
    enactedDate
}: BasisCardProps) {
    return (
        <article className="flex flex-col items-start mb-8">
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

export default function LawBasisContent() {
    return (
        <div className="pl-8 pt-8">
            <BasisCard 
                documentId="uud-1945"
                title="Undang-Undang Dasar 1945"
                description="Undang-Undang Dasar 1945"
            />
            <BasisCard 
                documentId="uud-1945"
                title="Undang-Undang Nomor 3 Tahun 1999"
                description="Tentang Kesehatan Karyawan"
            />
        </div>
    )
}