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
    const { name, email, password } = await request.json();

    await connect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({ name: name, email, password: hashedPassword });

    try {
      await newUser.save();
      return NextResponse.json({ message: "User created" }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};
