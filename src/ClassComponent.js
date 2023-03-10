import React, { Component } from 'react'

class ClassComponent extends Component{

    constructor(props) {
        super(props)
        this.state = {count:0,firstname:'Peace'};
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase(){
        this.setState((currentvalue)=>({
            ...currentvalue, 
            count:currentvalue.count+1
        }));
    }

    decrease(){
        this.state.count > 0 ?
        this.setState((currentvalue)=>({
            ...currentvalue,
            count:currentvalue.count > 0 && currentvalue.count -1
        })):alert('upto 0')
    }


    render() {
        return(
            <>
                <h3 className='text-2xl m-2'>{this.state.count}</h3>
                This is a class component    
                <button onClick={this.increase} className='border rounded outline-none hover:shadow mx-2 p-2'>Increase</button>
                <button onClick={this.decrease} className='border rounded outline-none hover:shadow mx-2 p-2'>Decrease</button>
            </>
        )
    }
}

export default ClassComponent