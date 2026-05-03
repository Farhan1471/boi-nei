import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import MovingText from "@/components/MovingText";
import Stats from "@/components/Stats";
import Review from "@/components/Review";

export default function Home() {
  return (
    <div>
      <Banner />
      <MovingText />
      <FeaturedBooks />
      <Stats />
      <Review />
    </div>
  );
}
