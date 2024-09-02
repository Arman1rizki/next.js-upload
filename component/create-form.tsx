const CreateForm = () => {
  return (
    <form action="">
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2 px-4 rounded-sm border border-gray-400 w-full"
          placeholder="title..."
        />
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:rounded-sm file:mr-4 file:border-4 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-red-400 w-full"
        />
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
