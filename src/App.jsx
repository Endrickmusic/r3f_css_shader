import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color } from "three";
import './index.css';
import MovingPlane from './MovingPlane.jsx'



export default function Scene (){
  return (
    <>
      <div className='container'>
        <div className='item_2'>1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam consequatur iste perferendis dignissimos praesentium quae quam ut libero necessitatibus quibusdam, cumque numquam quaerat vero impedit tempore. Iure, quisquam illum.</div>
        <div className='item_1'>2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, provident debitis veritatis non nulla expedita voluptatem quae repellendus sint fugiat quis ipsum, quisquam incidunt. Neque perferendis sequi natus accusamus possimus!</div>
        <div className='item_2'>3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum iure, natus itaque ratione quo aspernatur, accusamus, repudiandae fugit repellendus fugiat sapiente quisquam sed sint voluptatum! Magnam accusamus non ipsam.</div>
        <div className='item_3'>4</div>
        <div className='item_3'>5: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate provident maxime ut laboriosam porro eum ratione asperiores, itaque minima, nihil nemo dignissimos distinctio dolores deleniti. Natus, saepe. Accusantium, officiis voluptatum?</div>
        <div className='item_1'>6</div>
        <div className='item_1'>7</div>
        <div className='item_1'>8</div>
        <div className='item_1'>9: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel sint porro officiis aliquid molestias pariatur consequatur, distinctio amet labore corrupti hic saepe beatae in quod illo quae ratione at.</div>
        <div className='item_2'>10: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam consequatur iste perferendis dignissimos praesentium quae quam ut libero necessitatibus quibusdam, cumque numquam quaerat vero impedit tempore. Iure, quisquam illum.</div>
        <div className='item_1'>11: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, provident debitis veritatis non nulla expedita voluptatem quae repellendus sint fugiat quis ipsum, quisquam incidunt. Neque perferendis sequi natus accusamus possimus!</div>
        <div className='item_2'>12: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum iure, natus itaque ratione quo aspernatur, accusamus, repudiandae fugit repellendus fugiat sapiente quisquam sed sint voluptatum! Magnam accusamus non ipsam.</div>
        <div className='item_3'>13</div>
        <div className='item_3'>14: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate provident maxime ut laboriosam porro eum ratione asperiores, itaque minima, nihil nemo dignissimos distinctio dolores deleniti. Natus, saepe. Accusantium, officiis voluptatum?</div>
        <div className='item_1'>15</div>
        <div className='item_1'>16</div>
        <div className='item_1'>17</div>
        <div className='item_1'>18: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel sint porro officiis aliquid molestias pariatur consequatur, distinctio amet labore corrupti hic saepe beatae in quod illo quae ratione at.</div>
      </div>
      <Canvas camera={{ position: [1.0, 1.5, 1.0] }}>
        <MovingPlane />
        {/* <axesHelper /> */}
        {/* <OrbitControls /> */}
      </Canvas>
      
    </>
  )
}


