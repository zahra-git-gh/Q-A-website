import { db } from "@/db";
import { answersTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log(data, "this is answer data from api");
    const answer = await db.insert(answersTable).values(data).returning();
    return NextResponse.json({ statusCode: 200, data: answer[0] });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to post answer" },
      { status: 500 }
    );
  }
}
