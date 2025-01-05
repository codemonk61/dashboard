import React from 'react'

const styles = `
 .wrapper{
   display: flex;
   flex-direction: column;
   gap: 4px;
   flex-shrink: 0;
 }
  .circle{
   height: 5px;
   width: 5px;
   background: lightgrey;
   border-radius: 50%;
    flex-shrink: 0;
  }
`

const ThreeDot = () => {

  return (
    <>
    <style>
        {styles}
    </style>
    <div className='wrapper'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
    </div>
    </>
  )
}

export default ThreeDot