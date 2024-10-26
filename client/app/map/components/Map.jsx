"use client"

import React, { useState } from 'react';
import generateInterpolatedGrid from './interpolategrid';
import gradient from './gradient';
import dot from './dot';

function getShadeFromValue(value, color = 'blue') {
  // Clamp the value to ensure it's between 0 and 1
  const clampedValue = Math.min(Math.max(value, 0), 1);

  // Define base hues for primary colors
  const hues = {
    red: 0,
    green: 120,
    blue: 240,
    purple: 270,
    yellow: 60,
    orange: 30,
    pink: 300
  };

  // Set the hue based on the color input, defaulting to blue
  const hue = hues[color.toLowerCase()] || hues['blue'];

  // Adjust lightness to give 0.3 a light shade and 0.7 a darker shade
  const lightness = 85 - clampedValue * 50; // Range from 85% (light) to 35% (dark)

  return `hsl(${hue}, 100%, ${lightness}%)`;
}

function generateRandomGrid(n, m) {
  const grid = Array.from({ length: n }, () => 
    Array.from({ length: m }, () => Math.random())
  );
  return grid;
}



const Map = ({v = 20, color = "blue" }) => {
  let mumbaiMatrix = Extract from multisource_bfs.txt
  v = extract from bert

  oldgrid = dot(mumbaiMatrix, v)

  console.log(
    "oldgrid: ", oldgrid
  )

  let interpolate = 20
  v = v / interpolate

  let grid = generateInterpolatedGrid(oldgrid, interpolate);
  // v*=10
  // grid = oldgrid

  console.log("out")

  // let grid = generateRandomGrid(n, m)

  // return(
  //   <div className="flex">
  //     {grid.map((row, i) => {
  //       return (
  //         <div key={i} style={{ display: "flex" }}>
  //           {row.map((cell, j) => {
  //             return (
  //               <div
  //                 key={j}
  //                 style={{
  //                   width: v,
  //                   height: v,
  //                   backgroundColor: getShadeFromValue(cell, color),
  //                   // border: "1px solid black",
  //                   display: "flex",
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   color: "black",
  //                 }}
  //               >
            
  //               </div>
  //             );
  //           })}
  //         </div>
  //       );
  //     })}
  //   </div>
  // )

  return(
    <div>
       {grid.map((row, i) => {
          return (
            <div key={i} style={{ display: "flex" }}>
              {row.map((cell, j) => {
                return (
                  <div
                    key={j}
                    style={{
                      width: v,
                      height: v,
                      backgroundColor: getShadeFromValue(cell, color),
                      // border: "1px solid black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
              
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  )
};

export default Map;
