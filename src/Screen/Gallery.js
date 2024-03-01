import React, {useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Navbar from "../Compoents/Navbar";
import Footer from "../Compoents/Footer";


export default function Gallery() {
  

const images = [
 "https://images.unsplash.com/photo-1514489024785-d5ba8dfb2198?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://static.toiimg.com/thumb/imgsize-23456,msid-67322094,width-600,resizemode-4/67322094.jpg",
   "https://images.herzindagi.info/image/2023/May/who-was-ahilyabai-holkar.jpg",
   "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/v1566742410/primary/ceda1j1f0hxvhvsnpglz",
   "https://images.unsplash.com/photo-1542353436-312f0e1f67ff?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://shanthitailor.com/cdn/shop/collections/05_Bharatnatyam_Dance_Costume.jpg?v=170292703",
"https://miro.medium.com/v2/resize:fit:1024/1*ml2d2tIUYxBBIrIY16R8wg.jpeg",
"https://lucknowobserver.com/wp-content/uploads/2015/05/Arunima-Sinha.jpg",
"https://feeds.abplive.com/onecms/images/uploaded-images/2022/07/05/a4e346fa423783ca471a0d2f6b4722981657017943_original.JPG",
"https://static.toiimg.com/thumb/imgsize-952651,msid-68002874,width-400,resizemode-4/68002874.jpg",
"https://theacademicinsights.com/wp-content/uploads/2021/03/sudha-murthy.jpeg",
"https://static.vecteezy.com/system/resources/previews/023/523/204/original/women-empowerment-womens-day-campaign-celebration-poster-with-women-face-silhouette-vector.jpg",

]

const [data , setData]=useState({img:"",i:0});

const viewImage=(img , i)=>{
  setData({img , i})
}

const imgAction=(action)=>{
    let i=data.i;
    if(action==="next-img"){
      setData({img:images[i+1] , i:i+1});
     }
     if(action==="prev-img"){
      setData({img:images[i-1],i:i-1});
     }
     if(!action){
      setData({img:'',i:"0"});
     }
}

  return (
    <>

    {
      data.img && 
      <div style={{
            width:'100%',
            height:'100vh',
            background:'black',
            position:'fixed',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            overflow:'hidden',
      }}>
        <button onClick={ ()=> imgAction()}style={{position:"absolute" , top:"10px", right:"10px"}}>X</button>
        <button onClick={()=>{
          imgAction("prev-img")
        }}>Previous</button>
        <img src={data.img} style={{width:'auto' , maxWidth:"90%" ,maxHeight:"90%"}}/>
        <button onClick={()=>{
          imgAction("next-img")
        }}>Next</button>
        </div>
    }
    <div style={{padding:"10px" }}>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="20px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block" , cursor:"pointer"}}
                            alt=""
                            onClick={()=>viewImage(image , i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
    </div>

    </>
  );
}

