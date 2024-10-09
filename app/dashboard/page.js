'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
const Dashboard = () => {
  const { data: session } = useSession()
  if(!session){
    const router=useRouter();
    router.push('/login');
  }
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
