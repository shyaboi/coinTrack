let eColor;
var ePrice
const funcETH = async (data, status) => {
    let ecPrice = parseFloat(data.USD)
    ecPrice = data.USD
    if(ecPrice>ePrice){
        eColor='green'
    }else if (ecPrice==ePrice) {
        eColor='white'
    }else if (ecPrice<ePrice) {
        eColor='red'
    }
    await $("#ethPrice").text('1 ETH= $' + data.USD +'USD').css("background-color", eColor)
    ePrice = ecPrice
}

let bColor;
var bPrice
const funcBTC = async (data, status) => {
    let bcPrice = parseFloat(data.USD)
    bcPrice = data.USD
    if(bcPrice>bPrice){
        bColor='green'
    }else if (bcPrice==bPrice) {
        bColor='white'
    }else if (bcPrice<bPrice) {
        bColor='red'
    }
    await $("#btcPrice").text('1 BTC=$' + data.USD +'USD').css("background-color", bColor)
    bPrice = bcPrice
}


let aColor;
var aPrice
const funcADA = async (data, status) => {
    let acPrice = parseFloat(data.USD)
    acPrice = data.USD
    if(acPrice>aPrice){
        aColor='green'
    }else if (acPrice==aPrice) {
        aColor='white'
    }else if (acPrice<aPrice) {
        aColor='red'
    }
    await $("#adaPrice").text('1 ADA=$' + data.USD +'USD').css("background-color", aColor)
    aPrice = acPrice
}



let dColor;
var dPrice
const funcDoge = async (data, status) => {
    let dcPrice = parseFloat(data.USD)
    dcPrice = data.USD
    if(dcPrice>dPrice){
        dColor='green'
    }else if (dcPrice==dPrice) {
        dColor='white'
    }else if (dcPrice<dPrice) {
        dColor='red'
    }
    await $("#dogePrice").text('1 DOGE=$' + data.USD +'USD').css("background-color", dColor)
    dPrice = dcPrice
}

let xColor;
var xPrice
const funcXmr = async (data, status) => {
    let xcPrice = parseFloat(data.USD)
    xcPrice = data.USD
    if(xcPrice>xPrice){
        xColor='green'
    }else if (xcPrice==xPrice) {
        xColor='white'
    }else if (xcPrice<xPrice) {
        xColor='red'
    }
    await $("#xmrPrice").text('1 XMR=$' + data.USD +'USD').css("background-color", xColor)
    xPrice = xcPrice
}



setInterval(() => {
    setTimeout(() => {
        $.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", funcETH);
    }, 1);
}, 2000);

setInterval(() => {
    setTimeout(() => {

        $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD", funcBTC);
    }, 250);
}, 2000);

setInterval(() => {
    setTimeout(() => {

        $.get("https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD", funcADA);
    }, 500);
}, 2000);

setInterval(() => {
    setTimeout(() => {

        $.get("https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD", funcDoge);
    }, 750);
}, 2000);

setInterval(() => {
    setTimeout(() => {

        $.get("https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD", funcXmr);
    }, 1000);
}, 2000);




