// https://github.com/fakhruddin07/Assignment-3


// Converting kilometerToMeter

function kilometerToMetr(kilometer){
    var meter = kilometer * 1000;
    return meter;    
}


// Make a budget Calculator

function budgetCalculator(watchQuantity, mobileQuantity, laptopQuantity){
    var totalWatchPrice = watchQuantity * 50;
    var totalMobilePrice = mobileQuantity * 100;
    var totalLaptopPrice = laptopQuantity * 500;
    
    var totalAmount = totalWatchPrice + totalMobilePrice + totalLaptopPrice;

    return totalAmount;
}


// calculate hotel cost

function hotelCost(days){
    var totalCost = 0;
    if(days < 1){
        return "Sorry Sir/Madam, it's not available right now."
    }
    if(days <= 10){
        var totalCost = 10 * 100;
    }
    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var remainder = days - 10;
        var secondTenDays = remainder * 80;
        var totalCost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainder = days - 20;
        var afterTwentyDays = remainder * 50;
        var totalCost = firstTenDays + secondTenDays + afterTwentyDays;
    }
    return totalCost;
}


// large name of my friend

function megaFriend(name){
    var lengthName = 0;
    var largeName;
    for(var i = 0; i < name.length; i++){
        if(name[i].length > lengthName){
            lengthName = name[i].length;
            var largeName = name[i];
        }
    }
    return largeName;
}