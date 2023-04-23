

function ab() {
    let input_a = Number(document.querySelector("#input_a").value)
    let input_b = Number(document.querySelector("#input_b").value)
    if (isNaN(input_a) || isNaN(input_b)) {
        document.getElementById("sum").value = "enter a number";
        document.getElementById("pr").value = "enter a number";
    } 
    else {
        let sum = input_a + input_b;
        let pr = input_a * input_b
        document.getElementById("sum").value = sum;
        document.getElementById("pr").value = pr;
    }
}  