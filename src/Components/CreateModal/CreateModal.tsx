interface CreateTaskModalProps {
  isOpen: boolean; // Define type for isOpen prop
  onClose: () => void; // Define type for onClose prop
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative w-96 rounded-lg bg-white p-8">
        <button
          className="absolute right-0 top-0 m-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="mb-4 text-lg font-semibold">Create Task</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields go here */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 w-full rounded-md border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="text"
              id="date"
              name="date"
              className="mt-1 w-full rounded-md border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm  font-medium text-gray-700"
            >
              Description
            </label>
            <div>
              <textarea
                id="description"
                name="description"
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
