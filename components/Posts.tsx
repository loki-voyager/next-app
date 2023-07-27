import Link from "next/link";

type Props = {
  posts: any[];
};

const Posts = ({ posts }: Props) => {
  return (
    <ul className="list-col">
      {posts.map((post: any) => (
        <Link href={`/blog/${post.id}`} key={post.id} className="button">
          {post.title}
        </Link>
      ))}
    </ul>
  );
};

export { Posts };
