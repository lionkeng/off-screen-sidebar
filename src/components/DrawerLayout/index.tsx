import { MainContent } from '../MainContent';
import { Drawer } from '../Drawer';
import { Overlay } from '../Overlay';
import { DrawerToggle } from '../DrawerToggle';
import styles from './DrawerLayout.module.css';

type DrawerLayoutProps = {
  toggleId?: string;
};

export function DrawerLayout({ toggleId = 'drawer-toggle' }: DrawerLayoutProps) {
  return (
    <div className={styles.container}>
      <MainContent toggleId={toggleId} />
      <DrawerToggle id={toggleId} />
      <Overlay toggleId={toggleId} />
      <Drawer toggleId={toggleId} />
    </div>
  );
}
