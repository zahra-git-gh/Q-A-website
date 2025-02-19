import { db } from "@/db";
import { questionsTable } from "@/db/schema";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const questionData = await req.json();
    const question = await db
      .insert(questionsTable)
      .values(questionData)
      .returning();
    return Response.json({ statusCode: 201, data: question[0] });
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}

export async function GET() {
  try {
    const allQuestions = await db.select().from(questionsTable);
    return Response.json({ statusCode: 200, data: allQuestions });
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}
