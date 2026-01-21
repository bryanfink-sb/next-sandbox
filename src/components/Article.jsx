import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import RichText from '@/components/RichText'

export default function Article({ blok }) {
  return (
    <article
      {...storyblokEditable(blok)}
      className="max-w-3xl mx-auto px-6 py-16"
    >
      <h1 className="text-4xl font-bold mb-4">
        {blok.title}
      </h1>

      {(blok.author || blok.published_date) && (
        <div className="text-sm text-gray-500 mb-8">
          {blok.author && <span>{blok.author}</span>}
          {blok.author && blok.published_date && ' • '}
          {blok.published_date && (
            <span>{blok.published_date}</span>
          )}
        </div>
      )}

      {blok.featured_image?.filename && (
        <div className="relative w-full h-64 mb-10">
          <Image
            src={blok.featured_image.filename}
            alt={blok.featured_image.alt || ''}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {blok.content && (
        <div className="prose prose-lg">
          <RichText document={blok.content} />
        </div>
      )}
    </article>
  )
}
