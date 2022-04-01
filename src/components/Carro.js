import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import ListaCarro from './ListaCarro'

const styles={
    carro:{
        backgroundColor: '#2359A4',
        color:'white',
        border:'none',
        padding:'15px',
        borderRadius:'10px',
        cursor:'pointer',
    },
    bubble:{
        position:'relative',
        left: 12,
        top:20,
    }
}

class Carro extends Component{
    render(){
        const {carro, carroVisible, mostrarCarro} = this.props;
        const cantidad = carro.reduce((acc, el) =>acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 ? <BubbleAlert value={cantidad}/> : null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {carroVisible ? <ListaCarro carro={carro}/> : null}
            </div>
        )
    }
}

export default Carro;