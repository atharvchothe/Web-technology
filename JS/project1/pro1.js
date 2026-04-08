// document.getElementById("myForm").addEventListener("submit", function(event) {

//     event.preventDefault();  // Stop form from submitting

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     let errorMessage = "";

//     // Name validation
//     if (name === "") {
//         errorMessage += "Name is required\n";
//     }

//     // Email validation
//     if (!email.includes("@")) {
//         errorMessage += "Enter valid email\n";
//     }

//     // Password validation
//     if (password.length < 6) {
//         errorMessage += "Password must be at least 6 characters\n";
//     }

//     if (errorMessage !== "") {
//         document.getElementById("error").innerText = errorMessage;
//     } else {
//         document.getElementById("error").innerText = "Form submitted successfully!";
//     }

// });

const expenseTracker = {
    expenses: [],

    addExpense(title, amount, category) {
        const expense = {
            id: this.expenses.length + 1,
            title: title.trim().toUpperCase(),
            amount: Number(amount),
            category: category.toLowerCase(),
            date: new Date()
        };

        this.expenses.push(expense);
        return expense;
    },

    getTotal() {
        return this.expenses
            .map(exp => exp.amount)
            .reduce((acc, curr) => acc + curr, 0);
    },

    filterByCategory(category) {
        return this.expenses.filter(
            exp => exp.category === category.toLowerCase()
        );
    }
};

// DOM Elements
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const addBtn = document.getElementById("addBtn");
const totalDisplay = document.getElementById("total");
const expenseList = document.getElementById("expenseList");
const filterInput = document.getElementById("filterCategory");
const filterBtn = document.getElementById("filterBtn");

// Add Expense Event
addBtn.addEventListener("click", () => {

    if (!titleInput.value || !amountInput.value || !categoryInput.value) {
        alert("Please fill all fields!");
        return;
    }

    const expense = expenseTracker.addExpense(
        titleInput.value,
        amountInput.value,
        categoryInput.value
    );

    renderExpenses(expenseTracker.expenses);

    totalDisplay.textContent = expenseTracker.getTotal();

    titleInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
});

// Filter Event
filterBtn.addEventListener("click", () => {
    const filtered = expenseTracker.filterByCategory(filterInput.value);
    renderExpenses(filtered);
});

// Render Function
function renderExpenses(expenses) {
    expenseList.innerHTML = "";

    expenses.forEach(exp => {
        const li = document.createElement("li");

        li.textContent = 
            `ID:${exp.id} | ${exp.title} | ₹${exp.amount} | ${exp.category} | ${exp.date.toLocaleString()}`;

        expenseList.appendChild(li);
    });
}