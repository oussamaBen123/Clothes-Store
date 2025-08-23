import React from "react";
import Contenu from "./contenu";
import BeforeLast from "./BeforeLast";
import LatestCollection from "./LatestCollection";
import Footer from "../Footer";
 
export default function Global(){

   return(
      <React.Fragment>
         <Contenu />
         <LatestCollection/>
         <BeforeLast/>
      </React.Fragment>
   )
}