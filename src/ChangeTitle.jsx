import { useEffect, useState } from "react";




const ChangeTitle = () => {

        const [title, setTitle] = useState("Final - Front 3 - Camada 1: Jorge Rivera & Tomas Tozzi.");

        useEffect(      (  )      =>       {
                document.title = title;
        } , [title]);


  return (
    <div/>
  )
}

export default ChangeTitle