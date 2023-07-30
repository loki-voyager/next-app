import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";

export default function Blog() {

  return (
    <div className="blog">
      <div>
        <h1>Blog page</h1>
      </div>
      <PostSearch />
      <Posts />
    </div>
  );
}
