import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { ArrowRightIcon } from "lucide-react"

// format(parseISO(post.date), "MMMM dd, yyyy")
// •
export default function Posts() {
  return (
    <div>
      {allPosts.map((post) => (
        <article key={post._id} className="my-12">
          <div className="bg-bg_dark border border-fg rounded-xl p-8">
            <h2 className="m-0">
              <Link href={post.slug} className="no-underline">
                {post.title}
              </Link>
            </h2>
            <div className="space-x-1 text-xs">
              <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
              <span>{` • `}</span>
              <span>{post.readingTime.text}</span>
            </div>
            {post.description && <div className="m-4">{post.description}</div>}
            <Link
              href={post.slug}
              className="inline-flex items-center px-3 py-2 text-sm space-x-2 no-underline font-medium text-center text-fg bg-red1 rounded-lg hover:bg-red hover:text-fg transition-all hover:translate-x-2"
            >
              <span>Read more</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
