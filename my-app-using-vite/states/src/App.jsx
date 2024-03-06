import EventListener from './Events.jsx'
import ButtonAction from './Change.jsx'
const item2=[<p>Apple</p>,<p>Banana</p>,<p>Orange</p>]
// const item3=[];
// for (let item of item2)
// {
//     item3.push(item);
// }
const item3=item2.map((task)=> <li>{task}</li>)
function App()
{
    return (<>
        {/* <ul>{item3}</ul> */}
         {/* <hr />
        // {item2} */}
        {/* <h1>0</h1> */}
        <EventListener/>
        <ButtonAction />
        </>
    );
}
export default App
