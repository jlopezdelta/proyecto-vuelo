import { initializeApp } from "firebase/app";
import {getFirestore,collection,getDocs, getDoc, doc,query,where, addDoc} from "firebase/firestore"

/*
const firebaseConfig = {
  apiKey:     "",
  authDomain: "",
  projectId:  "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

*/
const firebaseConfig = {
  apiKey:     "AIzaSyCMtEVhmCTxzyD_nirQKEUSSB0F7v2SRDo",
  authDomain: "flysafe-888f1.firebaseapp.com",
  projectId:  "flysafe-888f1",
  storageBucket: "flysafe-888f1.appspot.com",
  messagingSenderId: "84682669364",
  appId: "1:84682669364:web:336799909f14f21278f961"
};

function getRandomFutureDate() {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 365); // Número aleatorio de días entre 0 y 365

  today.setDate(today.getDate() + randomDays); // Suma los días aleatorios a la fecha actual
  return today;
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Los meses son base 0, sumamos 1
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const futureDate = getRandomFutureDate();
const formattedDate = formatDate(futureDate);
const products = [
  {
      id: 1,
      img: "../imgs/bangkok.jpg",
      first_name: "Bangkok",
      description: "La capital de Tailandia, es una extensa ciudad conocida por los santuarios ornamentados y la animada vida callejera.",
      date: formattedDate,
      category:"Asia",
      stock: 28,
      price: 525.72
    }, {
      id: 2,
      img: "../imgs/dubai.jpg",
      first_name: "Dubai",
      description:"Conocida por su lujoso comercio, la arquitectura ultramoderna y su vida nocturna animada. Burj Khalifa, una torre de 830 m de alto, domina el paisaje lleno de rascacielos.",
      date: formattedDate,
      category:"Asia",
      stock: 63,
      price: 777.52
    }, {
      id: 3,
      img: "../imgs/estambul.jpg",
      first_name: "Estambul",
      description:"La Ciudad Antigua refleja las influencias culturales de los distintos imperios que gobernaron la región. En el distrito Sultanahmet, el Hipódromo al aire libre de la era romana fue por siglos un lugar de carreras de carros, y los obeliscos egipcios también permanecen en el lugar.",
      date: formattedDate,
      category:"Asia",
      stock: 13,
      price: 917.94
    }, {
      id: 4,
      img: "../imgs/hongkong.jpg",
      first_name: "Hong Kong",
      description:"Cuenta con elementos arquitectónicos como la Bank of China Tower de I.M. Pei. Hong Kong es también un importante destino comercial, famoso por los sastres que hacen confecciones a la medida y el Mercado Nocturno de Temple Street.",
      date: formattedDate,
      category:"Asia",
      stock: 40,
      price: 767.07
    }, {
      id: 5,
      img: "../imgs/london.jpg",
      first_name: "Londres",
      description:"En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.",
      date: formattedDate,
      category:"Europa",
      stock: 44,
      price: 923.25
    }, {
      id: 6,
      img: "../imgs/macao.jpg",
      first_name: "Macao",
      description:"Sus centros comerciales y casinos gigantes en la Franja de Cotai, que conecta las islas de Taipa y Coloane, le dieron el apodo de Las Vegas de Asia. Uno de sus edificios más impresionantes es la Torre de Macao de 338 m de alto",
      date: formattedDate,
      category:"Asia",
      stock: 33,
      price: 694.71
    }, {
      id: 7,
      img: "../imgs/ny.jpg",
      first_name: "Nueva York",
      description:" En su centro se encuentra Manhattan, un distrito densamente poblado que se encuentra entre los principales centros comerciales, financieros y culturales del mundo. Sus sitios icónicos incluyen rascacielos, como el Empire State Building, y el amplio Central Park.",
      date: formattedDate,
      category:"America",
      stock: 29,
      price: 876.77,
      off:35
    }, {
      id: 8,
      img: "../imgs/paris.jpg",
      first_name: "París",
      description:" Su paisaje urbano del siglo XIX está entrecruzado por amplios bulevares y el río Sena. Aparte de estos hitos, como la Torre Eiffel y la catedral gótica de Notre Dame del siglo XII, la ciudad es famosa por su cultura del café y las tiendas de moda de diseñador a lo largo de la calle Rue du Faubourg Saint-Honoré.",
      date: formattedDate,
      category:"Europa",
      stock: 18,
      price: 741.02,
      off:35
    }, {
      id: 9,
      img: "../imgs/roma.jpg",
      first_name: "Roma",
      description:"La capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano.",
      date: formattedDate,
      category:"Europa",
      stock: 50,
      price: 805.19,
      off:40
    }, {
      id: 10,
      img: "../imgs/singapur.jpg",
      first_name: "Singapur",
      description:"Singapur es una de las grandes ciudades del mundo, con su mezcla de culturas asiáticas y europeas. Edificios coloniales Graceful coexisten con los mercados callejeros de siglos de antigüedad y modernos rascacielos. ",
      date: formattedDate,
      category:"Asia",
      stock: 28,
      price: 538.56
    }
];

export async function getProducts(){
    return products;
}

export async function getCity(id){
    return products.find( x => x.id = id );
}

export async function getCityByCategory(url){
    return products.filter( x => x.category == url );
}

export async function newOrden(orden){
 return generateUUIDv4();
}

function generateUUIDv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}