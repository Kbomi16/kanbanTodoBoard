export default function Card() {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-blue-50 p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-lg font-semibold text-gray-800">운동하기</h3>
          <p className="text-[10px] text-gray-500 md:text-sm">
            🗓️ 2025.05.13 (일)
          </p>
        </div>
        <span className="rounded-full bg-blue-200 px-2 py-1 text-xs font-medium text-blue-800">
          높음
        </span>
      </div>
    </div>
  )
}
