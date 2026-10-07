let myemail = "amangoogle@gmail.com";

let youremail = myemail ;

youremail = "anuj1820@gmail.com";
console.log(myemail);
console.log(youremail);

// change in copy address  is primitive datatype and it is term of stack memory //

 let userone = {
    email : "amn123@gmail.com",
    upi  : "anuj@ybl.com",
    id  : 132
 }

 let usertwo = userone

 console.log(userone.email);
  console.log(usertwo.email);
   console.log(userone.id);
  console.log(usertwo.id);

  //     copy change in original value  in term of heap memory 
