import React, { useRef } from "react";
import "./GridItems.scss"

function GridItems(props) {
   return (
      <ul className="gridItems container">
         {props.list ?
            props.list.map((e, i) => (
               <li className={`${props.className}`} key={i} >
                  <div className="cards__content" onClick={() => onClick(i)}>
                     <div className="cards__content-img">
                        <img src={e.fullPortrait ? e.fullPortrait : e.displayIcon} />
                     </div>

                     <p>{e.displayName}</p>
                     {props.className === "agents" &&
                        <div className="agents__img">
                           <img src={e.fullPortraitV2} alt="" />
                        </div>
                     }
                  </div>

               </li>
            ))
            : "as"
         }
      </ul >
   );
}

export default GridItems;
