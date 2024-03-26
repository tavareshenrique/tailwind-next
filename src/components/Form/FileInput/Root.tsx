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
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as TFileInputContextType)

function FileInputRoot(props: TRootProps) {
  const id = useId()

  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    setFiles((prevFiles) => (multiple ? [...prevFiles, ...files] : files))
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const Root = FileInputRoot
export const useFileInput = () => useContext(FileInputContext)
