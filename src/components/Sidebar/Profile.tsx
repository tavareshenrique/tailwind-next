/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'

import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https:///github.com/tavareshenrique.png"
        alt="Henrique Tavares"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Henrique Tavares
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          ihenrits@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost" className="ml-auto">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  )
}
