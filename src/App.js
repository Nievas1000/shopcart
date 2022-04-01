import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/Title';

class App extends Component{
  state = {
    productos:[
      {name:'Logitech G Series Lightsync G203',price:2500,img:'/productos/logitechg203.jpg'},
      {name:'Redragon Kumara K552 QWERTY',price:4500,img:'/productos/reddragon.jpg'},
      {name:'Mouse Pad Logitech G240',price:1700,img:'/productos/mousepad.jpg'}
    ],
    carro:[],
    carroVisible:false,
  }

agregarAlCarro = (producto) =>{
  const {carro}=this.state;
  if(carro.find(x => x.name === producto.name)){
    const newCarro = carro.map(x => x.name === producto.name ? ({
      ...x,
      cantidad: x.cantidad +1,
    })
    : x)
    return this.setState({carro:newCarro})
  }
  return this.setState({
    carro: this.state.carro.concat({
      ...producto,
      cantidad:1,
    })
  })
}

mostrarCarro = () => {
  if(!this.state.carro.length){
    return
  }
  this.setState({carroVisible: !this.state.carroVisible})
}

  render(){
    const {carroVisible} = this.state;
    return(
      <div>
        <Navbar carro = {this.state.carro} carroVisible = {carroVisible} mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />  
        </Layout>
      </div>
    )
  }
}

export default App;
