import { useRouter } from "next/router";

const DynamicPortfolioPage = () => {
  const router = useRouter();
  console.log(router.asPath);
  console.log(router.pathname);
  console.log(router.query);

  return <div>Dynamic Portfolio Page</div>;
};

export default DynamicPortfolioPage;
