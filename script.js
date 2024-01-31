console.log("probando")


// nuestro codigo de JS es el que va a modificar el DOM

console.log(document) // el DOM. Toda la vista modificable presentada al usuario


// podemos buscar elementos especificos => Selectores de DOM

let titleNode = document.querySelector("h1") // busco dentro del documento el primer elemento de la caracteristica indicada. Nos devuelve la referencia del elemento conseguido.

console.log(titleNode)
console.log(titleNode.innerText) // texto entre la etiqueta que abre y la etiqueta que cierra

// titleNode.innerText = "Modificacion del DOM por JS";


// modificamos el dom en dos situaciones

// 1. a traves de eventos que realiza el usuario
titleNode.addEventListener("click", () => {
  // titleElem.innerText = "Modificacion del DOM por interacción del usuario";
})


// 2. a traves de efectos automaticos
setTimeout(() => {
  // titleElem.innerText = "Modificando el DOM a los 5 segundos";
}, 5000)




let secondTitleNode = document.querySelector("#second-title")

console.log(secondTitleNode)

secondTitleNode.innerText = "cambio por DOM";


document.querySelector("#second-title").innerText = "Segunda modificación"



let parrafoNodeList = document.querySelectorAll(".some-text")
// busca TODOS los elementos de DOM que cumplan esa caracteristica
console.log(parrafoNodeList) // NODELIST. Lista de Nodos

parrafoNodeList[1].addEventListener("click", () => {
  parrafoNodeList[1].innerText = "modificando el segundo parrafo"
})


// en listas de nodos podemos hacer:
//1. notación de corchetes para acceder a posiciones
//2. for loop
//3. forEach

// en listas de nodos NO podemos hacer
//push, pull, filter, reduce y todos los otros metodos de arrays


parrafoNodeList.forEach((eachNode) => {
  // eachNode.innerText = "modificando todos los parrafos en un forEach"
  // eachNode.innerText = eachNode.innerText + "patata"
  eachNode.innerText += "patata"
})



// getElementById()
// getElementsByClassName()
// getElementsByTag()




// Como crear y borrar Nodos del DOM

let containerNode = document.querySelector("#empty-container")
console.log(containerNode)

let newH2Node = document.createElement("h2")
// esto crea un Node que AUN no existe en el DOM. Solo existe en la memoria de JS.
newH2Node.innerText = "elemento nuevo"

document.addEventListener("click", () => {
  containerNode.append(newH2Node)
  // append añade el nuevo Nodo al final de el padre
  // podemos usar append o appendChild
})


let card1Node = document.querySelector("#card-1")


console.log(card1Node)

card1Node.addEventListener("click", () => {
  card1Node.remove()
  // se remueve el elemento del DOM
  // la referencia sigue existiendo
})



// innerText y innerHTML

let footerNode = document.querySelector("footer")
console.log(footerNode)

console.log(footerNode.innerText)
// footerNode.innerText = "otra cosa"

console.log(footerNode.innerHTML)

// footerNode.innerHTML = "<small>nuevo <b>contenido</b> del footer</small>"

footerNode.innerHTML = `
  <div>
    <h5>este es el footer</h5>
    <button>click</button>
  </div>
`


// modificar ids y classes

let finalSectionNode = document.querySelector("#final-thoughts")

finalSectionNode.addEventListener("click", () => {
  // console.log("probando")

  // console.log(finalSectionNode.id)
  // finalSectionNode.id = "new-section-id"

  // finalSectionNode.className = "nueva-clase"

  // con clases usualmente queremos
  // añadir una clase
  console.log(finalSectionNode.classList)
  // finalSectionNode.classList.add("nueva-clase")
  // remover una clase
  finalSectionNode.classList.remove("best-practice")
  // toggle: remover si existe o añadir si no existe
  finalSectionNode.classList.toggle("nueva-clase")

  console.log( finalSectionNode.classList.contains("nueva-clase") )

})


let testNode = document.querySelector("#test")

testNode.addEventListener("click", () => {

  if (testNode.classList.contains("yellow")) {
    testNode.classList.add("blue")
    testNode.classList.remove("yellow")
  } else if (testNode.classList.contains("blue")) {
    testNode.classList.add("red")
    testNode.classList.remove("blue")
  } else if (testNode.classList.contains("red")) {
    testNode.classList.add("yellow")
    testNode.classList.remove("red")
  }
})



let buttonNode = document.querySelector("#increment")
let counterNode = document.querySelector("#count h2 span")

buttonNode.addEventListener("click", () => {

  console.log("presionando el boton")
  console.log(counterNode.innerText)
  counterNode.innerText = Number.parseInt(counterNode.innerText) + 1

})


let h1Node = document.querySelector("#event-title")

h1Node.addEventListener("mouseenter", () => {
  console.log("pasando el cursor sobre el titulo")

  h1Node.innerText = "pasando el cursor"
  testNode.innerText = "cambiar"
  console.log(h1Node.style)
  h1Node.style.color = "red"
  h1Node.style.backgroundColor = "rgb(60, 154, 123)"
  h1Node.style.padding = "20px"
  h1Node.style.position = "relative"
  h1Node.style.left = "30px"
})

h1Node.addEventListener("mouseleave", () => {
  console.log("saliendo el cursor del el titulo")

  h1Node.innerText = "EVENTS!" 
  testNode.innerText = "Test de colorines"
  h1Node.style.color = "black"
  h1Node.style.position = "relative"
  h1Node.style.left = "0px"
})


let inputNode = document.querySelector("#name")
let btnNode = document.querySelector("#add-btn")
let listNode = document.querySelector("#output-list")

btnNode.addEventListener("click", () => {


  console.log("probando")
  console.log( inputNode.value )
  if (inputNode.value !== undefined) {

    // quiero crear un nuevo elemento de li
    let newLiNode = document.createElement("li")
    newLiNode.innerText = inputNode.value 

    // quiero añadirlo a la lista (ul)
    listNode.append(newLiNode)

  }


})