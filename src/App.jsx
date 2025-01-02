import { useState } from 'react'
import Form from './Components/Form';
import ColorList from './Components/ColorList'
import Values from 'values.js';
import './App.css'
import { ToastContainer ,toast} from 'react-toastify';

function App(){
  
  const [colors,setColors] = useState(new Values("#0f1535").all(10))
  const addcolor = (color)=>{
     if(color.charAt(0) != '#' || color.length != 7){
       return toast.error("wrong color code");
     }
     const change = new Values(color).all(10);
     if(JSON.stringify(change) == JSON.stringify(colors)){
       return toast.info('Enter a different color ')
     }
     setColors(change);
     toast.success('color shade changed sucessfully')
  }
  return (<>
    <h3 className='Heading'>Color Generator</h3>
   <Form addcolor={addcolor}/>
   <ColorList colors={colors}/>
   <ToastContainer/>
   </>
  );
}

export default App
