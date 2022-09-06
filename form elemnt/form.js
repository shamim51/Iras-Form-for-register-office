var db = openDatabase("students", "1.0", "studentDatabase", 5555);

db.transaction(function (tx) { 
    //tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)'); 

    /*tx.executeSql("CREATE TABLE IF NOT EXISTS  student"+
    "(id INT NOT NULL,"+
    "name VARCHAR(255) NOT NULL,"+
    "address VARCHAR(255) NOT NULL,"+
    "mobile VARCHAR(255) NOT NULL,"+
    "email VARCHAR(255) NOT NULL);"); */

    
        var sql = "CREATE TABLE IF NOT EXISTS  student"+
        "(id INT NOT NULL,"+
        "name VARCHAR(255) NOT NULL,"+
        "address VARCHAR(255) NOT NULL,"+
        "mobile VARCHAR(255) NOT NULL,"+
        "email VARCHAR(255) NOT NULL);"
    
        tx.executeSql(sql, undefined, function(){
            alert("Student Table Created Successfully");
        },function(){
            alert("Someting went Wrong");
        })

 })



var isAddClicked = false;

let addBtn = document.querySelector("#add_Button");
let editBtn = document.querySelector("#edit_Button");
let dltBtn = document.querySelector("#delete_Button");
let clsBtn = document.querySelector("#close_Button");
let saveBtn = document.querySelector("#save_Button");
let cnclBtn = document.querySelector("#cancle_Button");
let srchBtn = document.querySelector("#search_Button");

//add function
addBtn.addEventListener('click', function(){
        
    addBtn.disabled = true;
    editBtn.disabled = true;

    console.log("done");

    dltBtn.disabled = true;
    clsBtn.disabled = true;

    saveBtn.disabled = false;
    cnclBtn.disabled = false;
    isAddClicked = true;
    // isEditClicked = false;

})

//edit function
editBtn.addEventListener('click', function(){
    addBtn.disabled = true;
    dltBtn.disabled = true;
    clsBtn.disabled = true;

    saveBtn.disabled = false;
    cnclBtn.disabled = false;
    editBtn.disabled = true;

    isAddClicked = false;
        // isEditClicked = true;
})

//save function for save a student info into database
saveBtn.addEventListener('click', function(){
    if(isAddClicked == true){
        var sId = document.querySelector("#studId").value;
        console.log(sId);
        var sName = document.querySelector("#studName").value;
        console.log(sName);
        var sAddress =document.querySelector("#studAddress").value;
        console.log(sAddress);
        var sMobile =document.querySelector("#studMobile").value;
        console.log(sMobile);
        var sEmail = document.querySelector("#studEmail").value;
        console.log(sEmail);

        db.transaction(function (tx) { 
            tx.executeSql('INSERT INTO student (id, name, address, mobile, email) VALUES (sId, "sName", "sAddress", "sMobile", "sEmail")'); 
        }); 


        console.log("add button is clicked");

        const inputs = document.querySelectorAll('#studId, #studAddress, #studName, #studMobile, #studEmail');

        inputs.forEach(input => {
        input.value = '';

        
        
        });
        addBtn.disabled = false;
        editBtn.disabled = true;
        //clsBtn.disabled = true;
        dltBtn.disabled = true;
        saveBtn.disabled = true;
        cnclBtn.disabled = true;

        alert("New Student Added Successfully");
    }

    else{

        console.log("edit button is clicked");
    }


})

//cancle function for both save and edit

cnclBtn.addEventListener('click', function(){
    saveBtn.disabled = true;
    editBtn.disabled = true;
    dltBtn.disabled = true;
    cnclBtn.disabled = true;
    addBtn.disabled = false;

    const inputs = document.querySelectorAll('#studId, #studAddress, #studName, #studMobile, #studEmail');

    inputs.forEach(input => {
        input.value = '';
    });
})

//search function for a student by id

srchBtn.addEventListener('click', function(){
    var sId = querySelector("#studId").value;

    db.transaction(function (tx) { 
        tx.executeSql('SELECT * FROM STUDENT WHERE id = sId');
    }) 


})

