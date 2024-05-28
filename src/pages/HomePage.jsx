import IntroSection from "../components/home/IntroSection";
import SumLaporanSection from "../components/home/SumLaporanSection";
import ArticleSection from "../components/home/ArticleSection";

// Home Styling
import "../styles/home.css";

function HomePage() {
  return (
    <>
      <IntroSection />
      <SumLaporanSection />
      <ArticleSection />
    </>
  );
}

export default HomePage;
