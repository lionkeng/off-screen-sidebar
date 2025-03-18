type DrawerProps = {
  toggleId: string;
};

export function Drawer({ toggleId }: DrawerProps) {
  return (
    <aside className="fixed top-0 bottom-0 right-0 bg-amber-100 p-8 overflow-auto shadow-xl 
      transform translate-x-full transition-transform duration-300 ease-out will-change-transform
      w-4/5 z-50 md:w-[45%] md:z-auto lg:w-[35%] xl:w-[30%] drawer peer-checked:translate-x-0">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Drawer Content</h2>
        <label 
          htmlFor={toggleId} 
          className="rounded-full p-1 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Close"
        >
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
  );
}
