function GNB() {
  return (
    <header className="bg-white h-15 flex items-center justify-between px-6 border-b border-gray-200">
      {/* 왼쪽 로고 */}
      <span className="font-bold text-sm text-gray-700">DUEGO SAFER DASH BOARD</span>

      {/* 오른쪽 */}
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span>홍길동님, 환영합니다.</span>
        <div className="flex items-center gap-2">
          <button>🔔</button>
          <button>👤</button>
          <button>☰</button>
        </div>
      </div>
    </header>
  )
}

export default GNB