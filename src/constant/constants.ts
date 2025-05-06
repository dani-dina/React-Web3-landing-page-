// types.ts (optional if you want to reuse the type)
export interface NavigationItem {
 id: string;
 title: string;
 path: string;
}

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
