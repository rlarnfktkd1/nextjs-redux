import { NextPage } from "next";
import { useRouter } from "next/router";

const GameCommunityTabPage: NextPage<{}> = () => {
  const router = useRouter();

  const makeContainer = (tabName?: string | null | string[]) => {
    switch (tabName) {
      case "notice":
        return <div>공지사항</div>;
      case "devNote":
        return <div>개발 노트</div>;
      case "event":
        return <div>이벤트</div>;
      case "faq":
        return <div>문의</div>;
      case "report":
        return <div>report</div>;
    }
  };

  return <div>{makeContainer(router.query.tab)}</div>;
};

export default GameCommunityTabPage;
