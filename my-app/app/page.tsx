"use client";
import DescriptionBlock from "@/components/DescriptionBlock";
import QuestionForm from "@/components/QuestionForm";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <DescriptionBlock />
      <QuestionForm />
    </div>
  );
}
