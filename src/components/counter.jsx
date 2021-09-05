import React, { Component } from 'react';

class Counter extends Component {
    

    styles ={
        fontSize : 20,
        fontWeight : 'bold'

    };


    render() { 
        const { onDecrement, onDelete, onIncrement, onReset,item} = this.props;
        console.log('props',this.props)

        return (
            <>
            
                <span style={{fontSize : 20,fontWeight : 'bold'}} className={this.getBadgeClasses()}>{this.formatCount() }</span>
                <button  style={{margin : 10}} onClick={()=>onIncrement(item)} className='btn btn-secondary btn-sm '>Increment</button>
                <button style={{margin : 10}} onClick={()=>onDecrement(item)} className='btn btn-secondary btn-sm '>Decrement</button>
                <button style={{margin : 10}} onClick={()=>onDelete(item.id)} className='btn btn-danger btn-sm '>Delete</button>
            </>
        );
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes = (this.props.item.count == 0) ? classes + 'warning' : classes + 'primary';
        // console.log('classes=', classes);
        return classes;
        
    }

    formatCount()
    {
        const{count} = this.props.item;
        return count == 0 ? 'zero' : count;
    }
    
}
 
export default Counter;