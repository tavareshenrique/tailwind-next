import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'

import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" link="#home" icon={Home} />

      <NavItem title="Dashboard" link="#dashboard" icon={BarChart} />

      <NavItem title="Projects" link="#projects" icon={SquareStack} />

      <NavItem title="Tasks" link="#tasks" icon={CheckSquare} />

      <NavItem title="Reporting" link="#reporting" icon={Flag} />

      <NavItem title="Users" link="#users" icon={Users} />
    </nav>
  )
}
