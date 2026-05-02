import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import MovingText from "@/components/MovingText";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <MovingText />
      <FeaturedBooks />
    </div>
  );
}
