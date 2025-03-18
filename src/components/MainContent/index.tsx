import './MainContent.css';

type MainContentProps = {
  toggleId: string
}

export function MainContent({ toggleId }: MainContentProps) {
  return (
    <main className="mainContent">
      <div className="container">
        <h1 className="title">Main Content</h1>
        <p className="description">
          This is the main content area. When the drawer is opened, this section
          will resize on desktop screens or be overlapped on mobile screens.
        </p>

        <label
          htmlFor={toggleId}
          className="drawerButton"
        >
          Open Drawer
        </label>
      </div>
    </main>
  )
}
