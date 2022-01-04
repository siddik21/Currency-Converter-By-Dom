function ammountFinal(currencyName, ammount){
    if( currencyName == 'usd'){
        return `Total Ammount is = ${ammount * 84.77 }Taka`;
        
    }
    else if ( currencyName== 'cad'){
        return `Total Ammount is = ${ammount * 67.77 }Taka`;
    }
    else if( currencyName== 'pound'){
        return `Total Ammount is = ${ammount * 115.16 }Taka`;
    }
    else if ( currencyName== 'euro'){
        return `Total Ammount is = ${ammount * 96.71 }Taka`;
    }
}

