import styles from './DrawerToggle.module.css';

type DrawerToggleProps = {
  id: string;
};

export function DrawerToggle({ id }: DrawerToggleProps) {
  return (
    <input type="checkbox" id={id} className={`${styles.toggle} peer`} />
  );
}
