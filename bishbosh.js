document.getElementById("bishBoshForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const bishNum = parseInt(document.getElementById("bishNum").value);
    const boshNum = parseInt(document.getElementById("boshNum").value);
    const loopLimit = parseInt(document.getElementById("loopLimit").value);

    // Validate input
    if (isNaN(bishNum) || isNaN(boshNum) || isNaN(loopLimit) || bishNum <= 0 || boshNum <= 0 || loopLimit <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Generate Bish-Bosh output
    let output = "";
    for (let i = 1; i <= loopLimit; i++) {
        if (i % bishNum === 0 && i % boshNum === 0) {
            output += "Bish-Bosh, ";
        } else if (i % bishNum === 0) {
            output += "Bish, ";
        } else if (i % boshNum === 0) {
            output += "Bosh, ";
        } else {
            output += i + ", ";
        }
    }

    // Display output on the page
    document.getElementById("output").innerHTML = `<p>${output.slice(0, -2)}</p>`; // Removes trailing comma and space
});
