import { db } from "@/db";
import { answersTable, questionsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const questionId = (await params).id;
    // console.log(questionId);
    await db.delete(questionsTable).where(eq(questionsTable.id, questionId));
    return NextResponse.json({ statusCode: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to delete question" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const questionId = (await params).id;
    const question = await db
      .select()
      .from(questionsTable)
      .where(eq(questionsTable.id, questionId));
    console.log(question);
    const answers = await db
      .select()
      .from(answersTable)
      .where(eq(answersTable.questionId, questionId));
    return NextResponse.json({ statusCode: 200, data: { question, answers } });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to get question" },
      { status: 500 }
    );
  }
}
