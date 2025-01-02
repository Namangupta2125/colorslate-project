import {toast} from 'react-toastify'
function Colorpalet({percentage,code,fontcolor}) {
  
  const handleclick = async ()=>{
    try{
        await navigator.clipboard.writeText( '#'+code);
        toast.success('copied to clipboard')
    }
    catch(error)
    {
      toast.error(error)
    }
  }
  return (
    <div  onClick={handleclick} style={{display:'flex',flexDirection:"column",justifyContent:"start", alignItems:"start",backgroundColor:"#"+code,padding:"15px",height:"160px",width:"192px",color:fontcolor,boxSizing:"border-box",fontWeight:"30%"}}>{percentage} % <br /> {"#"+code}</div>
  )
}
export default Colorpalet