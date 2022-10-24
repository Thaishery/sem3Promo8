import { useState } from "react";
const RectanglesView = () => {
  const [retangles, setRectangles] = useState([])
  const [inputNumber, setInputNumber]= useState(0)
  const  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  const getColorCode= ()=> {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
       code =code+ makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
 }
  const handleSubmit = e =>{
    e.preventDefault()
    let tempArray = [...retangles]
    tempArray = []
    for(let i = 0 ; i < inputNumber; i ++){
      let rectangle = {
        height: Math.floor(getRandomArbitrary(100,200)),
        width: Math.floor(getRandomArbitrary(100,200)),
        color: getColorCode()
      }
      tempArray.push(rectangle);
    }
    setRectangles(tempArray)
    setInputNumber(0)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>nombre </label>
      <input
        type="text"
        value={inputNumber}
        onChange={e=>setInputNumber(e.target.value)}
      />
      <button type="submit">Ajouter tache</button>
    </form>
    {retangles.map((retangle, key)=>(
      <div key={key} style={{width:retangle.width, height:retangle.height, backgroundColor:retangle.color}}>
      </div>
      ))
    }
    </>
  )
}
 
export default RectanglesView;

