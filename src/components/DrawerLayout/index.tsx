import { MainContent } from '../MainContent';
import { Drawer } from '../Drawer';
import { Overlay } from '../Overlay';
import { DrawerToggle } from '../DrawerToggle';

type DrawerLayoutProps = {
  toggleId?: string;
};

export function DrawerLayout({ toggleId = 'drawer-toggle' }: DrawerLayoutProps) {
  return (
    <div className="flex h-screen w-full relative">
      <MainContent toggleId={toggleId} />
      <DrawerToggle id={toggleId} />
      <Overlay toggleId={toggleId} />
      <Drawer toggleId={toggleId} />
    </div>
  );
}
