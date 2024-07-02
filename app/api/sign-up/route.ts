import { NextRequest, NextResponse } from "next/server";
import { signUpSchema } from "../schema";
import prisma from "@/_misc/server/prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secret = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: NextRequest): Promise<
  NextResponse<{
    message: string;
    token?: string;
  }>
> {
  const userDetails = await request.json();
  const userDetailsValidated = signUpSchema.safeParse(userDetails);

  if (!userDetailsValidated.success)
    return NextResponse.json(
      {
        message: `Error: ${JSON.stringify(userDetailsValidated.error.errors)}`,
      },
      { status: 400 }
    );

  const userEmailExists = await prisma.user.findUnique({
    where: { email: userDetails.email },
  });

  if (!!userEmailExists)
    return NextResponse.json(
      { message: "Oops! A user already registered with that email address." },
      { status: 409 }
    );

  const userNameExists = await prisma.user.findFirst({
    where: { name: userDetails.name },
  });

  if (!!userNameExists)
    return NextResponse.json(
      { message: "Oops! That name is already taken!" },
      { status: 409 }
    );

  try {
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS!);

    const hashedPassword = await bcrypt.hash(userDetails.password, saltRounds);

    const signupUser = await prisma.user.create({
      data: {
        name: userDetails.name,
        email: userDetails.email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      { id: signupUser.id, name: signupUser.name, email: signupUser.email },
      secret,
      { expiresIn: "1h" }
    );

    return NextResponse.json(
      {
        message: "You've been succcessfully registered!",
        token,
        userId: signupUser.id + signupUser.role,
      },
      { status: 201 }
    );
  } catch (error: string | any) {
    return NextResponse.json(
      {
        message: `An error occurred while registering the user ${error.message}`,
      },
      { status: 500 }
    );
  }
}
