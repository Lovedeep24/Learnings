//Creating a promise....
function foodPromise()
{
    return new Promise((resolve,reject)=>{
    const isfoodcooked=false;
    if(isfoodcooked)
    {
        resolve("Food is cooked...");
    }
    else{
        reject("Food is not cooked...");
    }
});
}
export default foodPromise;
