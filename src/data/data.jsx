import fotosAndresaLeonardo from '../images/FotosIMoveis/AndresaLeonardo';
import fotosOscavo from '../images/FotosIMoveis/Oscavo';
import ApartamentoNacional2 from '../images/FotosIMoveis/ApartamentoNacional2';
import fotosElizandro from '../images/FotosIMoveis/CasaElizandro02';
import fotosAlecio from '../images/FotosIMoveis/EspaçoComercialAlecio';
import fotosGG from '../images/FotosIMoveis/RuaGG';
import EspacoComercialCabral from '../images/FotosIMoveis/EspacoComercialCabral';
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
    price: 1500.0,
    details: {
      rooms: 3,
    },
    images: [fotosAndresaLeonardo],
  },
  {
    id: 1,
    name: 'Casa Oscavo Lobato com terraço',
    type: 'Casa',
    address: {
      Endress: 'Oscavo lobato, Ressaca-Contagem',
      street: 'Oscavo lobato',
      bairro: 'Ressaca',
      city: 'Contagem',
    },
    price: 2500.0,
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
      Endress: 'Oscavo Lobato, Ressaca-Contagem',
      street: 'Oscavo Lobato',
      bairro: 'Ressaca',
      city: 'Contagem',
    },
    price: 800.0,
    details: {
      rooms: 2,
    },
    images: [fotosElizandro],
  },
  {
    id: 3,
    name: 'ApartamentoNacional2',
    type: 'Apartamento',
    address: {
      endress: '',
      street: '',
      bairro: 'Nacional',
      city: 'Contagem',
    },
    price: 900.0,
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
      Endress: '',
      street: '',
      bairro: '',
      city: '',
    },
    price: 5000.0,
    details: {
      rooms: null,
    },
    images: [fotosAlecio],
  },
  {
    id: 5,
    name: 'Rua GG',
    type: 'Apartamento',
    address: {
      Endress: 'GG, Arvoredo-Contagem',
      street: 'GG',
      bairro: 'Arvoredo',
      city: 'Contagem',
    },
    price: 800.0,
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
      Endress: '',
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
      Endress: '',
      street: '',
      bairro: 'Cabral',
      city: '',
    },
    price: 5000,
    details: {
      rooms: null,
    },
    images: [
      fotosLojasCabral,
    ]
  },
  {
    id: 8,
    name: 'Rua Rubi',
    type: 'Casa',
    address: {
      Endress: 'Rubi, Arvoredo-Contagem',
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
];

export default data;
