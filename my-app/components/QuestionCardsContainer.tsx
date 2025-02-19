"use client";
import { Box, Container } from "@mui/material";
import QuestionCard from "./QuestionCard";
import { useFilterStore } from "@/zustand/store";
interface Question {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}
interface CardsContainerParams {
  data: Question[];
}
function QuestionCardsContainer({ data }: CardsContainerParams) {
  const { searchValue, isSortByNewer, isSortByOlder } = useFilterStore(
    (state) => state
  );
  const filteredData = data
    .filter((q) => q.title.includes(searchValue))
    .slice()
    .sort((a, b) => {
      if (isSortByNewer) {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (isSortByOlder) {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      } else {
        return 0;
      }
    });
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box>
        {filteredData.map((question) => (
          <QuestionCard
            description={question.description}
            title={question.title}
            createdAt={question.createdAt}
            key={question.id}
          />
        ))}
      </Box>
    </Container>
  );
}
export default QuestionCardsContainer;
