import { MainContent } from '../MainContent'
import { Drawer } from '../Drawer'
import { Overlay } from '../Overlay'
import { DrawerToggle } from '../DrawerToggle'

type RootContainerProps = {
  toggleId?: string
}

export function RootContainer({
  toggleId = 'drawer-toggle',
}: RootContainerProps) {
  return (
    <div className="flex h-screen w-full relative">
      <MainContent toggleId={toggleId} />
      <DrawerToggle id={toggleId} />
      <Overlay toggleId={toggleId} />
      <Drawer toggleId={toggleId} />
    </div>
  )
}
