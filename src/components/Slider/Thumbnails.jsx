import Thumbnail from "./Thumbnail";
const Thumbnails = ({images,changeImage}) => {
  return(
    <>
      <div style={{display:"flex"}}>
        {images.map((image,i)=>(
          <div key={i}>
            <a onClick={()=>{changeImage(i)}}>
              <Thumbnail image={image} />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
export default Thumbnails;