const num = parseInt(prompt("입력"),10);
if(num==1){
    console.log("NO");
}
else {
    let swc = true;
    for(let i=2;i<num;i++){
        if(num%i==0) {
            swc=false;
            break;
     }
    }
    if(swc) console.log("YES");
    else console.log("NO");
}