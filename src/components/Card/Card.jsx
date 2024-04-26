import React from 'react'
import { Pill } from '../Pill/Pill'

export const Card = ({title, body, tags, children}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {body}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags && tags.map(tag => (
          <Pill key={`${title}-${tag}`} text={tag} type={tag} />
        ))}
      </div>
      {children}
    </div>
  )
}
