import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'


export default function Error404() {
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    },4000)
  },[])
  return (
    <div>
      <h1>Página não encontrada</h1>
    </div>
  )
}