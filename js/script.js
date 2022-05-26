function persona (nome, cognome, citta){
    this.nome = nome;
    this.cognome = cognome;
    this.citta = citta;
}

let sfondo = true;
let us_num = 1;

let node = document.querySelector('.container');

let add_btn = document.querySelector('button');
add_btn.onclick = function(){
    
    let arr_person = [];
    let prs = new persona (document.querySelector('#name').value, document.querySelector('#surname').value, document.querySelector('#city').value);
    
    arr_person.push(prs.nome);
    arr_person.push(prs.cognome);
    arr_person.push(prs.citta);
    
    let new_div = document.createElement('div');
    new_div.innerHTML =  '<span>' + us_num + '.' + '</span>' + '<p>Nome: ' + arr_person[0]+ '</p>' + '<p>Cognome: ' + arr_person[1] + '</p>'+ '<p>Città: ' + arr_person[2] + '</p>';
    
    if (sfondo == true){
        new_div.style.backgroundColor = 'bisque';
        sfondo = false;
    } else {
        new_div.style.backgroundColor = 'black';
        new_div.style.color = 'bisque';
        sfondo = true;
    }
    us_num++;
    
    node.appendChild(new_div);
}