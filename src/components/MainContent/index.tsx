import styles from './MainContent.module.css';

type MainContentProps = {
  toggleId: string;
};

export function MainContent({ toggleId }: MainContentProps) {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Main Content</h1>
        <p className={styles.paragraph}>
          This is the main content area. When the drawer is opened, this section will 
          resize on desktop screens or be overlapped on mobile screens.
        </p>
        
        <label htmlFor={toggleId} className={styles.toggleButton}>
          Open Drawer
        </label>
      </div>
    </main>
  );
}
