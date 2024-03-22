import { UploadCloud } from 'lucide-react'

function FileInputTrigger() {
  return (
    <label
      htmlFor="photo"
      className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500"
    >
      <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:to-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click to Upload</span>{' '}
          or Drag and Drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 8000x400px)</span>
      </div>
    </label>
  )
}

export const Trigger = FileInputTrigger