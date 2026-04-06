import StatusCard from "../card/StatusCard"
import greenLignt from "../../assets/img_green_light.png";
import redLight from "../../assets/img_red_light.png";
function MainLayout() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-3 gap-4">
        {/* 왼쪽 2/3 */}
        {/* <div className="col-span-2 bg-white rounded p-4"> */}
        <div className="col-span-2 rounded">
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <StatusCard 
              title="세이퍼 신호등" 
              desc="세이퍼 신호등은 안전관리를 신호등으로 안내하여 상황에 맞춰 안전을 유지합니다."
              image={redLight}/>
            <StatusCard                
              title="중대재해처벌법 대응수준" 
              desc="중대재해처벌법에 관련한 정보를 신호등으로 안내하여 대응할 수 있도록 도와줍니다."
              image={greenLignt}/>
          </div>
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