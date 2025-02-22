import { db } from "@/db";
import { answersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const answerId = (await params).id;
    const data = await req.json();
    await db
      .update(answersTable)
      .set({ answer: data.answer })
      .where(eq(answersTable.id, answerId));
    return NextResponse.json({ statusCode: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to update answer." },
      { status: 500 }
    );
  }
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const answerId = (await params).id;
    await db.delete(answersTable).where(eq(answersTable.id, answerId));
    return NextResponse.json({ statusCode: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to delete answer." },
      { status: 500 }
    );
  }
}
