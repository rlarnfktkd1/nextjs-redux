import { NextPage } from "next";
import { useRouter } from "next/router";

const EditorsPickPage: NextPage = () => {
  const router = useRouter();

  return <div>에디터스픽 ID: {router.query.id} </div>;
};

export default EditorsPickPage;
