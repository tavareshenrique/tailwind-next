import { ComponentProps } from 'react'

type TRootProps = ComponentProps<'div'>

function FileInputRoot(props: TRootProps) {
  return <div {...props} />
}

export const Root = FileInputRoot
