import React, { useState, useEffect } from "react";
import axios from "axios";

// axios({
//   url: "http://api.diviven.com/wp-json/wpcom/v2",
// }).then((res) => {
//   console.log(res.endpointes.args.search.description);
// });

export default function TestApi(props) {
  const [testApis, setTest] = useState([]);
  useEffect(() => {
   axios.get('http://api.diviven.com/wp-json/jetpack/v4').then(res=>{
       console.log(res.data .routes);
       setTest(res.data)
   })
   .catch(err=>{console.log(err)})
  }
  );

  // axios.get("http://api.diviven.com/wp-json/wpcom/v2").then((res) => {
  //   setTest(res.data)
  // }

  const onNameChange = (e) => {
    setTest(e.target.vlaue)
  };

  const onNameSubmit = e=>{
    e.preventDefault();
    const user ={
        test:testApis
    };
    // let headers = {
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Headers':'http://api.diviven.com/'
    // }
    // axios.get('https://api.diviven.com/wp-json/jetpack/v4'
    // // // , {headers:{
    // // //   'Content-Type': 'application/json',
    // // //   'Access-Control-Allow-Headers':'http://api.diviven.com/'
    // // // }}

    // ).then(res=>{
    //   // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    //     console.log("form axios :" + res.data);
    // })
  

     axios.get('https://api.diviven.com/wp-json/wpcom/v2').then((res)=>(console.log("from axios" + res.data)))


    fetch("https://api.diviven.com/wp-json/jetpack/v4").then((res)=>(console.log(res)))
  }

  return (
    <div>
      <form onSubmit={onNameSubmit} >
      <input type="text" onChange={onNameChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
