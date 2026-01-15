import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import { Icon } from '@iconify/react'

export default function NavMainItem({ blok }) {
  return (
    <li {...storyblokEditable(blok)} className="flex items-center gap-2">
      {blok.icon?.icon && <Icon icon={blok.icon.icon} className="w-5 h-5" />}
      <a
        href={blok.link?.cached_url || '#'}
        className="text-gray-800 hover:text-blue-600 capitalize"
      >
        {blok.label}
      </a>
    </li>
  )
}
