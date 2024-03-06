function handleClick(){
    console.log("clicked");
}
function MyClickEvent(){
    return(
    <div>
    <button onClick={handleClick}>Click me.</button>
    </div>
    );
}
export default MyClickEvent;