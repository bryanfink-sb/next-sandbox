import Link from "next/link"

export default function ArticleCard({ blok }) {
  const article = blok.article?.content

  if (!article) return null

  return (
    <article className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow">
      {/* Article title */}
      <h3 className="text-2xl font-bold mb-2">{article.title}</h3>

      {/* Optional excerpt */}
      {blok.show_excerpt && (
        <p className="text-gray-700 mb-4">{article.excerpt}</p>
      )}

      {/* Link to article page */}
      <Link href={`/${article.full_slug}`} passHref>
        <a className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Read More
        </a>
      </Link>
    </article>
  )
}
