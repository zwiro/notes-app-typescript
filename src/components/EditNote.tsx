import { NoteData, Tag } from "../App"
import Form from "./Form"
import { useNote } from "./NoteLayout"

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  const note = useNote()
  return (
    <>
      <h1 className="text-2xl font-bold">Edit note</h1>
      <Form
        title={note.title}
        text={note.text}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}

export default EditNote
