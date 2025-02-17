CREATE TABLE "answers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"questionId" uuid NOT NULL,
	"answer" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "questions" ADD COLUMN "createdAt" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "answers" ADD CONSTRAINT "answers_questionId_questions_id_fk" FOREIGN KEY ("questionId") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;