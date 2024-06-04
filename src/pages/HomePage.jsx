import IntroSection from "../components/home/IntroSection";
import SumLaporanSection from "../components/home/SumLaporanSection";
import ArticleSection from "../components/home/ArticleSection";

// Home Styling
import "../styles/home.css";

function HomePage({ role }) {
  return (
    <>
      <IntroSection role={role} />
      <SumLaporanSection />
      <ArticleSection role={role} />
    </>
  );
}

export default HomePage;
