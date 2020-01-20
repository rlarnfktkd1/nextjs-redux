import { NextPage } from "next";
import { useRouter } from "next/router";

const GameCompanyCommunityPage: NextPage<{}> = () => {
  const router = useRouter();

  return <div>게임사 커뮤니티 페이지 ID: {router.query.id}</div>;
};

export default GameCompanyCommunityPage;
