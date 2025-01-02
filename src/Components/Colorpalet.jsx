function Colorpalet({percentage,code,fontcolor}) {
  return (
    <div style={{display:'flex',flexDirection:"column",justifyContent:"start", alignItems:"start",backgroundColor:"#"+code,padding:"15px",height:"160px",width:"192px",color:fontcolor,boxSizing:"border-box",fontWeight:"30%"}}>{percentage} % <br /> {"#"+code}</div>
  )
}
export default Colorpalet