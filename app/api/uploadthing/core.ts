import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handelAuth = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("unauthorized");
  return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  courseImage: f({ image: {maxFileSize: "4MB", maxFileCount: 1}})
  .middleware(() => handelAuth())
  .onUploadComplete(() => {}),
  
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
  .middleware(() => handelAuth())
  .onUploadComplete(() => {}),

  chapterVideo: f({video: {maxFileCount:1, maxFileSize: "512GB"}})
  .middleware(()=>handelAuth())
  .onUploadComplete(()=>{})
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
