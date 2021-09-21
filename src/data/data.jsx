import fotosAndresaLeonardo from '../images/FotosIMoveis/AndresaLeonardo';
import fotosOscavo from '../images/FotosIMoveis/Oscavo';
import fotosElizandro from '../images/FotosIMoveis/CasaElizandro02';

const data = [
{
  id: 0,
  name: 'Andreza-Leonardo',
  type: 'Apartamento',
  adress: {
    Endress: 'Juventino dias, Ressaca-Contagem',
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
  id: 1,
  name: 'Casa Oscavo Lobato com terraço',
  type: 'Casa',
  address: {
    Endress: 'Oscavo lobato, Ressaca-Contagem',
    street: 'Oscavo lobato',
    bairro: 'Ressaca',
    city: 'Contagem',
  },
  price: 2500.00,
  details: {
    rooms: 3,
  },
  images: [
    fotosOscavo,
  ]
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
  price: 800.00,
  details: {
    rooms: 2,
  },
  images: [
    fotosElizandro,
  ]
}
];

export default data;
