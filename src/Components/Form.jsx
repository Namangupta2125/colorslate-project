import { useState } from "react"

function Form({addcolor}) {
 const [color,setColor] = useState('');
 const [buttoncolor,setButtonColor] = useState('')
 const handlesubmit = (e)=>{
   e.preventDefault();
   addcolor(color);
 }
  return (
    <form className="color-form" onSubmit={handlesubmit}>
      <input
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
           if(color.charAt(0) == '#' && color.length == 7){
                 setButtonColor(e.target.value)
               }
          }}
      />
      {" "}
      <input
        type="text"
        placeholder="#0f1535"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          if(color.charAt(0) == '#' && color.length == 7){
                 setButtonColor(e.target.value)
               }
          
        }}
      />
      <button type="submit" style={{background:buttoncolor}}>submit</button>
    </form>
  );
}
export default Form