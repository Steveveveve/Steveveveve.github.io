alert(Date())

function getDate(){              
        var date = new Date();             
        var date1 = date.toLocaleString();
        var div1 = document.getElementById("times");
        div1.innerHTML = date1;
            }

setInterval("getDate()",1000);

function image(){
        document.getElementById("img1").src='https://lonzowire.usatoday.com/wp-content/uploads/sites/40/2021/01/USATSI_15507362.jpg?w=1024&h=576&crop=1';

}

function change(){
        var text_change = document.getElementById('paragraph');
        text_change.innerHTML = 'The changed text';
}

function change0(){
        alert('Greatings!');
}

function change1(){
        var select = document.getElementById('change1');
                select.style.backgroundColor = 'pink';
                select.style.textAlign = 'center';
                select.style.fontFamily = 'Arial';
}

function temp(f){
        return(f-32)*5/9;
}

function change2(){
        var select = document.getElementById('one');
        select.innerHTML = temp(20);
}

function change3(){
        var a = parseFloat(prompt('number 1'));
        var b = parseFloat(prompt('number 2'));
        alert(a+b);
}

function change4(){
        var fN = prompt('First Name:');
        var lN = prompt('Family Name:');
        alert('Nice to meet you '+ fN + ' ' + lN);
}