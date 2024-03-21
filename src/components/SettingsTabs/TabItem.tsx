import * as Tabs from '@radix-ui/react-tabs'

interface ITabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ title, value, isSelected = false }: ITabItemProps) {
  return (
    <Tabs.Trigger
      className="relative cursor-pointer px-1 pb-4 text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-violet-700 data-[state=active]:text-violet-700"
      value={value}
    >
      <span>{title}</span>

      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"></div>
      )}
    </Tabs.Trigger>
  )
}
