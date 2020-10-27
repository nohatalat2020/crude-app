import React,{Component,Fragment} from 'react'


class Courselist extends Component{

  //isEdi state
state={
  isEdit:false
}


  renderCourse =()=>{
    return(
      <li>
      <span> {this.props.details.name} </span>
      <button onClick={()=>(this.toggleState())}>  Edit </button>
      <button onClick={()=>(this.props.deletcourses (this.props.index))}> Delet</button>
   </li>
    )
  }


  //isEdit toggle function

  toggleState = () =>{
    let{isEdit} = this.state;
    this.setState ({
      isEdit:!isEdit
    })
  }

  //update course items function 
  updateCourseItem = (e) =>{
    e.preventDefault();
    this.props.editCourses (this.props.index , this.input.value);
    this.toggleState();
  }

  //render update form

  renderUpdateForm = () => {
    return(
      <form onSubmit = {this.updateCourseItem}> 
        <input type="text"  ref={(v) => { this.input= v}} defaultValue= {this.props.details.name}/>
        <button>Update</button>
      </form>
    )
  }
  

render(){
  let{isEdit} = this.state;
  return (
    <Fragment>
       {isEdit ? this.renderUpdateForm(): this.renderCourse()}
    </Fragment>
  );
}
}
export default Courselist;
