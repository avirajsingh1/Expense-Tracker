let expenseForm = document.getElementById("expenseForm");
let expenseList = document.getElementById("expenseList");

expenseForm.addEventListener('submit',function(event){
    event.preventDefault();

    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
    let amount = document.getElementById("Amount").value.trim();

    if(document && category && !isNaN(amount) && amount>0){
        const newRow = document.createElement("tr");

        newRow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount}</td>`;

        expenseList.appendChild(newRow)

        description.value='';
        category.value='';
        amount.value='';
    }else{
        alert('Please fill ou the valid data');
    }
    description.value='';
        category.value='';
        amount.value='';
})