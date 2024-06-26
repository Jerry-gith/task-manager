import { NextRequest, NextResponse } from "next/server";
import prisma from "@/server/prisma/client";
import { signInSchema } from "../schema";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secret = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: NextRequest): Promise<
  | NextResponse<{
      message: string;
      token?: string;
      user?: any;
    }>
  | NextResponse<{
      error: string;
    }>
> {
  const userDetails = await request.json();
  const userDetailsValidated = signInSchema.safeParse(userDetails);

  if (!userDetailsValidated.success)
    return NextResponse.json(
      {
        message: `Error: ${JSON.stringify(userDetailsValidated.error.errors)}`,
      },
      { status: 400 }
    );

  if (!userDetails.loginId || !userDetails.password)
    return NextResponse.json(
      { message: "Kindly enter your credentials to login!" },
      { status: 400 }
    );

  try {
    const userExists = await prisma.user.findFirst({
      where: {
        OR: [{ name: userDetails.loginId }, { email: userDetails.loginId }],
      },
    });

    if (
      !!userExists &&
      (await bcrypt.compare(userDetails.password, userExists.password))
    ){

    const token = jwt.sign({ id: userExists.id, name: userExists.name, email: userExists.email }, secret, { expiresIn: '1h' });

      return NextResponse.json(
        { message: "Login successful!", token},
        { status: 200 }
      );

    } else
      return NextResponse.json(
        {
          message:
            "Incorrect login details. Check that the details you provided are correct!",
        },
        { status: 401 }
      );
  } catch (error: string | any) {
    return NextResponse.json(
      {
        error: `An error occurred while trying to sign you in: ${error.message}`,
      },
      { status: 500 }
    );
  }
}