function HandleChange(e){
    console.log(e.target.value);//This will retunr us the text written in inputbox
}
function ChangeEvent(){
    return(
        <div>
            <input type="text" name="username" id="username" autoComplete="off" onChange={HandleChange}/>
        </div>
    );
}

export default ChangeEvent;