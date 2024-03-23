/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

// Define the interface for the request body

export async function POST(req: Request) {
  // Get the session information

  try {
    const body = await req.json();
    const { title, description, date, email } = body;

    if (!title || !description || !date || !email) {
      return NextResponse.json(
        { error: "Please provide title, description, date, and email" },
        { status: 400 },
      );
    }

    const task = await db.task.create({
      data: {
        title,
        description,
        date,
        email,
      },
    });
    console.log(task);

    // Return success response with the created task
    return NextResponse.json({ message: "Task created successfully", task });
  } catch (error) {
    console.error("Error creating task:", error);
    // Return an error response
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 },
    );
  }
}
