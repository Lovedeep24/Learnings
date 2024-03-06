const root=document.getElementById("root");

//---------------------FUNCTIONAL COMPONENT BELOW---------------------------------
// function HelloWorld(){
//     return React.createElement(
//         "h1",null,"Hello react"
//     );
// }
//--------------------------------------------------------------------------------

//using BABEL will convert this code from JSX TO React.CreateElement


function Navbar()
{
    return <h2>Navbar</h2>
}
function Images()
{
    return <h2>Images!</h2>
}

function Hello(){
    return(
    <div>
        <h1>Hello React <span className="heading"> what's up...</span>
        </h1>
        <Navbar />
        <Images />
    </div>   
    );
}
ReactDOM.createRoot(root).render(<Hello />);