"use server";
<<<<<<< HEAD:lib/actions.ts
import { string, z } from "zod";
import {prisma} from '../lib/prisma'
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
=======
import { z } from "zod";
>>>>>>> 551ac147c9c01b350abc2b8bf284e00a4344c3c8:lib/actions.tsx

const UploadSchema = z.object({
  title: z.string().min(1),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image is required" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only image are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image must less than 4MB",
    }),
});
export const uploadImage = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UploadSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if(!validatedFields.success){
    return{
        error: validatedFields.error.flatten().fieldErrors
    }
  }

  const {title, image} = validatedFields.data
  const {url} = await put(image.name, image,{
    access: 'public',
    multipart: true
  })

  try {
    await prisma.upload.create({
      data:{
        title,
        image: url
      }
    })
  } catch(error) {
    return {message: 'Failed to create data'}
  }
  revalidatePath('/');
  redirect('/');
};
