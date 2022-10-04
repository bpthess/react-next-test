import { useRouter } from "next/router";
import React from "react";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>Client Project Page</div>;
};

export default ClientProjectPage;
