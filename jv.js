



function first(){
    

    let name = document.getElementById('name')
    if(isNaN(name.value)){
        name.setCustomValidity('')
    }else{
        name.setCustomValidity('η πληροφοριά που εισαγάγατε δεν πρόκειται για όνομα')
    }


    let lastname = document.getElementById('lastname')
    if(isNaN(lastname.value)){
        lastname.setCustomValidity('')
    }else{
        lastname.setCustomValidity('η πληροφοριά που εισαγάγατε δεν πρόκειται για όνομα')
    }


    let phone = document.getElementById('phone')

    if(isNaN(phone.value)){
        phone.setCustomValidity('η πληροφοριά που εισαγάγατε δεν πρόκειται για αριθμός')
    }else{
        phone.setCustomValidity('')
    }

    let pass1 = document.getElementById('pass1')
    let pass2 = document.getElementById('pass2')

    if(!(pass1.value==pass2.value)){
        console.log(pass1.value)
        console.log(pass2.value)
        pass2.setCustomValidity('oι κωδικοί που εισαγάγατε δεν είναι ίδιοι')
    }else{
        pass2.setCustomValidity('')
    }

    
    let gender = document.getElementById('gender')

    if(!(gender.value=="Άνδρας" || gender.value=="Γυναίκα" || gender.value=="άνδρας" || gender.value=="γυναίκα" || gender.value=="ανδρας" || gender.value=="γυναικα" || gender.value=="Ανδρας" || gender.value=="Γυναικα" || gender.value=="Άλλο" || gender.value=="άλλο" || gender.value=="αλλο" || gender.value=="Αλλο")){
        gender.setCustomValidity('μη έγκυρο φύλο')
    }else{
        gender.setCustomValidity('')
    }






}