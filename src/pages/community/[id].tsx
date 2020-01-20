import { NextPage } from "next";
import { useRouter } from "next/router";

const UserCommunityPage: NextPage<{}> = () => {
  const router = useRouter();

  return <div>유저 커뮤니티 페이지 ID: {router.query.id}</div>;
};

export default UserCommunityPage;
