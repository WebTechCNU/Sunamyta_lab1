function Txt() {
    var txt = document.getElementById('txt').value;
    txt_len = txt.length;
    words = txt.replace(/\.|\,/g, ' ').replace(/^\s*/, '').replace(/\s*$/, '').split(/[\s]+/).length;
    document.getElementById('txt1').lastChild.innerText = words;
} 