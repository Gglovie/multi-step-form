var step1= document.querySelector(".btn1");
step1.style.color = 'hsl(206, 94%, 87%)';

function validateForm(){
    var fname = document.getElementById('fname');
    var email = document.getElementById('email');
    var p_num = document.getElementById('p_num');
    var container = document.querySelector('.right-side');
    var container2 = document.querySelector('.right-side2');
    var step2= document.querySelector(".btn2");
    var step1= document.querySelector(".btn1");

    var num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    var mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    breakme: if(fname.value !="" && email.value !="" && p_num.value !=""){
        container2.style.display = 'block';
        container.style.display = 'none';
        step2.style.backgroundColor = 'hsl(206, 94%, 87%)';
        step2.style.color = 'hsl(213, 96%, 18%)';
        step1.style.color = 'white';
        step1.style.backgroundColor = 'transparent';
        return true;
    }
    else if(fname.value =="" && email.value =="" && p_num.value ==""){
        document.querySelector('.fname1').style.color = "red";
        document.querySelector('.email1').style.color = "red";
        document.querySelector('.p_num1').style.color = "red";
        fname.style.borderColor = 'red';
        email.style.borderColor = 'red';
        p_num.style.borderColor = 'red';
        break  breakme;
    }
    else if(fname.value =="" && email.value ==""){
        document.querySelector('.fname1').style.color = "red";
        document.querySelector('.email1').style.color = "red";
        fname.style.borderColor = 'red';
        email.style.borderColor = 'red';
        break  breakme;
    }
    else if(email.value =="" && p_num.value ==""){
        document.querySelector('.email1').style.color = "red";
        document.querySelector('.p_num1').style.color = "red";
        email.style.borderColor = 'red';
        p_num.style.borderColor = 'red';
        break  breakme;
    }
    else if(fname.value =="" && p_num.value ==""){
        document.querySelector('.fname1').style.color = "red";
        document.querySelector('.p_num1').style.color = "red";
        fname.style.borderColor = 'red';
        p_num.style.borderColor = 'red';
        break  breakme;
    }
    else if(p_num.value ==""){
        p_num.style.borderColor = 'red';
        document.querySelector('.p_num1').style.color = "red";
        break  breakme;
    }
    else if(fname.value ==""){
        fname.style.borderColor = 'red';
        document.querySelector('.fname1').style.color = "red";
        break  breakme;
    }
    else if(email.value =="" || !email.match(mail) ){
        email.style.borderColor = 'red';
        document.querySelector('.email1').style.color = "red";
        break  breakme;
    }
    else{
        alert('There is something wrong with this webpage');
    }
}
var timeframe;
function unchecked(checked){
    var checker= document.querySelector("#switch");
    var monthly= document.querySelector(".one");
    var yearly= document.querySelector(".two");
    var free= document.querySelector(".free");
    var free12= document.querySelector(".twelve");
    var free15= document.querySelector(".fifteen");
    var yr1= document.querySelector(".yr1");
    var yr2= document.querySelector(".yr2");
    var yr3= document.querySelector(".yr3");
    if(checked != checker.checked){
        timeframe = "monthly";
        monthly.style.color = 'hsl(213, 96%, 18%)';
        yearly.style.color = 'hsl(231, 11%, 63%)';
        free.style.display = 'none';
        free12.style.display = 'none';
        free15.style.display = 'none';
        yr1.innerHTML="$9/mo";
        yr2.innerHTML="$12/mo";
        yr3.innerHTML="$15/mo";
    }
    return timeframe = 'monthly';
}
function checkedFunc(checked){
    var checker= document.querySelector("#switch");
    var monthly= document.querySelector(".one");
    var yearly= document.querySelector(".two");
    var free= document.querySelector(".free");
    var free12= document.querySelector(".twelve");
    var free15= document.querySelector(".fifteen");
    var yr1= document.querySelector(".yr1");
    var yr2= document.querySelector(".yr2");
    var yr3= document.querySelector(".yr3");
    if(checked = checker.checked){
        yearly.style.color = 'hsl(213, 96%, 18%)';
        monthly.style.color = 'hsl(231, 11%, 63%)';
        free.style.display = 'block';
        free12.style.display = 'block';
        free15.style.display = 'block';
        yr1.innerHTML="$90/yr";
        yr2.innerHTML="$120/yr";
        yr3.innerHTML="$150/yr";
        timeframe = "yearly";
    }
    return timeframe;
}
function gobackFunc(){
    var rightside1 = document.querySelector('.right-side');
    var rightside2 = document.querySelector('.right-side2');
    var step2= document.querySelector(".btn2");
    var step1= document.querySelector(".btn1");
    rightside1.style.display = 'block';
    rightside2.style.display = 'none';
    step1.style.backgroundColor = 'hsl(206, 94%, 87%)';
    step1.style.color = 'hsl(213, 96%, 18%)';
    step2.style.color = 'white';
    step2.style.backgroundColor = 'transparent';
}
var hidden =document.querySelector(".hidden");
function setvalue1(){
    hidden= 'Arcade';
    
}
function setvalue2(){
    hidden= 'Advanced';
}
function setvalue3(){
    hidden= 'Pro';
}
function gotopage3(){
    var rightside2 = document.querySelector('.right-side2');
    var rightside3 = document.querySelector('.right-side3');
    var pickyr1= document.querySelector('.pickyr1');
    var pickyr2= document.querySelector('.pickyr2');
    var pickyr3= document.querySelector('.pickyr3');
    var step2= document.querySelector(".btn2");
    var step3= document.querySelector(".btn3");
    if(hidden == null){
        alert('Select your plan');
    }
    else{
        rightside3.style.display= 'block';
        rightside2.style.display= 'none';
        step2.style.backgroundColor = 'transparent';
        step2.style.color = 'white';
        step3.style.backgroundColor = 'hsl(206, 94%, 87%)';
        step3.style.color = 'hsl(213, 96%, 18%)';
        if(timeframe == 'yearly'){
            pickyr1.innerHTML='+$10/yr';
            pickyr2.innerHTML='+$20/yr';
            pickyr3.innerHTML='+$20/yr';

        }
        else{
            pickyr1.innerHTML='+$1/mo';
            pickyr2.innerHTML='+$2/mo';
            pickyr3.innerHTML='+$2/mo';
        }
    }  

}
function gobackFunc2(){
    var rightside1 = document.querySelector('.right-side2');
    var rightside2 = document.querySelector('.right-side3');
    var step2= document.querySelector(".btn2");
    var step3= document.querySelector(".btn3");
    rightside1.style.display = 'block';
    rightside2.style.display = 'none';
    step3.style.backgroundColor = 'transparent';
    step3.style.color = 'white';
    step2.style.backgroundColor = 'hsl(206, 94%, 87%)';
    step2.style.color = 'hsl(213, 96%, 18%)';
}
function uncheckedFunc(){
    var addon1 = document.querySelector('.addon1');
    var addon2 = document.querySelector('.addon2');
    var addon3 = document.querySelector('.addon3');
    var label = document.querySelectorAll('.triplecheck');
    var addprice1 = document.querySelector('.addon-price1');
    var addprice2 = document.querySelector('.addon-price2');
    var addprice3 = document.querySelector('.addon-price3');

    if(!label[0].checked){
        addon1.innerHTML='';
        addprice1.innerHTML= '';
    }
    if(!label[1].checked){
        addon2.innerHTML='';
        addprice2.innerHTML= '';
    }
    if(!label[2].checked){
        addon3.innerHTML='';
        addprice3.innerHTML= '';
    }
}
function gotopage4(){
    var addonprice1;
    var addonprice2;
    var addonprice3;
    var total;
    var total1;
    var total2;
    var total3;
    var plan_price;
    var rightside1 = document.querySelector('.right-side4');
    var rightside2 = document.querySelector('.right-side3');
    var header = document.querySelector('#bill-button');
    var price = document.querySelector('.price');
    var addons = document.querySelector('.addons');
    var addon1 = document.querySelector('.addon1');
    var addon2 = document.querySelector('.addon2');
    var addon3 = document.querySelector('.addon3');
    var label = document.querySelectorAll('.triplecheck');
    var addprice1 = document.querySelector('.addon-price1');
    var addprice2 = document.querySelector('.addon-price2');
    var addprice3 = document.querySelector('.addon-price3');
    var totalprice = document.querySelector('.totalprice');
    var step3= document.querySelector(".btn3");
    var step4= document.querySelector(".btn4");
    rightside1.style.display = 'block';
    rightside2.style.display = 'none';
    step3.style.backgroundColor = 'transparent';
    step3.style.color = 'white';
    step4.style.backgroundColor = 'hsl(206, 94%, 87%)';
    step4.style.color = 'hsl(213, 96%, 18%)';
    header.innerHTML= hidden;
    if(timeframe== 'yearly'){
        addonprice1 = '+$10/yr';
        addonprice2 = '+$20/yr';
        addonprice3 = '+$20/yr';
        total1 = 10;
        total2 = 20;
        total3 = 20;
        if(hidden=='Arcade'){
            price.innerHTML= '$90/yr';
            plan_price = 90;
        }
        else if(hidden=='Advanced'){
            price.innerHTML= '$120/yr';
            plan_price = 120;
        }
        else if(hidden=='Pro'){
            price.innerHTML= '$150/yr';
            plan_price = 150;
        }
    }else{
        addonprice1 = '+$1/mo';
        addonprice2 = '+$2/mo';
        addonprice3 = '+$2/mo';
        total1 = 1;
        total2 = 2;
        total3 = 2;
        if(hidden=='Arcade'){
            price.innerHTML= '$9/mo';
            plan_price = 9;
        }
        else if(hidden=='Advanced'){
            price.innerHTML= '$12/mo';
            plan_price = 12;
        }
        else if(hidden=='Pro'){
            price.innerHTML= '$15/mo';
            plan_price = 15;
        }

    }
    if(label[0].checked && label[1].checked && label[2].checked){
        addon1.innerHTML='Online service';
        addon2.innerHTML='Larger storage';
        addon3.innerHTML='Customizable  profile';
        addprice1.innerHTML= addonprice1;
        addprice2.innerHTML= addonprice2;
        addprice3.innerHTML= addonprice3;
        total = total1+total2+total3;
    }
    else if(label[0].checked && label[1].checked){
        addon1.innerHTML='Online service';
        addon2.innerHTML='Larger storage';
        addprice1.innerHTML= addonprice1;
        addprice2.innerHTML= addonprice2;
        total = total1+total2;
    }
    else if(label[1].checked && label[2].checked){
        addon2.innerHTML='Larger storage';
        addon3.innerHTML='Customizable  profile';
        addprice3.innerHTML= addonprice3;
        addprice2.innerHTML= addonprice2;
        total = total2+total3;
    }
    else if(label[0].checked && label[2].checked){
        addon1.innerHTML='Online service';
        addon3.innerHTML='Customizable  profile';
        addprice3.innerHTML= addonprice3;
        addprice1.innerHTML= addonprice1;
        total = total1+total3;
    }
    else if(label[0].checked){
        addon1.innerHTML='Online service';
        addprice1.innerHTML= addonprice1;
        total = total1;
    }
    else if(label[1].checked){
        addon2.innerHTML='Larger storage';
        addprice2.innerHTML= addonprice2;
        total = total2;
    }
    else if(label[2].checked){
        addon3.innerHTML='Customizable  profile';
        addprice3.innerHTML= addonprice3;
        total = total3;
    }
    else{
        total = 0;
    }
    total = total + plan_price;
    var mo_yr;
    if(total>=80){
        mo_yr='yr'
    }
    else{
        mo_yr='mo'
    }
    totalprice.innerHTML= '+$'+String(total)+'/'+mo_yr

}
function change(){
    var rightside1 = document.querySelector('.right-side2');
    var rightside2 = document.querySelector('.right-side4');
    var step2= document.querySelector(".btn2");
    var step4= document.querySelector(".btn4");
    rightside1.style.display = 'block';
    rightside2.style.display = 'none';
    step4.style.backgroundColor = 'transparent';
    step4.style.color = 'white';
    step2.style.backgroundColor = 'hsl(206, 94%, 87%)';
    step2.style.color = 'hsl(213, 96%, 18%)';
}
function gobackFunc3(){
    var rightside1 = document.querySelector('.right-side3');
    var rightside2 = document.querySelector('.right-side4');
    var step3= document.querySelector(".btn3");
    var step4= document.querySelector(".btn4");
    rightside1.style.display = 'block';
    rightside2.style.display = 'none'; 
    step4.style.backgroundColor = 'transparent';
    step4.style.color = 'white';
    step3.style.backgroundColor = 'hsl(206, 94%, 87%)';
    step3.style.color = 'hsl(213, 96%, 18%)';
}
function confirm(){
    var rightside1 = document.querySelector('.right-side5');
    var rightside2 = document.querySelector('.right-side4');
    var step4= document.querySelector(".btn4");
    step4.style.backgroundColor = 'transparent';
    step4.style.color = 'white';
    rightside1.style.display = 'block';
    rightside2.style.display = 'none'; 
}
