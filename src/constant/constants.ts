import verify from '../assets/verify.png';
import user from '../assets/user.png';
import deposit from '../assets/deposit.png';
import trade from '../assets/trade.png';

export interface NavigationItem {
 id: string;
 title: string;
 path: string;
}
export interface landingTitle {
 headingOne : string;
 headingTwo : string;
 btnText : string
}
export interface solutionCards {
  id : string;
  title : string;
  description : string;
  number : string;
}
export const SolutionCards : solutionCards[] = [
  {
    id : '0',
    title : 'Huge Collection',
    description : 'We have a huge amount of collection on NFTs',
    number : '01'
  },
  {
    id : '1',
    title : 'High Quality',
    description : 'We have a huge amount of collection on NFTs',
    number : '02'
  },
  {
    id : '2',
    title : 'Top Resource',
    description : 'We have a huge amount of collection on NFTs',
    number : '03'
  },
  {
    id : '3',
    title : 'Big Community',
    description : 'We have a huge amount of collection on NFTs',
    number : '04'
  },
];


export const navigations: NavigationItem[] = [
 {
   id: '0',
   title: 'Home',
   path: '/',
 },
 {
   id: '1',
   title: 'Explore',
   path: '/explore',
 },
 {
   id: '2',
   title: 'About',
   path: '/about',
 },
 {
  id : '3',
  title : 'Roadmap',
  path : '/roadmap'
 },
 {
  id : '4',
  title : 'Term',
  path : '/term'
 },
 {
  id : '5',
  title : 'Contact',
  path : '/contact'
 }
];

export interface StepCard {
  id : string;
  step : string;
  title : string;
  description : string;
  image : string;
}

export const stepCard : StepCard[] = [
  {
    id : '0',
    step : 'Step 1',
    title : 'Create Account',
    description : 'some description here',
    image : user
  },  {
    id : '1',
    step : 'Step 2',
    title : 'Verify Account',
    description : 'some description here',
    image : verify
  },
  {
    id : '2',
    step : 'Step 3',
    title : 'Desposite Money',
    description : 'some description here',
    image : deposit
  },
    {
    id : '3',
    step : 'Step 4',
    title : 'Start Trading',
    description : 'some description here',
    image : trade
  }
];

export const footerLinks = [
  { title: 'Product', links: ['API', 'NFTs', 'Payments', 'NFTs', 'Payments'] },
  { title: 'Product', links: ['API', 'NFTs', 'Payments', 'NFTs', 'Payments'] },
  { title: 'Product', links: ['API', 'NFTs', 'Payments', 'NFTs', 'Payments'] },
  { title: 'Product', links: ['API', 'NFTs', 'Payments', 'NFTs', 'Payments'] },
];

export const collection = [
  {
    id : '0',
    title : 'GT NFT',
    description : 'A litle description here',
    image : '',
    alt : 'GT NFT',
  },
    {
    id : '0',
    title : 'GT NFT',
    description : 'A litle description here',
    image : '',
    alt : 'GT NFT',
  },
    {
    id : '0',
    title : 'GT NFT',
    description : 'A litle description here',
    image : '',
    alt : 'GT NFT',
  },
    {
    id : '0',
    title : 'GT NFT',
    description : 'A litle description here',
    image : '',
    alt : 'GT NFT',
  }

];