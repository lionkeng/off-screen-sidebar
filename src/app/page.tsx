export default function Home() {
  return (
    <div className="flex h-screen w-full relative">
      {/* Main content */}
      <main className="bg-blue-100 p-8 w-full transition-all duration-300 ease-out 
        group-open/drawer:md:w-[55%] group-open/drawer:lg:w-[65%] group-open/drawer:xl:w-[70%]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Main Content</h1>
          <p className="mb-6">
            This is the main content area. When the drawer is opened, this section will 
            resize on desktop screens or be overlapped on mobile screens.
          </p>
          
          {/* Drawer toggle button */}
          <label htmlFor="drawer-toggle" 
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer">
            Open Drawer
          </label>
        </div>
      </main>

      {/* Invisible checkbox for toggle state */}
      <input type="checkbox" id="drawer-toggle" className="peer hidden" />

      {/* Overlay for mobile */}
      <label htmlFor="drawer-toggle" 
        className="fixed inset-0 bg-black/30 z-40 hidden md:peer-checked:hidden peer-checked:block cursor-pointer" 
        aria-label="Close drawer">
      </label>

      {/* Drawer */}
      <aside className="fixed top-0 bottom-0 right-0 bg-amber-100 p-8 overflow-auto shadow-xl 
        transform transition-transform duration-300 ease-out will-change-transform
        w-[80%] md:w-[45%] lg:w-[35%] xl:w-[30%] z-50 md:z-auto
        translate-x-full peer-checked:translate-x-0 group/drawer">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Drawer Content</h2>
          <label htmlFor="drawer-toggle" 
            className="rounded-full p-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
            aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
        
        <div className="space-y-4">
          <p>This is a sliding drawer that appears from the right side of the screen.</p>
          <p>On desktop screens (md and above), the main content area resizes.</p>
          <p>On mobile screens (below md), this drawer overlaps the main content.</p>
          <div className="h-40 bg-amber-200 rounded-md flex items-center justify-center">
            Example Content Block
          </div>
          <div className="h-40 bg-amber-300 rounded-md flex items-center justify-center">
            Example Content Block
          </div>
          <div className="h-40 bg-amber-400 rounded-md flex items-center justify-center">
            Example Content Block
          </div>
        </div>
      </aside>
    </div>
  );
}
