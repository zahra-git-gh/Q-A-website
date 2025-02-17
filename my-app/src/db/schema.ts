import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const questionsTable = pgTable("questions", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("createdAt", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const answersTable = pgTable("answers", {
  id: uuid("id").primaryKey().defaultRandom(),
  questionId: uuid("questionId")
    .references(() => questionsTable.id)
    .notNull(),
  answer: varchar({ length: 255 }).notNull(),
});

/**
 * RELATIONSHIPS
 */

export const questionsRelation = relations(questionsTable, ({ many }) => ({
  answers: many(answersTable),
}));

export const answersRelation = relations(answersTable, ({ one }) => ({
  question: one(questionsTable, {
    fields: [answersTable.questionId],
    references: [questionsTable.id],
  }),
}));
