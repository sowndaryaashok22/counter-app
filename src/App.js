import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {
  
  state = {  
    items : [
        {id:1, name:'milk', count : 1},
        {id:2, name:'coffee', count : 8},
        {id:3, name:'tea', count : 17},
        {id:4, name:'hot chocolate', count : 41}
    ]
}

handleReset = () => {
    console.log("reset is clicked");
    const resetItems = this.state.items.map(item =>{
        item.count = 0;
        return item;
    })

    this.setState({items : resetItems})
    console.log(this.state.items)
}

handleIncrement = (item) => {
   console.log('increment button is clicked', item);
   const index = this.state.items.indexOf(item);
  //   console.log(index);
   const updatedItems = [...this.state.items];
   updatedItems[index].count = updatedItems[index].count + 1;
   this.setState({items:updatedItems})
}

handleDecrement = (item) => {
    console.log('decrement button is clicked', item);
    const index = this.state.items.indexOf(item);
    //console.log(index);
    const updatedItems = [...this.state.items];
    updatedItems[index].count = updatedItems[index].count - 1;
    this.setState({items:updatedItems})
}


handleDeleteItem = (itemId ) => {
    console.log("item is deleted",itemId);
    const newItems = this.state.items.filter((item)=> item.id !== itemId)
    this.setState({items : newItems})
}

render() { 

  const totalItems = this.state.items.filter(item => item.count > 0)
  console.log('totalitems', totalItems);

  return ( 
    <>
    <NavBar 
      totalItems={totalItems.length}
    />
    <main className='container'>
      <Counters
        onDelete={this.handleDeleteItem}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
        items={this.state.items}
      />
    </main>
  </>
   );
}

}

export default App;
