import Values from "values.js";
import Colorpalet from "./Colorpalet";
import { nanoid } from "nanoid";

function ColorList({colors}) {
    return (<section className="colorList">
      {colors.map(color=>{
        if(color.type === 'shade'){
          return <Colorpalet percentage={color.weight} code={color.hex} fontcolor={'#fffffff'} key={nanoid()}/>
        }
        else{
          return (
            <Colorpalet
              percentage={color.weight}
              code={color.hex}
              fontcolor={"#000000"}
              key={nanoid()}
            />
          );
        }
      })}
    </section>)
    
  return <div>ColorList</div>;
}
export default ColorList;
