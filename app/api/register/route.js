

import { NextResponse } from 'next/server'
import { sql } from "@vercel/postgres";
import { createPool } from "@vercel/postgres";
import { createClient } from "@vercel/postgres";

export async function POST(request){
    const PostData = await request.json()
    const {
        collageName,
        university,
        zipCode,
        phoneNo,
        CS,
        Civil,
        mech,
        ENTC,      
      } = PostData;
    
      const pool = new createPool({
        connectionString: process.env.POSTGRES_URL, // Your PostgreSQL connection string
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

    //Close connection

    return NextResponse.json({message: "Post created"},{status:"200"})
}