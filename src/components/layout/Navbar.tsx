"use client"

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import LexinLogo from "./LexinLogo";
import { getCookie } from "cookies-next";
import UserDataResponseType from "@/networks/response-type/UserDataResponseType";

export default function Navbar() {
    // Hooks
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    // Page Conditions
    const inSearchPage = pathname === '/search'
    const searchQueryExists = (searchParams.get('q') !== null)
    const inSearchResultPage = inSearchPage && searchQueryExists
    const showLexinLogo = inSearchResultPage || pathname.startsWith('/legal-doc') 

    // States
    const [loggedInAs, setLoggedInAs] = useState<UserDataResponseType | null>(null)
    const [search, setSearch] = useState<string>(searchParams.get('q') as string)
    
    // User Data
    useEffect(() => {
      const fromCookie = getCookie('user_data')
      const userData = fromCookie ? JSON.parse(fromCookie) as UserDataResponseType : null
      setLoggedInAs(userData)
    }, [pathname, searchParams])
    
    function onSubmitSearchForm() {
      router.push(`/search?q=${encodeURIComponent(search)}`)
    }

    return (
      <nav className="w-screen bg-dark-navy-blue h-16 fixed z-50">
        <div className={`flex flex-row justify-between items-center h-full px-16`}>
          {showLexinLogo 
          ?
          <Link href="/search">
            <LexinLogo /> 
          </Link>

          : <div />
          }
          {inSearchResultPage && 
            <form onSubmit={onSubmitSearchForm}>
              <input 
                className="w-[600px] p-2 rounded-xl -translate-x-36" 
                value={search} 
                onChange={(event) => setSearch(event.currentTarget.value)}
              />
            </form>
          }
          <Link href={loggedInAs ? "/logout" : "/login"} className="flex flex-row items-center"> 
            <Icon icon="mdi:account-circle" style={{fontSize: '40px', color: 'white'}} />
            <div className="text-white font-semibold ml-2">
              {
                loggedInAs 
                ?
                  <div className="flex flex-col items-start">
                    <p>
                      {`${loggedInAs.fullname}`} 
                    </p>
                    <p className="text-xs">
                      Click here to logout
                    </p>
                  </div> 
                : 
                  <p>Login</p>
              }
            </div>
          </Link>
        </div>
      </nav>
    )
}