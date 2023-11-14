import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { createPool } from "@vercel/postgres";
import { createClient } from "@vercel/postgres";

export async function POST(request) {

  const { collageName, university, zipCode, phoneNo, CS, Civil, mech, ENTC } =
  await request.json();

  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });

  const query = `
      INSERT INTO collage_registration (collage_name, university, zip_code, phone_no, cs_department, civil_department, mech_department, entc_department)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;

  const values = [
    collageName,
    university,
    zipCode,
    phoneNo,
    CS,
    Civil,
    mech,
    ENTC,
  ];
  
  await pool.query(query, values);



  return NextResponse.json({ message: "Post created" }, { status: "200" });
}
