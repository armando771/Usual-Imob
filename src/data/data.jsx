import fotosAndresaLeonardo from '../images/FotosIMoveis/AndresaLeonardo';
import ApartamentoNacional2 from '../images/FotosIMoveis/ApartamentoNacional2';
import fotosElizandro from '../images/FotosIMoveis/CasaElizandro02';

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
  images: [
    fotosAndresaLeonardo,
  ]
},
{
    id: 2,
    name: 'Casa-Elizandro-02',
    type: 'Casa',
    address: {
      Endress: 'Oscavo Lobato, Ressaca-Contagem',
      street: 'Oscavo Lobato',
      bairro: 'Ressaca',
      city: 'Contagem',
    },
    price: 800.00,
    details: {
      rooms: 2,
    },
    images: [
      fotosElizandro,
    ]
},
{
  id: 3,
  name: 'ApartamentoNacional2',
  type: 'Apartamento',
  address:{
    endress: '',
    street: '',
    bairro: 'Nacional',
    city: 'Contagem'
  },
  price: 900.00,
  details: {
    rooms: '',
  },
  images: [
    ApartamentoNacional2,
  ]
},
];

export default data;
