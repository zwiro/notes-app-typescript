import { useNote } from "./NoteLayout"
import { Link, useNavigate } from "react-router-dom"
import ReactMarkdown from "react-markdown"

type NoteProps = {
  onDelete: (id: string) => void
}

function Note({ onDelete }: NoteProps) {
  const note = useNote()
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">{note.title}</h1>
        <div className="ml-auto flex gap-2">
          <Link to={`/${note.id}/edit`}>
            <button className="rounded border border-transparent bg-blue-500 py-2 px-4 text-white transition-colors hover:bg-blue-600">
              Edit
            </button>
          </Link>
          <button
            onClick={() => {
              onDelete(note.id)
              navigate("/")
            }}
            className="rounded border border-red-400 py-2 px-4 text-red-400 transition-colors hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
          <Link to="..">
            <button className="rounded border border-zinc-300 py-2 px-4 transition-colors hover:bg-slate-100">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="flex gap-1">
        {note.tags.length > 0 &&
          note.tags.map((tag) => (
            <div
              key={tag.id}
              className="truncate rounded bg-blue-500 py-1 px-2 text-white"
            >
              {tag.label}
            </div>
          ))}
      </div>
      <ReactMarkdown className="markdown">{note.text}</ReactMarkdown>
    </div>
  )
}

export default Note
