import "server-only";
import { z } from "zod";

const schema = z.object({
  APP_NAME: z.string().trim().min(1).max(80).default("Company app"),
});

export const env = schema.parse({ APP_NAME: process.env.APP_NAME });
