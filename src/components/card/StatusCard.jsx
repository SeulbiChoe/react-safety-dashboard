

function StatusCard ( {title, image, desc} ) {
 return(
  <div className={`bg-red-200 rounded p-6 flex items-start justify-between`}>
    <div className="w-80">
      <div className="w-[50px] h-[50px] bg-red-400 rounded">icon</div>
      <span className="font-bold py-1 block">{title}</span>
      <p className="text-[13px] text-gray-800 break-keep">{desc}</p>
    </div>
    <img src={image} alt="신호등 이미지" className="h-[90px] object-contain" />
  </div>
 )
}
export default StatusCard