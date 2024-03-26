'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type TRootProps = ComponentProps<'div'>

type TFileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as TFileInputContextType)

function FileInputRoot(props: TRootProps) {
  const id = useId()

  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const Root = FileInputRoot
export const useFileInput = () => useContext(FileInputContext)
