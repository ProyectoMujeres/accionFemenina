import React,{useState} from "react";
import { CategoryItem,Input, } from "../../../../ Category";
export default function CategoryList(props) {
// Variable de filtro de Categorias //
  const  [filter,setfilter ] = useState ('');

  return (
    <section>{ props.list
    .filter(item =>item.Categoryname.includes(this.state.filter))
    .map(item => <CategoryItem key={item.id} name={item.name} />)}
  
    <div>
      <Input hChange={this.handleChange.bind(this)} />
      <ul>{CategoryList}</ul>
    </div>
    </section>
  );
}


/*class  CategoryList extends React.Component{
    constructor(props){
      super(props);
      this.state = { filter: '' };
    }
    handleChange(value, e){
      this.setState({filter: value});
    }
    render(){
      const Category = this.props.list
        .filter(item =>item.Categoryname.includes(this.state.filter))
        .map(item => <CategoryItem key={item.id} name={item.name} />);
      
      return (
        <div>
          <Input hChange={this.handleChange.bind(this)} />
          <ul>{CategoryList}</ul>
        </div>
      );
    }
  }*/
