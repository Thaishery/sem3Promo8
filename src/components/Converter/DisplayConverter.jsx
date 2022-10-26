const DisplayConverter = ({names,deleteEntry}) =>{
  const taux = 20637.00
  const getRandomSize = ()=>{
    return(Math.floor(Math.random()* (25 - 14) + 14))
  }
  return(
    <>
      {names.map((name,i)=>(
        <div key={i}>
          <span style={{fontSize:getRandomSize()}}>{name*taux}</span>
          <button onClick={()=>{deleteEntry(i)}}>Supprimer</button>
        </div>
      ))}
    </>
  )
}
export default DisplayConverter