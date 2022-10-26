const DisplayStateUp = ({names}) =>{
  return(
    <>
      {names.map((name,i)=>(
        <div key={i}>
          {name}
        </div>
      ))}
    </>
  )
}
export default DisplayStateUp;