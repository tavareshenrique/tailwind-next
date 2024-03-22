import { ComponentProps } from 'react'

type TFileInputControl = ComponentProps<'input'>

function FileInputControl(props: TFileInputControl) {
  return <input type="file" className="sr-only" id="photo" {...props} />
}

export const Control = FileInputControl
