function deleteUser(user){ // This if statement which  raps entire function , negate it to increase the readibility of code 
    if(user != null){
        console.log("Deleting")
        user.delete()
    }
}

function saveUser(user){
    if(user != null){
        console.log("Validating")
        if(user.isValid()){
         console.log("saving")
         user.save()
        }
    }
}


// this function is better than above function 
function deleteUser(user){
    if(user == null) return;
    console.log("Deleting")
    user.delete()
    
}

function saveUser(user){
    if(user == null) return;
    console.log("Validating")
// two separate guard clauses
    if(!user.isValid()) return;
    console.log("saving")
    user.save()
        
    
}