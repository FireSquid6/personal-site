import { getSortedPostsData } from "@/lib/posts";
import PostSummary from "@/components/PostSummary/PostSummary";

type AllPostsData = {
  date: string;
  title: string;
  description: string;
  id: string;
}[];

export default function Posts() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {allPostsData.map(({ id, date, title, description }) => (
          <PostSummary
            key={id}
            id={id}
            date={date}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </>
  );
}
