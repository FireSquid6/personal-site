import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="mb-2">Not Found</h2>
      <p>Could not find requested resource.</p>
      <p>
        <Link href="/" className="no-underline">
          Back Home
        </Link>
      </p>
    </div>
  )
}
