"use client";

import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";
import useSWR from "swr";

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = () => {
  const { mutate } = useSWR("posts");
  const [search, setSearch] = useState("");

  const hadlerSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    mutate(posts);
  };

  return (
    <form className="search" onSubmit={hadlerSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="search-input"
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
};

export { PostSearch };
