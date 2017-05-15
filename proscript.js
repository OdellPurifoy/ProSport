(function() {
    
    "use strict";
    var state = document.getElementById('s-state');
    
    document.addEventListener('DOMContentLoaded', function(){
        
        // if statement used to disable the function of the submit button if state field if empty
        document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);
         
        var buttonEstimate = document.getElementById('btn-estimate');
        buttonEstimate.disabled = true;
        
        state.addEventListener('change', function(){
            if(state.value === ''){
             buttonEstimate.disabled = true;
         } else {
            buttonEstimate.disabled = false;
         }
        });     
         
    });
    
    
    
    // function for validating state field input
    function estimateTotal(event){
        event.preventDefault();
        
        
        
        if(state.value === ''){
            alert('Please choose your shipping state');
            
            state.focus();
        }
        
        //Variables which get the values from the input fields
        var itemBball = document.getElementById('txt-q-bball').value;
        var itemJersey = document.getElementById('txt-q-jersey').value;
        var itemPower = document.getElementById('txt-q-power').value;        
        var shippingState = state.value;
        var shippingMethod = document.querySelector('[name=r_method]:checked').value;
        
        var totalQty = itemBball + itemJersey + itemPower;
        var shippingCostPer;
        var taxFactor = 1;
        var estimate;
        var totalItemPrice = (90 * itemBball) + (25 * itemJersey) + (30 * itemPower);
        
                
        //Conditional code to calculate tex rate depending on state selected
        if(shippingState === 'CA'){
            taxFactor = 1.075;
        }
        
        //Calculation to get the estimated total of all items purchased
        estimate = totalItemPrice * taxFactor;
        
        document.getElementById('txt-estimate').value = estimate;
    }
    
})();

