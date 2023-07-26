import Link from "next/link"
import { TwitterIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="flex justify-center mt-24">
      <div className="pt-16 space-y-12">
        <nav className="text-sm font-medium text-center space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; Jonathan Deiss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
