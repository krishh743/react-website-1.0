// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// // import Button from "../../../components/button";

// function FirstPage() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const redirectToURL = () => {
//     window.open(
//       "https://play.google.com/store/apps/details?id=com.zebralearn.studioapp&pli=1",
//       "_blank"
//     );
//   };

//   return (
//     <div className="first-page-main">
//       <div className="px-3 mx-2">
//         <div className=" d-flex align-items-center justify-content-center gap-3  flex-column">
//           <h1 className="big-heading">
//             Publish a book that transforms your expertise & impacts millions of
//             learners.
//           </h1>
//           <p className="first-subheading">
//             All ZebraLearn books started with an idea. It’s your turn to bring
//             your idea to the table and write a book with us!
//           </p>
//           <Button
//             onClick={redirectToURL}
//             variant="primary"
//             style={{ height: 46, width: 140 }}
//           >
//             Write with us
//           </Button>
//         </div>
//         <div className="main-container-sliding">
//           <div className="first-div">
//             <div className="second-div">
//               <video
//                 className="video-sliding"
//                 // height={900}
//                 width={1600}
//                 autoPlay
//                 muted
//                 playsInline
//                 src={
//                   "https://res.cloudinary.com/imagist/video/fetch/q_auto/f_auto/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fbackground-video.mp4"
//                 }
//               />
//             </div>
//             <div className="third-div">
//               <div className="fourth-div"  style={{
//                     // transform: `translateY(${scrollPosition+20}px)`,
//                     transform: `translateY(calc(${
//                        scrollPosition
//                     }px))`,
//                   }}>
//                 <img
//                   src={
//                     "https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1536/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png"
//                   }
//                   alt=""
                 
//                 />
//               </div>
//               <div
//                 className="fifth-div"
//                 style={{
//                   translate: "none",
//                   rotate: "none",
//                   scale: "none",
//                   transform: " translate(0px, 0px)",
//                 }}
//               >
//                 <img
//                   // width={458}
//                   // height={868}
//                   src={"/images/mobile_slides.png"}
//                   alt=""
//                   style={
//                     {
//                       // transform: `translateY(${scrollPosition+20}px)`,
//                       // transform: `translateY(calc(${550.889 - scrollPosition}px))`,
//                     }
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FirstPage;
export{}
