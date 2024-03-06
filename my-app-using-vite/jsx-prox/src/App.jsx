import Greeting from "./Greetings";
import DataFetch from "./LearningDataFetch";
import Header from "./Header";
import ChangeEvent from "./MyChangeEvent";
import MyClickEvent from "./MyClickEvent";
import Navbar from "./Nav";
import Application_useState_n_useeffect from "./Learning useEffect";
function App(){
  const taskList=["apple","Mango","Litchi"];
  return(
    <div>
    
    <DataFetch/>
    </div>
  );
}

export default App;


//Part of return for some othe components

// {/* <Header />
//     <Navbar/> */}
//     {/* <Greeting firstName="Johny" lastName="Dep"/>
//     <Greeting firstName="Ricky" lastName="Point"/> */}
//     {/* <ul>
//     {taskList.map((task)=>{
//       <li>{task}</li>;
//     })
//     }
//     </ul> */}
//     {/* <MyClickEvent/>
//     <ChangeEvent/>
//     <Application_useState_n_useeffect/> */}




