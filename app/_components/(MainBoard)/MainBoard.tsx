import React from 'react'
import Card from './Card'

export default function MainBoard() {
  const columns = ['To Do', 'In Progress', 'Done']

  return (
    <div className="flex items-center justify-between gap-4 p-4">
      {columns.map((title) => (
        <div key={title} className="h-screen w-full rounded-2xl bg-gray-50 p-4">
          <h2 className="h-14 text-sm font-bold md:text-base">{title}</h2>
          <Card />
        </div>
      ))}
    </div>
  )
}
