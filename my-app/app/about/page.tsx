import Navbar from "@/components/Navbar";
import { Container, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 20 }}>
        <Typography variant="h1" component={"h1"} mb={2}>
          About Us
        </Typography>
        <Typography variant="subtitle1" component={"p"}>
          Welcome to Q & A _ where knowiedge meets curiosity! We are a Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          delectus, placeat exercitationem eveniet aliquam, veritatis deleniti
          ipsa labore, hic impedit fuga quisquam rem nam. Impedit perferendis
          porro assumenda dolor quod? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Provident, autem ab, voluptates veniam perspiciatis
          quis velit, amet ipsum voluptatibus temporibus vel ducimus maxime?
          Fugit, illum. Obcaecati eaque molestias laborum illum!{" "}
        </Typography>
      </Container>
    </div>
  );
}
