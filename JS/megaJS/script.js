const RATES={
60:5,
40:4,
30:3,
20:2.5
}

let records=JSON.parse(localStorage.getItem("records")||"[]")

document.addEventListener("DOMContentLoaded",()=>{

document.getElementById("workDate").value=new Date().toISOString().split("T")[0]

updateDay()

addCountRow()

renderRecords()

})

function updateDay(){

let date=document.getElementById("workDate").value

if(!date)return

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

document.getElementById("workDay").value=days[new Date(date).getDay()]

}

document.getElementById("workDate").addEventListener("change",updateDay)

function addCountRow(){

let div=document.createElement("div")

div.className="row"

div.innerHTML=`

<select class="count">
<option value="">Count</option>
<option value="60">60</option>
<option value="40">40</option>
<option value="30">30</option>
<option value="20">20</option>
</select>

<input type="number" class="cones" placeholder="Cones">
<input type="number" class="weight" placeholder="Weight">

<span class="amount">₹0</span>

<button onclick="this.parentElement.remove();calculateTotal()">X</button>

`

document.getElementById("countRows").appendChild(div)

div.querySelectorAll("input,select").forEach(el=>{

el.addEventListener("input",calculateTotal)

})

}

function calculateTotal(){

let total=0

document.querySelectorAll("#countRows .row").forEach(row=>{

let count=row.querySelector(".count").value
let cones=parseFloat(row.querySelector(".cones").value)||0
let weight=parseFloat(row.querySelector(".weight").value)||0

let rate=RATES[count]||0

let amount=cones*weight*rate

row.querySelector(".amount").innerText="₹"+amount.toFixed(2)

total+=amount

})

document.getElementById("dailyTotalAmt").innerText=total.toFixed(2)

}

function saveRecord(){

let name=document.getElementById("workerName").value
let date=document.getElementById("workDate").value
let day=document.getElementById("workDay").value
let total=document.getElementById("dailyTotalAmt").innerText

if(!name)return showToast("Enter worker name")

records.push({name,date,day,total})

localStorage.setItem("records",JSON.stringify(records))

renderRecords()

showToast("Record Saved")

}

function renderRecords(){

let list=document.getElementById("savedList")

if(records.length===0){

list.innerHTML="No records yet"
return

}

list.innerHTML=records.map((r,i)=>`

<div class="record">

<b>${r.name}</b><br>
${r.day} (${r.date})<br>
Salary ₹${r.total}

<br><button onclick="deleteRecord(${i})">Delete</button>

</div>

`).join("")

}

function deleteRecord(i){

records.splice(i,1)

localStorage.setItem("records",JSON.stringify(records))

renderRecords()

}

function showToast(msg){

let t=document.getElementById("toast")

t.innerText=msg

t.classList.add("show")

setTimeout(()=>t.classList.remove("show"),3000)

}