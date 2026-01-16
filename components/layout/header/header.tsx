
import { auth } from '@/lib/auth'
import { headers } from "next/headers"
import { HeroHeaderClient } from './header-client'

export async function HeroHeader() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    
    return <HeroHeaderClient session={session} />
}