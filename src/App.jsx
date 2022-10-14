import React from "react";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-800">
      <form className="flex flex-col space-y-4 w-96">
        <label className="text-2xl text-slate-200 font-bold text-center">
          Create task
        </label>
        <input type="text" className="outline-none w-full py-2 px-3 rounded-sm font-medium text-lg text-teal-900" />
        <button
          type="submit"
          className="p-2 bg-teal-600 rounded-lg text-slate-200 hover:bg-teal-800 transition duration-200 place-self-center w-1/2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
