import GNB from './components/layout/GNB'
import MainLayout from './components/layout/MainLayout'

function App() {
  return (
    <div className="min-w-[1280px] min-h-screen bg-gray-100">
      <GNB />
      <div className='max-w-[1440px] mx-auto'>
        <MainLayout />
      </div>
    </div>
  )
}

export default App