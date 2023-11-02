

export function returnProduct(currentPayment:number ,requiredMoney:number, requestedItem: null|'water'|'coke'|'soda') {//this function is supposed to simulate item return. 
    //TODO: change this with an asynchron function
    //TODO: change this to work with an API call
    alert(currentPayment - requiredMoney +' TL refunded\n'+requestedItem);
    
}

export function rejectPayment(){
    alert('Payment unsuccesful');

}
