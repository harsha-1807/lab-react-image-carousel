import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { RoundedCornerSharp } from "@mui/icons-material";

// implement the class below
class Carousel extends Component {
  constructor(){
    super()
    // set an initial state
    this.state = {
        currIndex:0
    }
  }

  increasecount =()=>{
    console.log("increase count")
    if (this.state.currIndex >= images.length - 1){
        this.setState({
            currIndex:0
        })
    }else{
        this.setState({
            currIndex : this.state.currIndex + 1

        })
        
    }
  }
  decreasecount =()=>{
    console.log("decrease count")
    // this.setState({
    //     currIndex : this.state.currIndex - 1
    // })
    if (this.state.currIndex == 0 ){
        this.setState({
            currIndex:2
        })
    }else{
        this.setState({
            currIndex : this.state.currIndex - 1

        })
        
    }
  }


  render(){
    return <>
        {/* <h1>Carousel</h1> */}
        <div className="carouselContainer flex">
            <div className="leftarrow arrowdiv flex" onClick={this.decreasecount}>
                <ArrowBackIosIcon  className="chevron"/>
            </div>
            <h2 className="title">{images[this.state.currIndex].title}</h2>
            <img src={images[this.state.currIndex].img} alt="" />
            <h4 className="text">{images[this.state.currIndex].subtitle}</h4>

        <div className="rightarrow arrowdiv flex" onClick={this.increasecount}>
                <  ArrowForwardIosIcon     className="chevron"/>
        </div>
        </div>
    </>
  }
}

export default Carousel;