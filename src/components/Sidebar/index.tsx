import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />

        <input
          type="text"
          placeholder="Search"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" link="#home" icon={Home} />

        <NavItem title="Dashboard" link="#dashboard" icon={BarChart} />

        <NavItem title="Projects" link="#projects" icon={SquareStack} />

        <NavItem title="Tasks" link="#tasks" icon={CheckSquare} />

        <NavItem title="Reporting" link="#reporting" icon={Flag} />

        <NavItem title="Users" link="#users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" link="#support" icon={LifeBuoy} />
          <NavItem title="Settings" link="#settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
