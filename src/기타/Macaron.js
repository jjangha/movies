//Macaron.js

//클래스형 컨포넌트rce
// import React, { Component } from 'react'

// class Macaron extends Component {
//   render() { //화면에 그려지는 것
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron

//함수형 컴포넌트 rfce
import React from 'react'

// function Macaron(props) {
//   console.log(props)
//   return (
//     <div>
//       <h1>No.{props.propsid}</h1>
//       <h2>Name:{props.propsname}</h2>
//       <img src={props.propsimage} alt="" width={200} height={200}/>
//     </div>
//   )
// }

// 

function Macaron({propsname, propsid, propsimage}) { //구조분해할당 형태로 바로 내보냄
  return (
    <div>
      <h1>No.{propsid}</h1>
      <h2>Name:{propsname}</h2>
      <img src={propsimage} alt="" width={200} height={200}/>
    </div>
  )
}

export default Macaron