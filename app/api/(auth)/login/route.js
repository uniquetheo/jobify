import { NextResponse } from "next/server";
import User from "/models/Users";
import connect from "/utils/db";
import bcrypt from "bcryptjs";

export const GET = async () => {
  //action

  return NextResponse.json({ message: "You got here!" });
};

export const POST = async (request) => {
  try {
    const { email, password } = await request.json();

    await connect();
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};
