import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    console.log("PATCH request received");

    // Extract user authentication
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Validate courseId parameter
    const courseId = params.courseId;
    if (!courseId) {
      console.error("Course ID is missing");
      return new NextResponse("Bad Request: Course ID is required", { status: 400 });
    }

    // Parse JSON body from request
    const values = await req.json();
    if (!values) {
      return new NextResponse("Bad Request: Invalid data", { status: 400 });
    }

    // Update the course in the database
    const course = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("[PATCH /course]:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
