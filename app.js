// /*let pricepencil=10;
// let eraserprice=8;
// let output= `The Price of Total:${pricepencil+eraserprice}Rupees.`
// //console.log("The price of total:",pricepencil+eraserprice,"Rupees.");//
// console.log(output);
// //Arithematic Operaors
// let a=10;
// let b=12;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// let age=17;
// console.log(age>=18);
// if(age>=18){
//     console.log("Are You able for Voter")
// }
// else if(age<18) {
//     console.log("Are not able for voting")
// }
// let color="yellow";
// if(color=="red"){
//     console.log("Stoped")
// }
// if(color=="green"){
//     console.log("Lets Moved")
// }
// if(color=="yellow"){
//     console.log("Moved Slowly")
// }*/
// /*let marksurdu=69;
// if(marksurdu=33){
//     console.log("You Are Pass")
//     if(marksurdu<=80){
//         console.log("Grade:O")
//     }
//     else{
//         console.log("Grade : A")
//     }
// }
// else{
//     console.log("Better luck Next Time")
// }*/
// /*let andope=76;
// if(andope>=33 && andope<=80){
//     console.log("Pass")
//     console.log("Grade A+")
// }
// else{
//     console.log("Best of luck for future")
// }*/
// /*let num=12;
// if((num%3==0) || ((num+1==15)&&(num-1==11))){
//     console.log("safe")
// }
// else{
//     console.log("unsafe")
// }
// let str="apple";
// if((str[0]==="a") && (str.length>3)){
//     console.log("Good String")
// }*/
// //Switch statemen
// /*let colour = "green";
// switch(colour){
//     case"red":
//     console.log("Stoped")
//     break;
//     case"yellow":
//     console.log("Moved Slowly")
//     break;
//     case"green":
//     console.log("MOVED") 
//     break;
//     default:
//         console.log("Jiya Bhuttoo")
// }
// let day= prompt ("Enter  numer 1 to 7:");
// switch(day){
//     case 1:
//         console.log("Monday")
//         break;
//         case 2:
//         console.log("Tuesday")
//         break;
//         case 3:
//         console.log("wedensday")
//         break;
//         case 4:
//         console.log("Thursday")
//         break;
//         case 5:
//         console.log("Friday")
//         break;
//         case 6:
//         console.log("Saturday")
//         break;
//         case 7:
//         console.log("Sunday")
//         break;
//         default:*/
//            // alert("Moye Moye")
// //}
//                                                    //error msg
// //console.error("this is a erroe")
//                                                    //warning msg
// //console.warn("this is first and last warning for you")
// /*let F_Name=prompt("Enter Your First Name:")
// console.log(F_Name)
// let names="  M O H S I N  ";
// trim.names()
// console.log(names)*/
// /*let stri="String is have 100 words"
// console.log(stri.toUpperCase());
// console.log(stri.indexOf("100"));*/
// let msg="     help    ";
// console.log(msg.trim(),msg.toUpperCase());
// let apnaname="apna college";
// console.log(apnaname.slice(4,9));
// console.log(apnaname.indexOf("co"));
// console.log(apnaname.replace("apna","our"));
// console.log(apnaname.replace("ll","tt"));
//                                                                   //array
// let students=["Ali","Ahmed","Usman"]
// let mixed=["Usman", 21, true]
// let country=["PAkistan","India","Iran"]
// country.push("China");
//                                                     //Practice 
// let prac=["January","febrarury","March"]                                                    
//                                                  //Concat Method 
// let primary=["Red","Blue","Green"]                                                 
// let secondary=["Pink","White","Sky"]
// let orignal= primary.concat(secondary);
//                                                    //Practice Quesion
// let start=["january","july","march","august"];
// console.log(start);
// start.splice(0,2, "july","june");
// let lan=["c++","java","Js","react"];
//                                                      //constant array(array ko constant bnanan k bd uss per operation kr skty hain)
// const arr=[1,3,4,5,6,7];
// //ptactie Q
// let tictoe=[["x",null,"o"],[null,"x",null],["o",null,"x"]]                                                     
//                                                       for loop   ..(initaillizing; condition;updateing)
 /*for(let i=1; i<=10; i++){
//     console.log(i)
// }*/
// //print odd numer
// for(i=1; i<=15; i=i+2){
//     console.log(i)
// }
// //print even num 1-10
// /*for(i=2;i<=10; i=i+2){
//     console.log(i)
// }*/
// //infinte loop(wo loop jo rukha na)
// /*for(let i=5; i<=50; i=i+5){
//      console.log(i)
// }*/
// /*let n=prompt("write your number");
// n=parseInt(n)     //parseInt use for covrt string to integr
// for(i=n; i<=n*10; i=i+n){
//     console.log(i)
// }
// //Nested Loop 
// for(i=1; i<=10; i++){
//     console.log(i)
//     for(j=1; j<=10; j++){
//         console.log(j)
//     }
// }*/
// // let l=5;
// // while(l>=1){
// //     console.log(l);
// //     l--;
// // }
// // let a=0;
// // while(a<=20){
// //     console.log(a);
// //     a=a+2;
// // }
//                                       //while loop
// // let movie="avatar";
// // let user=prompt("Enter Your Favourite Movie:");
// // while((user!=movie)&&(user!="quiet")){
// //     user=prompt("You are Wrong.Guss Fav Movie:")
// // }
// // if((user==movie)){
// //     console.log(alert("You Guss better"))
// // }
// // else{
// //     console.log(alert("You are quiet succesfully"))
// // }
// //break loop
// let b=1;
// while(b<=10){
//     if(b==6){
//         break;
//     }
//     console.log(b)
//     b++;
// }
// let movie="avatar";
// let user=prompt("Enter Your Favourite Movie:");
// while((user!=movie)){
//     if((user=="quiet")){
//         break;
//     }
//     user=prompt("You are Wrong.Guss Fav Movie:")
// }
// if((user==movie)){
//     console.log(alert("You Guss better"))
// }
// else{
//     console.log(alert("You are quiet succesfully"))
// }
let heros=[
    ["spiderman","ironman","thor"],
    ["aj.khan","rj.khan","h.khan"]
]
for(let i=0; i<heros.length;i++){
    console.log(heros[i])
    for(let j=0; j<heros.length[j]; j++){
        console.log(`j=${j},${heros[i][j]}`)
    }
}
let stu=[
    ["ali",92],["amir",78],["umer",98]
]
for(let i=0; i<stu.length;i++){
    console.log(`info of student# ${i}`)
    for(let j=0; j<stu[i].length; j++){
        console.log(stu[i][j])
    }
}
let fruits=["Apple", "Banana","Orange","Dates"]
for(fruit of fruits){
    console.log(fruit)
}
                                      //Object
let student ={
    Name:"Mohsin",
    Age:21,
    Edu:"Bscs",
    Skills:["Digital MArketing","CCNA","Wordpress Development"]
}   
let twitter={
    Post_Name:"Islamic Knowlege",
    Post_Content:"Islamic",
    Post_Like:120,
    Post_Repost:23,
    null:123,               //null is not keyword in object it is as it key as string
}
//Add update value in
twitter.Post_Like=130;
twitter.Retweet;
twitter.Retweet=32;    
delete twitter.Retweet;
                                   //Nested Object(oject in object)
let NewObj={
    Myself:{
        name:"Mohsiin",
        Gender:"Male",
        martial:"Single",
    },
    MyParents:{
        F_name:"Munawar Hussain",
        Prof:"Agriculture",
    }}                                   
    let Class={
        Arham:{
            Gender:"Male",
            Marks:"A",
        },
    Zainab:{
        Gender:"Female",
        Marks:"B+"
    }}
    //Array Of Object
let ClassInfo=[
    {
        Name:"Aman",
        Class:"Tenth",
        Gender:"A+",
    },
    {
        Name:"Aman",
        Class:"Tenth",
        Gender:"A+",
    },
    {
        Name:"Aman",
        Class:"Tenth",
        Gender:"A+",
    }]
    //MAth Oject(Again watch video :   E:\Full Stack Web\Day - 18 (17_07_23)\23. JavaScript (Part 5))
    Math.abs(12);    //astarct value ko print kra gay 
    Math.pow(2,5);   // means 2 ki power 5 print kra gay 32
    Math.floor(5.5)  //value ko round of kr ka print kra gay :: Nearest Smallest Interger Value
    Math.ceil(5.5)   //value ko round of kr ka print kra gay :: Nearest Largest Interger Value ::ceil=ceiling
    Math.random;   //Automatic print unknown random Number 0 to 1 range
//Practice Question
let Practice_Question1=Math.floor(Math.random()*100)+1;
//Question2
let Practice_Question2=Math.floor(Math.random()*5)+1;
//Num arrange i 21 to 32
let Practice_Question3=Math.floor(Math.random()*12)+21;



