import fotosAndresaLeonardo from '../images/FotosIMoveis/AndresaLeonardo';
import fotosOscavo from '../images/FotosIMoveis/Oscavo';
import ApartamentoNacional2 from '../images/FotosIMoveis/ApartamentoNacional2';
import fotosElizandro from '../images/FotosIMoveis/CasaElizandro02';
import fotosAlecio from '../images/FotosIMoveis/EspaçoComercialAlecio';

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
  price: 5000.00,
  details: {
    rooms: null,
    dimensions: ''
  },
  images: [
    fotosAlecio,
  ]
}
];

export default data;
