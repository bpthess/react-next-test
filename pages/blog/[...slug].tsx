import { useRouter } from "next/router";
import React from "react";

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>Blog Post Page</div>;
};

export default BlogPostPage;
