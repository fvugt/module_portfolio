export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-gray-100">
      <h1 className="text-xl font-bold">My Site</h1>
      <div className="flex gap-3">
        <button className="px-3 py-1 bg-gray-300 rounded">About me</button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded">Projects</button>
      </div>
    </header>
  )
}