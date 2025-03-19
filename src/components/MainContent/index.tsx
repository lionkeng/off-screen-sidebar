type MainContentProps = {
  children: React.ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <div
      className="bg-blue-100 w-full transition-all duration-300 ease-out 
      peer-checked:max-sm:w-full peer-checked:md:w-[calc(100%-var(--drawer-width-md))] peer-checked:lg:w-[calc(100%-var(--drawer-width-lg))] peer-checked:xl:w-[calc(100%-var(--drawer-width-xl))]"
    >
      {children}
    </div>
  )
}
