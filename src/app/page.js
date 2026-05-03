import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import MovingText from "@/components/MovingText";
import Stats from "@/components/Stats";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <MovingText />
      <FeaturedBooks />
      <Stats />
    </div>
  );
}
