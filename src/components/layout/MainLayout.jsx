function MainLayout() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-3 gap-4">
        {/* 왼쪽 2/3 */}
        <div className="col-span-2 bg-white rounded p-4">
          왼쪽 컨텐츠
        </div>
        {/* 오른쪽 1/3 */}
        <div className="col-span-1 bg-white rounded p-4">
          오른쪽 컨텐츠
        </div>
      </div>
    </main>
  )
}

export default MainLayout