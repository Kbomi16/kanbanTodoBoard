import MainBoard from './_components/(MainBoard)/MainBoard'

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full items-start justify-between">
      <main className="flex-1 py-10">
        <MainBoard />
      </main>
    </div>
  )
}
