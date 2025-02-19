import "dotenv/config";
import { defineConfig } from "drizzle-kit";
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the .env file");
}
export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",

  dbCredentials: {
    url: DATABASE_URL, // Use your .env DATABASE_URL
  },
  verbose: true,
  strict: true,
});
