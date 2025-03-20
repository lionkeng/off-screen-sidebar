import { toggleId } from '@/app/constants'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Main Content</h1>
      <p className="mb-6">
        This is the main content area. When the drawer is opened, this section
        will resize on desktop screens or be overlapped on mobile screens.
      </p>
      <button
        type="button"
        className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer rounded-md font-bold"
      >
        Quick Chat
      </button>
      <label
        htmlFor={toggleId}
        className="fixed top-2 right-2 px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer rounded-full font-bold"
      >
        AI
      </label>
    </main>
  )
}
