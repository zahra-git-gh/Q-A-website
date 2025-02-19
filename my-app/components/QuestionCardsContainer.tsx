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
  const searchValue = useFilterStore((state) => state.searchValue);
  const filteredData = data.filter((q) => q.title.includes(searchValue));
  return (
    <Container maxWidth="lg">
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
