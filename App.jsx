import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
    style={{backgroundColor: color ,height:"100vh",width:'100vw'}}
    >
    <div style={{
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "1rem" 
  }}>
    <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.75rem",  
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    paddingLeft: "0.75rem", 
    paddingRight: "0.75rem",
    paddingTop: "0.5rem",  
    paddingBottom: "0.5rem",
    borderRadius: "1rem"    
  }}
    >
      <button 
      onClick={()=> setColor("red")}
      style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"red",
        color:"white",
        }}>Red</button>
        <button 
        onClick={()=> setColor("green")}
        style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"green",
        color:"white",
        }}>Green</button>
        <button 
        onClick={()=> setColor("pink")}
        style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"pink",
        color:"white",
        }}>Pink</button>
        <button 
        onClick={()=> setColor("black")}
        style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"black",
        color:"white",
        }}>Black</button>
        <button 
        onClick={()=> setColor("yellow")}
        style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"yellow",
        color:"white",
        }}>Yellow</button>
        <button
        onClick={()=> setColor("blue")} 
        style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"blue",
        color:"white",
        }}>Blue</button>
        <button 
        onClick={()=> setColor("brown")}
        style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"brown",
        color:"white",
        }}>Brown</button>
        <button 
        onClick={()=> setColor("orange")}
        style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"orange",
        color:"white",
        }}>Orange</button>
        <button 
        onClick={()=> setColor("purple")}
        style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"purple",
        color:"white",
        }}>Purple</button>
        <button 
        onClick={()=> setColor("maroon")}
        style={{
        outline: "none",
        paddingLeft: "1rem",  
        paddingRight: "1rem",
        paddingTop: "0.25rem", 
        paddingBottom: "0.25rem",
        borderRadius: "9999px",
        backgroundColor:"maroon",
        color:"white",
        }}>Maroon</button>
    </div>
  </div>
    </div>
  );
}

export default App

