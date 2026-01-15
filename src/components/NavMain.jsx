import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import NavMainItem from './NavMainItem'

export default function NavMain({ blok }) {
  return (
    <nav {...storyblokEditable(blok)} className="bg-gray-100 p-4">
      <ul className="flex gap-6">
        {blok.menu_items?.map((item) => (
          <NavMainItem key={item._uid} blok={item} />
        ))}
      </ul>
    </nav>
  )
}
