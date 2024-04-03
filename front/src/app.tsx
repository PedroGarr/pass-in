interface MyButtonProps{
  texto: string
}

function Mybutton(props: MyButtonProps){
  return <button className="">{props.texto}</button>
}

export function App() {
  return (
    <div>
      <Mybutton texto='Click Here'/>
    </div>
  )
}


 