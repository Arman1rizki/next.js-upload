import CreateForm from "@/component/create-form";

const CreatePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="text-2xl font-bold mb-5">Uploat Image</h1>
        <CreateForm />
      </div>
    </div>
  );
};

export default CreatePage;