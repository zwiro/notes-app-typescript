import CreatableReactSelect from "react-select/creatable"
import { Link } from "react-router-dom"

function Form() {
  return (
    <form className="my-6 flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="w-1/2">
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="An interesting note"
            className="h-9 w-full rounded border border-zinc-300 py-0.5 px-2"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="tags" className="block">
            Tags
          </label>
          <CreatableReactSelect isMulti />
        </div>
      </div>
      <div>
        <label htmlFor="body" className="block">
          Text
        </label>
        <textarea
          name="body"
          id="body"
          rows={15}
          placeholder="Mastiffs are among the largest dogs, and typically have a short coat, a long low-set tail and large feet..."
          className="w-full rounded border border-zinc-300 p-2"
        ></textarea>
      </div>
      <div className="ml-auto flex gap-4">
        <button
          type="submit"
          className="rounded border border-transparent bg-blue-500 py-2 px-4 text-white transition-colors hover:bg-blue-600"
        >
          Save
        </button>
        <Link to="..">
          <button
            type="button"
            className="rounded border border-zinc-300 py-2 px-4 transition-colors hover:bg-slate-100"
          >
            Cancel
          </button>
        </Link>
      </div>
    </form>
  )
}

export default Form
