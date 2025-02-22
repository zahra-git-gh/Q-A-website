"use server";

import { revalidateTag } from "next/cache";

interface Question {
  title: string;
  description: string;
}
interface Answer {
  answer: string;
  questionId: string;
}
export async function postQuestion(data: Question) {
  try {
    const res = await fetch("http://localhost:3000/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });
    revalidateTag("question");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
export async function postAnswers(data: Answer) {
  try {
    const res = await fetch("http://localhost:3000/api/answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });
    revalidateTag("answer");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
export async function deleteItem(url: string, tag: string) {
  try {
    const res = await fetch(url, {
      method: "DELETE",
    });
    revalidateTag(tag);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function editAnswer(url: string, data: string) {
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: data }),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
