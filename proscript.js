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
        
    }
    
})();

