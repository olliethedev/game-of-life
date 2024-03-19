import GameOfLife from "@/components/game-of-life";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 gap-3">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-3">
        <h1 className="mb-3 text-4xl text-yellow-100 font-semibold italic">
          Game of Life
        </h1>
        <p className="flex static w-auto  rounded-xl border bg-yellow-100 p-2 justify-center border-neutral-200 border-opacity-10">
          Selects a few cells on the board and click the start button
        </p>
      </div>
      <GameOfLife />
    </main>
  );
}
