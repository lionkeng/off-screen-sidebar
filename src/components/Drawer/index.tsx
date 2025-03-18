import styles from './Drawer.module.css';

type DrawerProps = {
  toggleId: string;
};

export function Drawer({ toggleId }: DrawerProps) {
  return (
    <aside className={`${styles.container} drawer`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Drawer Content</h2>
        <label 
          htmlFor={toggleId} 
          className={styles.closeButton}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.closeIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>
      
      <div className={styles.content}>
        <p>This is a sliding drawer that appears from the right side of the screen.</p>
        <p>On desktop screens (md and above), the main content area resizes.</p>
        <p>On mobile screens (below md), this drawer overlaps the main content.</p>
        <div className={styles.contentBlock1}>
          Example Content Block
        </div>
        <div className={styles.contentBlock2}>
          Example Content Block
        </div>
        <div className={styles.contentBlock3}>
          Example Content Block
        </div>
      </div>
    </aside>
  );
}
