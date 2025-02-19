import QuestionCardsContainer from "@/components/QuestionCardsContainer";
import QuestionsHeader from "@/components/QuestionsHeader";

export default async function QuestionPage() {
  const res = await fetch("http://localhost:3000/api/questions", {
    next: { tags: ["question"] },
  });
  const questions = await res.json();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <main>
        <QuestionsHeader />
        <QuestionCardsContainer data={questions.data} />
      </main>
    </div>
  );
}
