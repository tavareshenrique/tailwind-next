import { ComponentProps } from 'react'

interface IInputPrefixProps extends ComponentProps<'div'> {}

export function Prefix(props: IInputPrefixProps) {
  return <div {...props}></div>
}

interface IInputControlProps extends ComponentProps<'input'> {}

export function Control(props: IInputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

interface IInputRootProps extends ComponentProps<'div'> {}

export function Root(props: IInputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
