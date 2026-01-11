
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'' , redirectTo:'home' , pathMatch:'full' } ,

          {
            path:'home', 
            loadComponent:()=>
              import('./features/home/home').then((c)=> c.Home)
          },
          {
            path:'skills', 
            loadComponent:()=>
              import('./features/components/skills/skills').then((c)=> c.Skills)
          },
          {
            path:'experience', 
            loadComponent:()=>
              import('./features/components/experience/experience').then((c)=> c.Experience)
          },
          {
            path:'projects', 
            loadComponent:()=>
              import('./features/components/projects/projects').then((c)=> c.Projects)
          },
          {
            path:'courses', 
            loadComponent:()=>
              import('./features/components/courses/courses').then((c)=> c.Courses)
          },
          {
            path:'contact', 
            loadComponent:()=>
              import('./features/components/contact/contact').then((c)=> c.Contact)
          }
];
