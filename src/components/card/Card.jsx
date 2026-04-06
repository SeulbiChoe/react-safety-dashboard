import ApprovalButton from "./ApprovalButton";

function Card ( {title, children, className} ) {
 return (
  <div className={`bg-white rounded p-6 ${className}`}>
   <span className="font-bold">{title}</span>
   {children}
  </div>
 )
}
export default Card;