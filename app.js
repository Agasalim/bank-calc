let kreditBtn = document.querySelector(".kredit_btn");
let emanetBtn = document.querySelector(".emanet_btn");
let kreditDiv = document.querySelector(".kredit");
let emanetDiv = document.querySelector(".emanet");
kreditBtn.onclick = function(){
    kreditDiv.classList.add("visible")
    kreditDiv.classList.remove("hidden")
    emanetDiv.classList.add("hidden")
    emanetDiv.classList.remove("visible")
    kreditBtn.classList.add("selected_btn")
    kreditBtn.classList.remove("non_selected_btn")
    emanetBtn.classList.add("non_selected_btn")
    emanetBtn.classList.remove("selected_btn")
}
emanetBtn.onclick = function(){
    emanetDiv.classList.add("visible")
    emanetDiv.classList.remove("hidden")
    kreditDiv.classList.add("hidden")
    kreditDiv.classList.remove("visible")
    emanetBtn.classList.add("selected_btn")
    emanetBtn.classList.remove("non_selected_btn")
    kreditBtn.classList.add("non_selected_btn")
    kreditBtn.classList.remove("selected_btn")
}
let amountRange = document.querySelector(".amount_range");
let amounResult = document.querySelector(".amoun_result");
let monthRange = document.querySelector(".month_range");
let monthResult = document.querySelector(".month_result");
let percent = document.querySelector(".percent");
let pay = document.querySelector(".pay");
amounResult.innerHTML = amountRange.value;
monthResult.innerHTML = monthRange.value;
let percentValue = "";
showPercent()
showAyliq()
function showPercent() {
    if (+monthRange.value <= 12) percentValue = 11
    else if (+monthRange.value <= 24) percentValue = 14.5
    else if (+monthRange.value <= 36) percentValue = 15.5
    else percentValue = 16.5
    percent.innerHTML = percentValue;
}
function showAyliq() {
    pay.innerHTML = ((+amountRange.value + ((+amountRange.value * +percentValue) / 100)) / +monthRange.value).toFixed(2);
}
function amountChoose() {
    amounResult.innerHTML = amountRange.value;
    showPercent()
    showAyliq()
}
function monthChoose() {
    monthResult.innerHTML = monthRange.value;
    pay.innerHTML = ((+amountRange.value + ((+amountRange.value * +percentValue) / 100)) / +monthRange.value).toFixed(2);
    showPercent()
    showAyliq()
}

//! EMANET-in faizinin hesablanmasi
debugger
let valuta = document.querySelector("#valuta");
let odenis = document.querySelector("#odenis");
let month = document.querySelector("#month");
let mebleg = document.querySelector(".mebleg");
let verilecekFaiz = document.querySelector(".verilecek_faiz");
let illik = "";
let ayliq = "";
let valutaDeyer = 1
let valutaName = "AZN"
function VSelected(){
    if(valuta.value=="AZN"){
        valutaDeyer = 1
        valutaName = "AZN"
        verilecekFaiz.innerHTML = `faizler - ayliq </br> 0% - 0 AZN`
    }
    else if(valuta.value=="USD"){
        valutaDeyer = 1.7
        valutaName = "USD"
        verilecekFaiz.innerHTML = `faizler - ayliq </br> 0% - 0 USD`        
    }
    OSelected();
}
function miqdarYaz(){
    OSelected();
}
function OSelected(){
    if(odenis.value=="sonOdenis"){
        if(month.value=="12"){
            illik = (+mebleg.value * 0.085).toFixed(2)
            verilecekFaiz.innerHTML = `faizler - muddetin sonunda </br> 8.5% - ${illik} ${valutaName}`
        }
        else if(month.value=="24"){
            illik = ((+mebleg.value * 0.095) * 2).toFixed(2)
            verilecekFaiz.innerHTML = `faizler - muddetin sonunda </br> 9.5% - ${illik} ${valutaName}`
        }
        else if(month.value=="36"){
            illik = ((+mebleg.value * 0.105) * 3).toFixed(2)
            verilecekFaiz.innerHTML = `faizler - muddetin sonunda </br> 10.5% - ${illik} ${valutaName}`
        }
        else verilecekFaiz.innerHTML = `faizler - muddetin sonunda </br> 0% - 0 ${valutaName}`
    }
    else if(odenis.value=="ayliqOdenis"){
        if(month.value=="12"){
            ayliq = (+mebleg.value * 0.08 / 12).toFixed(2)
            verilecekFaiz.innerHTML = `faizler - ayliq </br> 8% - ${ayliq} ${valutaName}`
        }
        else if(month.value=="24"){
            ayliq = (+mebleg.value * 0.09 * 2 / 24).toFixed(2)
            verilecekFaiz.innerHTML = `faizler - ayliq </br> 9% - ${ayliq} ${valutaName}`
        }
        else if(month.value=="36"){
            ayliq = (+mebleg.value * 0.1 * 3 / 36).toFixed(2)
            verilecekFaiz.innerHTML = `faizler - ayliq </br> 10% - ${ayliq} ${valutaName}`
        }
        else verilecekFaiz.innerHTML = `faizler - ayliq </br> 0% - 0 ${valutaName}`
    }
}
function AySelected(){
    OSelected()
}