import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import Link from 'next/link'

export default function ArticleCard({ blok }) {
  const href =
    blok.link?.linktype === 'story'
      ? `/${blok.link.cached_url}`
      : blok.link?.url

  return (
    <article
      {...storyblokEditable(blok)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
    >
      {blok.image?.filename && (
        <div className="relative h-48">
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || ''}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {blok.title}
        </h3>

        {blok.excerpt && (
          <p className="text-gray-600 mb-4">
            {blok.excerpt}
          </p>
        )}

        {href && (
          <Link
            href={href}
            className="text-blue-600 font-medium hover:underline"
          >
            Read more →
          </Link>
        )}
      </div>
    </article>
  )
}
