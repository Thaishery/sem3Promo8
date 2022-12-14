import { useState } from "react";
import Thumbnails from "../components/Slider/Thumbnails";
import View from "../components/Slider/View";
const SliderView = () => {
  const [curImage, setCurImage] = useState("https://www.agria.fr/imagevault/publishedmedia/w50ock3ny3up1hwlxb7h/Orange_cat_laying_indoor.jpg")
  const [sliderPosition, setSliderPosition] = useState(0)
  const [images, setImages] = useState([
    "https://www.agria.fr/imagevault/publishedmedia/w50ock3ny3up1hwlxb7h/Orange_cat_laying_indoor.jpg",
    "https://www.helloanimaux.fr/wp-content/uploads/2022/01/les-peurs-du-chat.jpg",
    "https://a2x2y5u6.rocketcdn.me/wp-content/uploads/2022/08/chat.jpeg",
    "https://lemagduchat.ouest-france.fr/images/dossiers/2021-12/marche-chat-france-164220.jpg",
    "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/2/0/7/207b8b31e8_50157843_humeurs-chats-visage.jpg"
  ])

  const changeImage = (i) =>{
    setSliderPosition(i)
    setCurImage(images[i] !== undefined? images[i]: images[0])
  }
  return(
    <>
      <View 
        curImage={curImage}
        sliderPosition={sliderPosition}
        changeImage={changeImage}
        imagesLength={images.length}
      />
      <Thumbnails 
        images={images}
        changeImage={changeImage}
      />
    </>
  )
}
export default SliderView;