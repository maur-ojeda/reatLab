
//constantes para los turnos
const TURNS = {
  X:'x',
  O:'o'
}

//dibujamos el tablero una grilla de 3X3
const board = Array(9).fill(null)

/*
##componente de cada cuadrado
children mostrará x /o
updateBoard actualizará el tablero
index: para saber que cuadrado es

*/
const Square = ({children, updateBoard, index}) => {
  return (
    <div className="square">{children}</div>
  ) 
}



function App() {
  // se crea un estado para saber el turno de X u O

  //https://youtu.be/qkzcjwnueLA?si=wmvKpHRMLhauXGeW&t=626
  return (
    <main className="board">
          <section className="game">
        
        {
          /* se usa para renderizar arrays map*/           
          
              
                board.map((_,index)=>{
                  return(
                    <Square key={index} index={index}>{index}</Square>
                  )
                })
               
          
        }
        
      </section>
  </main>
  )
}

export default App
