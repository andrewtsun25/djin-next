import { useRouter } from "next/router";
import { MartialArtsBackground } from "../../src/components/martialArts";

const MartialArtsPage = () => {
  const router = useRouter();
  const { martialArtsId } = router.query;
  return <MartialArtsBackground />;
};

export default MartialArtsPage;
