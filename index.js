let form=document.getElementById('form');

form.addEventListener('submit',Add)

let name=document.getElementById('name');
let description=document.getElementById('description');
let prize=document.getElementById('prize');
let quantity=document.getElementById('quantity');

let tbody=document.getElementById('tbody1');


function Add(e){
    e.preventDefault();

    let name=document.getElementById('name');
    let description=document.getElementById('description');
    let prize=document.getElementById('prize');
    let quantity=document.getElementById('quantity');
    obj={
        name:name.value,
        description:description.value,
        prize:prize.value,
        quantity:quantity.value

    }
    axios.post('https://crudcrud.com/api/930e285a29504c3fa70a9fdb4cdff057/StockData',obj)
    .then(response=>showDataOnScreen(response.data))
    .catch(error=>console.log(error));

    name.value='';
    description.value='';
    prize.value='';
    quantity.value='';
}

function buyOne(id){
    let td=document.getElementById(id);
    console.log(td.parentElement)
    td.textContent-=1;

    axios.put('https://crudcrud.com/api/930e285a29504c3fa70a9fdb4cdff057/StockData/' + id,{
        quantity:td.textContent
    })
    .then(response => {
        console.log("Updated successfully:", response.data);
    })
    .catch(error => {
        console.error("Error updating data:", error);
    });

    if(td.textContent==='0' || td.textContent===' '){
        console.log('why I am not abe to enter in this if statement');
        axios.delete('https://crudcrud.com/api/930e285a29504c3fa70a9fdb4cdff057/StockData/'+id)
        .then(response=>{
            console.log("successfully deleted")
            td.parentElement.remove();
        })
        .catch(error=>console.log('waht! it does not deleted'))
    }
    
}
function buyTwo(id){
    let td=document.getElementById(id);
    td.textContent-=2;

    axios.put('https://crudcrud.com/api/930e285a29504c3fa70a9fdb4cdff057/StockData/' + id,{
        quantity:td.textContent
    })
    .then(response => {
        console.log("Updated successfully:", response.data);
    })
    .catch(error => {
        console.error("Error updating data:", error);
    });

    if(td.textContent==='0'){
        console.log('why I am not abe to enter in this if statement');
        axios.delete('https://crudcrud.com/api/930e285a29504c3fa70a9fdb4cdff057/StockData/'+id)
        .then(response=>{
            console.log("successfully deleted")
            td.parentElement.remove();
        })
        .catch(error=>console.log('waht! it does not deleted'))
    }
}
function buyThree(id){
    let td=document.getElementById(id);
    td.textContent-=3;

    axios.put('https://crudcrud.com/api/930e285a29504c3fa70a9fdb4cdff057/StockData/' + id,{
        quantity:td.textContent
    })
    .then(response => {
        console.log("Updated successfully:", response.data);
    })
    .catch(error => {
        console.error("Error updating data:", error);
    });

    if(td.textContent==='0'){
        console.log('why I am not abe to enter in this if statement');
        axios.delete('https://crudcrud.com/api/930e285a29504c3fa70a9fdb4cdff057/StockData/'+id)
        .then(response=>{
            console.log("successfully deleted")
            td.parentElement.remove();
        })
        .catch(error=>console.log('waht! it does not deleted'))
    }
}
function showDataOnScreen(data){
    console.log(data);

    let A=` <tr>
                <td>${data.name}</td>
                <td>${data.description}</td>
                <td>${data.prize}</td>
                <td id="${data._id}">${data.quantity}</td>
                <td>
                    <button onclick="buyOne('${data._id}')">buy1</button>
                    <button onclick="buyTwo('${data._id}')">buy2</button>
                    <button onclick="buyThree('${data._id}')">buy3</button>
                </td>
         </tr>`
    tbody.innerHTML+=A;
}

document.addEventListener('DOMContentLoaded',()=>{
    axios('https://crudcrud.com/api/930e285a29504c3fa70a9fdb4cdff057/StockData')
    .then(response=>{
        response.data.forEach(data=>{
            let A=` <tr>
                <td>${data.name}</td>
                <td>${data.description}</td>
                <td>${data.prize}</td>
                <td id="${data._id}">${data.quantity}</td>
                <td>
                    <button onclick="buyOne('${data._id}')">buy1</button>
                    <button onclick="buyTwo('${data._id}')">buy2</button>
                    <button onclick="buyThree('${data._id}')">buy3</button>
                </td>
         </tr>`
    tbody.innerHTML+=A;
        });
    })
    .catch(err=> console.log(err))
})