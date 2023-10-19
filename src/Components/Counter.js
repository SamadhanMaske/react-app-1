import { Component } from "react";


class Counter extends Component{
    constructor(props){
        super();
        this.state={
            count:0,
        }
    }
    increase(){
        // this.setState({
        //     count:this.state.count+1,
        // },
        // ()=>{
        //     console.log("Count "+this.state.count)
        // }
        // )
        // When we want to uppdate the values based on previous state, we 
        // need to pass prevState as argument
        this.setState((preState)=>({
            count:preState.count+1,
        }))
    }

    render(){
        return(
            <div>
                <div>Count-{this.state.count}</div>
                <button onClick={()=>this.increase()}>Increase</button>
            </div>
        )
    }
}

export default Counter;