"use server";
interface Question {
  title: string;
  description: string;
}
export async function postQuestion(data: Question) {
  try {
    const res = await fetch("http://localhost:3000/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
