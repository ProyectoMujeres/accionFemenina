import React, { useState,} from "react";
import "./NewPost.css";

/*Código refactorizado utilizando Hook  añadiendo
 el estado de  un componente de función*/

export default function NewPost() {
  const [text, setText] = useState("");
  /*const [date, setDate] = useState("");
 /*const event =newDate('September 19, 2022 23:15:30');
 event.setMinutes(45);
 console.log(event.getMinutes());
 console.log(event);*/
  return (
    <div className="Container-Post">
    <label htmlFor="categoryitem">Elegir por categoría:</label>
      <select id="categoryitem"> 
        <option value='educacion'>
          <input type='radio' id ='educacion' name="category-item-selected" value='Educación'/>
          <label htmlFor="eduacion">Educación</label>
        </option>
      </select>

      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        cols="40"
        rows="7"
      ></textarea>

      <section className="btn-switch-form-post" id="btn-switch-form-post">
        <button className="btn-switch-form-p" id="btn-switch-form-p">
          Publicar
        </button>
        <button className="btn-switch-form-p" id="btn-switch-form-p">
          Cancelar
        </button>
      </section>
    </div>
  );
}

/*class NewPost extends React.Component{
  constructor (){
    super() 
    this.state={
      texto:"Crear tu publicación"
    }
  }

  alterarTexto = (event) => {
    this.setState({texto:event.target.value});  

    render() 
  return (
    <div className="Container-Pub">
    <input type="text" value="Elegir por categoria"></input>

  <textarea onChange={this.alterarTexto} value ={this.state.texto} cols="20" rows= "5"></textarea>

  <section className='btn-switch-form' id='btn-switch-form'>
           <button className='btn-switch-form-b' id='btn-switch-form-b'>Publicar</button>
            <button className='btn-switch-form-b' id='btn-switch-form-b'>Cancelar</button>
        </section>
        </div>
  )

  }
}

 
export default  NewPost*/
