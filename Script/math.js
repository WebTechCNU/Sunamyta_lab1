function ab() {
    let input_a = document.querySelector("#input_a").value
    let input_b = document.querySelector("#input_b").value
    if (isNaN(input_a) || isNaN(input_b)) {
        document.getElementById("sum").value = "enter a number";
        document.getElementById("pr").value = "enter a number";
    } 
    else {
        let sum = Number(input_a) + Number(input_b);
        let pr = Number(input_a) * Number(input_b);
        document.getElementById("sum").value = sum;
        document.getElementById("pr").value = pr;
    }
}  