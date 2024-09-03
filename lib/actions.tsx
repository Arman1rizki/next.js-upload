"use server";
import { string, z } from "zod";

const UploadSchema = z.object({
  title: z.string().min(1),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image is required" })
    .refine((file) => file.type.startsWith("image/"), {
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
};
