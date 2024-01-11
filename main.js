document.write("59. to extract the first half of a even string."+"<br>");
function test59(str){
    if(str.length%2==0){
        return str.substring(0,str.length/2);
    }
    return str;
}
document.write("The string :sanjeev , Ans :"+test59("sanjeev")+"<br>");
document.write("The string :mariya , Ans :"+test59("mariya")+"<br><br>");