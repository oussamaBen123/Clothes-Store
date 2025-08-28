import React from "react";
import Contenu from "./Contenu";
import BeforeLast from "./BeforeLast";
import LatestCollection from "./LatestCollection";
 
export default function Global(){

   return(
      <React.Fragment>
         <Contenu />
         <LatestCollection/>
         <BeforeLast/>
      </React.Fragment>
   )
}