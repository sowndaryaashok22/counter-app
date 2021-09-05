import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
        const { onDecrement, onDelete, onIncrement, onReset,items} = this.props;
        return ( 
            <div>
                <button  style={{margin : 10}} onClick={onReset} className='btn btn-secondary btn-sm '>Reset</button>
                {items.map((item) => 
                    <div>
                        <Counter 
                            key={item.id}  
                            onDelete={onDelete} 
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            item ={item} 
                        >
                        </Counter>
                    <br/></div>
                )}
            </div>
          );
    }
}
 
export default Counters;