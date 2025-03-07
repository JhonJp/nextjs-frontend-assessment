import { NextResponse } from "next/server";

export async function GET() {
  const HOST = "http://localhost:3000"
  const res = await fetch(`${HOST}/data.json`);
  const data = await res.json();
  return NextResponse.json(data);
}