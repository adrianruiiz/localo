// app/(dashboard)/dashboard/page.tsx (Server Component)
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { DashboardClient } from './dashboard-client'


export default async function DashboardHome() {
  
  const session = await auth.api.getSession({
    headers: await headers()
  })

  // Proteger la ruta - redirigir si no está autenticado
  if (!session) {
    redirect('/login')
  }

   return (
    <DashboardClient 
          user={{
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        createdAt: session.user.createdAt
      }}
    />
  )
}