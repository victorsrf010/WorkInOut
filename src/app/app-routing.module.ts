import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { HomePage } from './home/home.page';
import { FeedPage } from './feed/feed.page';
import { PerfilPage } from './perfil/perfil.page';
import { PlanosPage } from './planos/planos.page';
import { TreinarPage } from './treinar/treinar.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'inicio',
        component: HomePage
      },
      {
        path: 'feed',
        component: FeedPage
      },
      {
        path: 'perfil',
        component: PerfilPage
      },
      {
        path: 'planos',
        component: PlanosPage
      },
      {
        path: 'treinar',
        component: TreinarPage
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
