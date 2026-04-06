function ApprovalButton ( {amount, title, icon} ){
 return (
  <div>
   <span>{amount}</span>
   <p>{title}</p>
   <div>
    <img src="" alt={icon} />
   </div>
  </div>
 )
}
export default ApprovalButton