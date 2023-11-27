function check() {
    
    var a = document.getElementById('uname').value;
    var b = document.getElementById('pname').value;
    var wrd = a + b;
    let c = wrd.toLowerCase();
    t = wrdcnt(c, 't');
    r = wrdcnt(c, 'r');
    u = wrdcnt(c, 'u');
    e = wrdcnt(c, 'e');
    f1 = t+r+u+e;
    console.log(f1);

    l = wrdcnt(c, 'l');
    o = wrdcnt(c, 'o');
    v = wrdcnt(c, 'v');
    e = wrdcnt(c, 'e');
    f2 = l+o+v+e;

    t1 = f1.toString()+f2.toString()+"%";
    console.log(t1);
    document.getElementById('para').innerHTML=t1;
}
function wrdcnt(str, char) {
    var count = 0;
    var x = str.length;
    for(let i = 0; i < x ; i++)
    {
       if(str.charAt(i) === char){
        count++;
       }
    }
    return count;
}