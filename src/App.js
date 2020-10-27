import React,{Component} from 'react'
import Courseform from './components/courseform/courseform'
import Courselist from './components/courselist/couselist'

class App extends Component{
   
  // the main state 
  state={
    courses :[
      {name:'HTML'},
      {name:'CSS'},
      {name:'JavaScript'}

    ],
    current :''
  }
   //update courses function
   updateCourse = (e) =>{
     this.setState({
       current : e.target.value
     })
   }

  // add courses function
  addCourse = (e) =>{
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name : current})
    this.setState({
      courses,
      current:''
    })
  }



  //delet course function
  deletCourse = (index) =>{
  let courses= this.state.courses;
  courses.splice(index,1);
  this.setState({
    courses
  })
  }


  //edit courses 
  editCourse = (index,value) =>{
    let courses= this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }






   render(){

    //courses recalling in map function
    const {courses} =this.state;
    
    // map has tw parameters : course & index
    const courseList = courses.map ((course,index)=>{
      return(
        <Courselist details ={course} key={index}  deletcourses={this.deletCourse} index={index}  editCourses={this.editCourse}/>    //return state through props "details"
      )
    
    })

      return (
      <section className="App">
        <h2> Add Courses</h2>
      
      <Courseform current={this.state.current}   updatecourse={this.updateCourse}  addcourse={this.addCourse}/>

      <ul> 
        {courseList}
      </ul>

      </section>
    );
}
}
export default App;
