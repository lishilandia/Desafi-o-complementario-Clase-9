console.log('Mis cuentos favoritos!');

const noticias = [
  {
    titulo: 'Caperucita Roja',
    glosa:
      'Caperucita Roja es una niña que quería mucho a su abuelita; un día su madre le da una cesta con comida para que se la lleve a la abuelita, que está enferma y vive en una casa algo lejos de ellas. ​ En el camino se encuentra con el Lobo Feroz que la reta a una carrera hasta la casa de la abuelita.',
  },
  {
    titulo: 'Los tres chanchitos',
    glosa:
      'Tres cerditos hacen sus casas, pero para tardar menos y jugar, los dos primeros las hacen de paja y maderas, mientras el mayor se esfuerza más y la hace de ladrillo. Cuando llega el lobo feroz, soplando tira las casas del primero y luego del segundo, que se refugian en la del tercero.',
  },
  {
    titulo: 'Patito Feo',
    glosa:
      'Una pata tiene varios patitos, pero uno de ellos es mucho más feo, tosco y torpe que el resto, por lo que todos le dan de lado y se burlan de él. El patito decide huir de allí y se enfrenta solo y triste a los problemas del invierno.',
  },
];

const botones = [
  {
    titulo: 'Boton 1',
    glosa: 'Mensaje alerta de boton 1',
  },
  {
    titulo: 'Boton 2',
    glosa: 'Mensaje alerta de boton 2',
  },
];

window.addEventListener('load', function () {
  for (let i = 0; i < noticias.length; i++) {
    let nodoDiv = document.createElement('div'); 
    let nodoH1 = document.createElement('h2'); 
    let titulo = document.createTextNode(noticias[i].titulo);
    
    nodoH1.appendChild(titulo); 
    nodoDiv.appendChild(nodoH1);

    let nodoP = document.createElement('p');
    
    nodoP.classList.add('mi-clase');
    
    let glosa = document.createTextNode(noticias[i].glosa); 
    nodoP.appendChild(glosa); 
    nodoDiv.appendChild(nodoP);

    
    var noti = document.getElementById('noticias');
    document.body.insertBefore(nodoDiv, noti);
  }

  for (let i = 0; i < botones.length; i++) {
    let nodoDiv = document.createElement('div'); 
    let nodoB = document.createElement('button');
    

    let titulo = document.createTextNode(botones[i].titulo);
    
    nodoB.appendChild(titulo); 
    nodoDiv.appendChild(nodoB);
    nodoB.addEventListener('click', function () {
      alert(botones[i].glosa); 
    });

    var botonesSeccion = document.getElementById('botones');
    document.body.insertBefore(nodoDiv, botonesSeccion);
  }
});
