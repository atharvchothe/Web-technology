let students = [];

function addStudent()
{
    let name = document.getElementById("name").value;

    students.push(name);

    displayStudents();
}

function displayStudents()
{
    let output = "";

    for(let i=0; i<students.length; i++)
    {
        output += "<li>" + students[i] + "</li>";
    }

    document.getElementById("list").innerHTML = output;
}
