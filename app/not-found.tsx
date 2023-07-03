import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Something bad happened :(</p>
      <Link href="/">back to safety</Link>
    </div>
  );
}
