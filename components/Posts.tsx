"use client";

import { getAllPosts } from "@/services/getPosts";
import Link from "next/link";
import useSWR from "swr";

const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
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
