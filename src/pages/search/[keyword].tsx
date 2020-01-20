import { NextPage } from "next";
import { useRouter } from "next/router";

const SearchPage: NextPage = () => {
  const router = useRouter();

  return <div>Search ID: {router.query.keyword} </div>;
};

export default SearchPage;
