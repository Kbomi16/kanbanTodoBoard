import MainBoard from './_components/(MainBoard)/MainBoard'
import Nav from './_components/Nav'

export default function Home() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-[1200px] p-4">
      <aside className="w-20 md:w-30">
        <Nav />
      </aside>

      <main className="flex-1">
        <MainBoard />
      </main>
    </div>
  )
}
