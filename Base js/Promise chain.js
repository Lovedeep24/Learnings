Promise.resolve("Hey....")
.then((val)=>{
    console.log(val);
    return val + "hi..."
}).then((val)=>{
    console.log(val);
    return val + "what's up...."
}).then((val)=>{
    console.log(val);
})