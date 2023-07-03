import Link from "next/link";
import Date from "@/components/Date/Date";

import { getSortedPostsData } from "@/lib/posts";

type AllPostsData = {
  date: string;
  title: string;
  id: string;
}[];

export default function Posts() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <main>
      <section>
        <h2>Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <h4>
                <Link href={`/posts/${id}`}>{title}</Link>
              </h4>
              {/* <br /> */}
              <small className="text-gray-500 font-medium">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
