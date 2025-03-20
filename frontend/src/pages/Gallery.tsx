import img1 from '../assets/gallery/img37.jpeg';
import img2 from '../assets/gallery/Tea.jpeg';
import img3 from '../assets/gallery/img10.jpeg';
import img4 from '../assets/gallery/img36.jpeg';
import img5 from '../assets/gallery/img6.jpeg';
import img6 from '../assets/gallery/img7.jpeg';
import img7 from '../assets/gallery/img8.jpeg';
import img8 from '../assets/gallery/img9.jpeg';
import img9 from '../assets/gallery/img3.jpeg';
import img10 from '../assets/gallery/img12.jpeg';
import img11 from '../assets/gallery/img13.jpeg';
import img12 from '../assets/gallery/img14.jpeg';
import img13 from '../assets/gallery/img15.jpeg';
import img14 from '../assets/gallery/img17.jpeg';
import img15 from '../assets/gallery/img19.jpeg';
import img16 from '../assets/gallery/img20.jpeg';
import img17 from '../assets/gallery/img21.jpeg';
import img18 from '../assets/gallery/img22.jpeg';
import img19 from '../assets/gallery/img23.jpeg';
import img20 from '../assets/gallery/img25.jpeg';

const Gallery = () => {
  return (
    <div className={"p-s md:p-10 rounded-3xl"} style={{paddingTop: '100px'}}>
    <div className={"columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 " +
        "[&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 roun rounded-3xl"}>
        <img className={"rounded-2xl"} src={img1}/>
        <img className={"rounded-2xl"} src={img2}/>
        <img className={"rounded-2xl"} src={img3}/>
        <img className={"rounded-2xl"} src={img4}/>
        <img className={"rounded-2xl"} src={img5}/>
        <img className={"rounded-2xl"} src={img6}/>
        <img className={"rounded-2xl"} src={img7}/>
        <img className={"rounded-2xl"} src={img8}/>
        <img className={"rounded-2xl"} src={img9}/>
        <img className={"rounded-2xl"} src={img10}/>
        <img className={"rounded-2xl"} src={img11}/>
        <img className={"rounded-2xl"} src={img12}/>
        <img className={"rounded-2xl"} src={img13}/>
        <img className={"rounded-2xl"} src={img14}/>
        <img className={"rounded-2xl"} src={img15}/>
        <img className={"rounded-2xl"} src={img16}/>
        <img className={"rounded-2xl"} src={img17}/>
        <img className={"rounded-2xl"} src={img18}/>
        <img className={"rounded-2xl"} src={img19}/>
        <img className={"rounded-2xl"} src={img20}/>
      
        </div>
    </div>
  )
}

export default Gallery