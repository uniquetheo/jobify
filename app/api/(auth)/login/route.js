import { NextResponse } from "next/server";

export const GET = async () => {
  //action

  return NextResponse.json({ message: "You got here!" });
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    return NextResponse.json({message: "got here", body: body})
  } catch (error) {
    return NextResponse.json({ message: error.message })
  }
  ;
};
