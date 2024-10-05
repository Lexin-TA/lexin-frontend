import { useEffect } from "react"
import AIAnswerSection from "./AIAnswerSection"
import DatabaseSearchResultSection from "./DatabaseSearchResultSection"
import useRequest from "@/networks/useRequest"
import SearchResultResponseType from "@/networks/response-type/SearchResultResponseType"
import { LEGAL_DOCUMENT_ENDPOINTS } from "@/networks/endpoints"

interface SearchResultPageProps {
    searchQuery: string
}
export default function SearchResultPage({searchQuery} : SearchResultPageProps) {
    const { data, loading } = useRequest<SearchResultResponseType>(LEGAL_DOCUMENT_ENDPOINTS.GET.searchLegalDocument(searchQuery as string))

    useEffect(() => {
        if (data) {
            console.log("search results")
            console.log(data)
        }
    }, [data])
 
    return (
        <div>
            <AIAnswerSection />
            <DatabaseSearchResultSection loading={loading} searchResults={data?.hits ?? []} />
        </div>
    )    
}