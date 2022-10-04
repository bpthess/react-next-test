import { useRouter } from "next/router";
import React from "react";

const SelectClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>Select Client Project Page</div>;
};

export default SelectClientProjectPage;
