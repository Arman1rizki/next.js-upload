'use client'
import { uploadImage } from "@/lib/actions";
import React from "react";
import { useFormState } from "react-dom";

const CreateForm = () => {
  const [state, formAction] = useFormState(uploadImage, null);
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="tittle"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="title..."
        />
        <div aria-live="polite" aria-atomic="true" >
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:rounded-sm file:mr-4 file:border-4 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-red-400 w-full"
        />
                <div aria-live="polite" aria-atomic="true" >
          <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-4">
        <button className="bg-blue-700 text-white w-full font-medium py-2.5 px-6 rounded-sm text-base hover:bg-blue-600">
          upload
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
