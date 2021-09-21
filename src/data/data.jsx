import fotosAndresaLeonardo from '../images/FotosIMoveis/AndresaLeonardo';
import ApartamentoNacional2 from '../images/FotosIMoveis/ApartamentoNacional2';

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
