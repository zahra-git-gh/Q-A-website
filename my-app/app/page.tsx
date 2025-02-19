import DescriptionBlock from "@/components/DescriptionBlock";
import Navbar from "../components/Navbar";
import QuestionForm from "@/components/QuestionForm";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Navbar />
        <DescriptionBlock />
        <QuestionForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
