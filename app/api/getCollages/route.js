
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { createPool } from "@vercel/postgres";
import { createClient } from "@vercel/postgres";

export async function GET(req) {

    const pool = createPool({
        connectionString: process.env.POSTGRES_URL,
      });
      
      const query = `
      select * from collage_registration
    `;

    const {rows} = await sql`select * from collage_registration`
    console.log(rows);
    return new Response(JSON.stringify(rows));
}