import { NextPage } from "next";
import { useRouter } from "next/router";

const GameCommunityTabDetailPage: NextPage<{}> = () => {
  const router = useRouter();

  return <div>게임사 커뮤니티 탭 디테일 : {router.query.postId}</div>;
};

export default GameCommunityTabDetailPage;
