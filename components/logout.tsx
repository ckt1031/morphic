import { signIn } from '@/app/auth'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'

export function Logout() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn()
      }}
    >
      <Button type="submit" variant="ghost" size="icon">
        <LogOut className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </form>
  )
}
