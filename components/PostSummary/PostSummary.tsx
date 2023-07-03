import Date from "@/components/Date/Date";
import Link from "next/link";

export interface PostSummaryProps {
  id: string;
  date: string;
  title: string;
  description: string;
}

export default function PostSummary({
  id,
  date,
  title,
  description,
}: PostSummaryProps) {
  return (
    <li key={id} className="bg-bg_dark p-4 m-2 rounded-lg">
      <h2>
        <Link className="transition-all" href={`/posts/${id}`}>
          {title}
        </Link>
      </h2>
      <small className="text-fg_gutter font-medium m-0">
        <Date dateString={date} />
      </small>
      <p className="mt-3">{description}</p>
    </li>
  );
}
