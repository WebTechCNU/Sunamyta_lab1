
    
function ab(){
    let input_a = Number(document.querySelector("#input_a").value)
    let input_b = Number(document.querySelector("#input_b").value)
    let sum = input_a + input_b;
    let pr = input_a * input_b
    document.getElementById("sum").value = sum;
    document.getElementById("pr").value = pr;
}
   