import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface INavItemProps {
  title: string
  icon: ElementType
  link: string
}

export function NavItem({ title, link, icon: Icon }: INavItemProps) {
  return (
    <a
      href={link}
      className="dark:hover-bg-zinc-800 group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
    </a>
  )
}
