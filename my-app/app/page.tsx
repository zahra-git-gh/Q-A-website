import DescriptionBlock from "@/components/DescriptionBlock";
import QuestionForm from "@/components/QuestionForm";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <DescriptionBlock />
        <QuestionForm />
      </main>
    </div>
  );
}
