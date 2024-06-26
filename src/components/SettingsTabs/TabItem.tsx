import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface ITabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ title, value, isSelected = false }: ITabItemProps) {
  return (
    <Tabs.Trigger
      className="group relative cursor-pointer px-1 pb-4 text-sm font-medium text-zinc-500 outline-none transition-colors duration-200 hover:text-violet-700 data-[state=active]:text-violet-700"
      value={value}
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        ></motion.div>
      )}
    </Tabs.Trigger>
  )
}
