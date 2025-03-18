import styles from './Overlay.module.css';

type OverlayProps = {
  toggleId: string;
};

export function Overlay({ toggleId }: OverlayProps) {
  return (
    <label 
      htmlFor={toggleId} 
      className={styles.overlay}
      aria-label="Close drawer"
    />
  );
}
