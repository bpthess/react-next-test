import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  // const OnCLickHandler = () => {
  //   router.push("/clients/max/projecta");
  // };

  const OnCLickHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  };
  console.log(OnCLickHandler);

  return (
    <>
      <div>Client Project Page</div>
      <button onClick={OnCLickHandler}>Click</button>
    </>
  );
};

export default ClientProjectPage;
