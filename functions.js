const { default: axios } = require("axios");

const functions={
add:(num1,num2)=>num1+num2,
isNull:()=>null,
checkValue:x=>x,
createUser:()=>{
    const user={firstName:"Munnawar"};
    user["lastName"]="Adeeb"
    return user;
},
fetchData:()=>{
    axios.get("https://jsonplaceholder.typicode.com/users/2").then(res=>res.data).catch(error=>error)
}
}
module.exports=functions;