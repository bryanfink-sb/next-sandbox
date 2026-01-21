import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'
import Image from 'next/image'

export default function Hero({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative flex items-center justify-center min-h-[60vh] bg-gray-900 text-white"
    >
      {blok.background_image?.filename && (
        <Image
          src={blok.background_image.filename}
          alt={blok.background_image.alt || ''}
          fill
          className="object-cover opacity-60"
          priority
        />
      )}

      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {blok.headline}
        </h1>

        {blok.subheadline && (
          <p className="text-lg md:text-xl mb-8">
            {blok.subheadline}
          </p>
        )}

        <div className="flex gap-4 justify-center flex-wrap">
          {blok.buttons?.map((nestedBlok) => (
            <StoryblokComponent
              key={nestedBlok._uid}
              blok={nestedBlok}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
