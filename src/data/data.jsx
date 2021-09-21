import fotosAndresaLeonardo from '../images/FotosIMoveis/AndresaLeonardo';
import fotosOscavo from '../images/FotosIMoveis/Oscavo';
import ApartamentoNacional2 from '../images/FotosIMoveis/ApartamentoNacional2';
import fotosElizandro from '../images/FotosIMoveis/CasaElizandro02';
import fotosAlecio from '../images/FotosIMoveis/EspaçoComercialAlecio';
import fotosGG from '../images/FotosIMoveis/RuaGG';
import EspacoComercialCabral from '../images/FotosIMoveis/EspacoComercialCabral';
import Quitinete2 from '../images/FotosIMoveis/Quitinete2';
import fotosRubi from '../images/FotosIMoveis/RuaRubi';
import fotosLojasCabral from '../images/FotosIMoveis/LojasCabral';

const data = [
  {
    id: 0,
    name: 'Andreza-Leonardo',
    type: 'Apartamento',
    address: {
      endress: 'Juventino dias, Ressaca-Contagem',
      street: 'Juventino dias',
      bairro: 'Ressaca',
      city: 'Contagem',
    },
    price: 1500.00,
    details: {
      rooms: 3,
    },
    images: [fotosAndresaLeonardo],
  },
  {
    id: 1,
    name: 'Casa-Oscavo-Lobato-com-terraço',
    type: 'Casa',
    address: {
      endress: 'Oscavo lobato, Ressaca-Contagem',
      street: 'Oscavo lobato',
      bairro: 'Ressaca',
      city: 'Contagem',
    },
    price: 2500.00,
    details: {
      rooms: 3,
    },
    images: [fotosOscavo],
  },
  {
    id: 2,
    name: 'Casa-Elizandro-02',
    type: 'Casa',
    adress: {
      endress: 'Oscavo Lobato, Ressaca-Contagem',
      street: 'Oscavo Lobato',
      bairro: 'Ressaca',
      city: 'Contagem',
    },
    price: 800.00,
    details: {
      rooms: 2,
    },
    images: [fotosElizandro],
  },
  {
    id: 3,
    name: 'Apartamento-Nacional2',
    type: 'Apartamento',
    address: {
      endress: '',
      street: '',
      bairro: 'Nacional',
      city: 'Contagem',
    },
    price: 900.00,
    details: {
      rooms: '',
    },
    images: [ApartamentoNacional2],
  },
  {
    id: 4,
    name: 'Loja-Alécio',
    type: 'Comercial',
    address: {
      endress: '',
      street: '',
      bairro: '',
      city: '',
    },
    price: 5000.00,
    details: {
      rooms: null,
    },
    images: [fotosAlecio],
  },
  {
    id: 5,
    name: 'Rua-GG',
    type: 'Apartamento',
    address: {
      endress: 'GG, Arvoredo-Contagem',
      street: 'GG',
      bairro: 'Arvoredo',
      city: 'Contagem',
    },
    price: 800.00,
    details: {
      rooms: 2,
      garage: null,
    },
    images: [fotosGG],
  },
  {
    id: 6,
    name: 'Espaço-comercial-Cabral',
    type: 'Comercial',
    address: {
      endress: '',
      street: '',
      bairro: '',
      city: '',
    },
    price: '',
    details: {
      rooms: null,
    },
    images: [
      EspacoComercialCabral,
    ]
  },
{
  id: 7,
  name: 'Lojas-Cabral',
  type: 'Comercial',
  address: {
    endress: '',
    street: '',
    bairro: 'Cabral',
    city: '',
  },
  price: 5000.00,
  details: {
    rooms: null,
  },
  images: [
    fotosLojasCabral,
  ]
},
{
  id: 8,
  name: 'Rua-Rubi',
  type: 'Casa',
  address: {
    endress: 'Rubi, Arvoredo-Contagem',
    street: 'Rubi',
    bairro: 'Arvoredo',
    city: 'Contagem',
  },
  price: 900.00,
  details: {
    rooms: 2,
    garage: null,
  },
  images: [
    fotosRubi,
  ]
},
{
  id: 9,
  name: 'Quitinete-2',
  type: 'Apartamento',
  address: {
    endress: '',
    street: 'AV. Fernão Dias',
    bairro: 'Laguna',
    city: 'Contagem',
  },
  price: 750.00,
  details: {
    rooms: null,
  },
  images: [
    Quitinete2,
  ]
},
];

export default data;
