import { MainContent } from '../MainContent'
import { Drawer } from '../Drawer'
import { Overlay } from '../Overlay'
import { DrawerToggle } from '../DrawerToggle'

type RootContainerProps = {
  toggleId?: string
  children: React.ReactNode
}

export function RootContainer({
  toggleId = 'drawer-toggle',
  children,
}: RootContainerProps) {
  return (
    <div className="flex min-h-dvh w-full relative">
      <DrawerToggle id={toggleId} />
      <MainContent>{children}</MainContent>
      <Overlay toggleId={toggleId} />
      <Drawer toggleId={toggleId} />
    </div>
  )
}
