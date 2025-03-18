import './Drawer.css';

type DrawerProps = {
  toggleId: string
}

export function Drawer({ toggleId }: DrawerProps) {
  return (
    <aside className="drawer">
      <div className="header">
        <h2 className="title">Drawer Content</h2>
        <label
          htmlFor={toggleId}
          className="closeButton"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="closeIcon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </div>

      <div className="content">
        <p>
          This is a sliding drawer that appears from the right side of the
          screen.
        </p>
        <p>On desktop screens (md and above), the main content area resizes.</p>
        <p>
          On mobile screens (below md), this drawer overlaps the main content.
        </p>
        <div className="contentBlock contentBlock1">
          Example Content Block
        </div>
        <div className="contentBlock contentBlock2">
          Example Content Block
        </div>
        <div className="contentBlock contentBlock3">
          Example Content Block
        </div>
      </div>
    </aside>
  )
}
