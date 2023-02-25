import { useMemo, useState } from "react"
import ReactSelect from "react-select"
import { Note, Tag } from "../App"
import { Link } from "react-router-dom"

type SimplifiedNote = {
  tags: Tag[]
  title: string
  id: string
}

type EditTagsModalProps = {
  availableTags: Tag[]
}

type NoteListProps = {
  availableTags: Tag[]
  notes: Note[]
}

function NoteList({ availableTags, notes }: NoteListProps) {
  const [tags, setTags] = useState<Tag[]>([])
  const [title, setTitle] = useState("")
  //todo edit tags button
  // const [showEditTags, setShowEditTags] = useState(false)
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        title === "" ||
        (note.title.toLowerCase().includes(title.toLowerCase()) &&
          (tags.length === 0 ||
            tags.every((tag) =>
              note.tags.some((noteTag) => noteTag.id === tag.id)
            )))
      )
    })
  }, [title, tags, notes])

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">All notes</h1>
        <div className="ml-auto flex gap-2">
          <Link to="/new">
            <button className="rounded border border-transparent bg-blue-500 py-2 px-4 text-white transition-colors hover:bg-blue-600">
              Create
            </button>
          </Link>
          {/* <button
            onClick={() => setShowEditTags(true)}
            className="rounded border border-zinc-300 py-2 px-4 transition-colors hover:bg-slate-100"
          >
            Edit Tags
          </button> */}
        </div>
      </div>
      <form className="my-6 flex items-center gap-4">
        <div className="w-1/2">
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-9 w-full rounded border border-zinc-300 py-0.5 px-2"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="tags" className="block">
            Tags
          </label>
          <ReactSelect
            options={availableTags.map((tag) => {
              return { label: tag.label, value: tag.id }
            })}
            value={tags.map((tag) => {
              return { label: tag.label, value: tag.id }
            })}
            onChange={(tags) => {
              setTags(
                tags.map((tag) => {
                  return { label: tag.label, id: tag.value }
                })
              )
            }}
            isMulti
          />
        </div>
      </form>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredNotes.map((note) => (
          <div key={note.id}>
            <NoteCard id={note.id} title={note.title} tags={note.tags} />
          </div>
        ))}
      </div>
      {/* {showEditTags && <EditTagsModal availableTags={availableTags} />} */}
    </>
  )
}

function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <Link to={`/${id}`}>
      <div className="flex h-64 flex-col items-center justify-center gap-4 border border-zinc-300">
        <span className="text-xl font-bold">{title}</span>
        <div className="flex gap-1">
          {tags.length > 0 &&
            tags.map((tag) => (
              <div
                key={tag.id}
                className="truncate rounded bg-blue-500 py-1 px-2 text-white"
              >
                {tag.label}
              </div>
            ))}
        </div>
      </div>
    </Link>
  )
}

// function EditTagsModal({ availableTags }: EditTagsModalProps) {
//   return (
//     <div className="absolute top-1/2 left-1/2 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform flex-col border border-zinc-300 bg-white p-4">
//       <h2 className="mb-2 text-2xl font-bold">Edit Tags</h2>
//       <div className="flex flex-col gap-2">
//         {availableTags.map((tag) => (
//           <div className="border border-zinc-300">
//             <div key={tag.id} className="flex items-center">
//               <div className="w-fit truncate rounded bg-blue-500 py-1 px-2 text-white">
//                 {tag.label}
//               </div>
//               <div className="ml-auto mr-4 text-black">x</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="ml-auto mt-1 flex gap-2">
//         <button className="rounded border border-transparent bg-blue-500 py-2 px-4 text-white transition-colors hover:bg-blue-600">
//           Save
//         </button>
//         <button className="rounded border border-zinc-300 py-2 px-4 transition-colors hover:bg-slate-100">
//           Cancel
//         </button>
//       </div>
//     </div>
//   )
// }

export default NoteList
