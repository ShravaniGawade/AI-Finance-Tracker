import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://fintr-ack_owner:vHwe0omyOq7E@ep-odd-queen-a55eorlk.us-east-2.aws.neon.tech/fintr-ack?sslmode=require"
);
export const db = drizzle(sql, { schema });