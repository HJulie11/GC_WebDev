import Image from "next/image";
import NewsSection from "./component/News_home";
import How_it_works from "./component/How_it_works";
import FAQ from "./component/FAQ";
import InfoBoard from "./component/InfoBoard";

export default function Home() {
  return (
    <>
      <NewsSection/>
      <How_it_works/>
      <FAQ/>
      <InfoBoard/>
    </>
  );
}
