import React from 'react'

export default function Cover({ src }) {
  src = src ? src : "https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"

  return (
    // <img className="h-60 sm:h-60 lg:h-80 w-full object-cover" src="https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80" alt="cover" />
    
    <img className="h-60 lg:h-80 w-full object-cover" 
      src={src} 
      alt="cover" 
    />

  )
}
