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
    <div className="flex h-screen w-full relative">
      <DrawerToggle id={toggleId} />
      <MainContent toggleId={toggleId}>{children}</MainContent>
      <Overlay toggleId={toggleId} />
      <Drawer toggleId={toggleId} />
    </div>
  )
}
