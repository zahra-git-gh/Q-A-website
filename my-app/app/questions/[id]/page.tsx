import AnswerCard from "@/components/AnswerCard";
import AnswerForm from "@/components/AnswerForm";
import Navbar from "@/components/Navbar";
import { Box, Container, Divider, Typography } from "@mui/material";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const questionId = await (await params).id;
  console.log(questionId);
  const res = await fetch(`http://localhost:3000/api/questions/${questionId}`, {
    next: { tags: ["answer"] },
  });
  const { data } = await res.json();
  console.log(data);
  return (
    <div>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          minHeight: "100vh",
        }}
      >
        <Box mt={15} width={"100%"}>
          <Typography variant="h3" component={"h3"}>
            {data.question[0].title}
          </Typography>
          <Typography variant="subtitle2" component={"p"}>
            {data.question[0].description}
          </Typography>
          <Divider />
        </Box>
        <Box width={"100%"} mt={6}>
          {data.answers.map(
            (answer: { id: string; questionId: string; answer: string }) => (
              <AnswerCard key={answer.id} answerText={answer.answer} />
            )
          )}
        </Box>
        <Box width={"100%"} mb={15}>
          <Typography variant="h6" component={"p"} mt={7}>
            Answers:
          </Typography>
          <AnswerForm questionId={questionId} />
        </Box>
      </Container>
    </div>
  );
}
