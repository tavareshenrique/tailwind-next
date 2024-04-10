'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import { Button } from '../Button'
import * as Input from '../Input'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.CollapsibleTrigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.CollapsibleTrigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>

          <Input.Control type="text" placeholder="Search" />
        </Input.Root>

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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
