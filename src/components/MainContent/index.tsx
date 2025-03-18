type MainContentProps = {
  toggleId: string
}

export function MainContent({ toggleId }: MainContentProps) {
  return (
    <main
      className="bg-blue-100 p-8 w-full transition-all duration-300 ease-out 
      peer-checked:max-sm:w-full peer-checked:md:w-[calc(100%-var(--drawer-width-default))] peer-checked:md:w-[calc(100%-var(--drawer-width-md))] peer-checked:lg:w-[calc(100%-var(--drawer-width-lg))] peer-checked:xl:w-[calc(100%-var(--drawer-width-xl))]"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Main Content</h1>
        <p className="mb-6">
          This is the main content area. When the drawer is opened, this section
          will resize on desktop screens or be overlapped on mobile screens.
        </p>

        <label
          htmlFor={toggleId}
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md 
          hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
        >
          Open Drawer
        </label>
      </div>
    </main>
  )
}
