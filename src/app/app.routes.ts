import { Routes } from '@angular/router';
import { PrincipalComponent } from './body/principal/principal.component';
import { UsuariosComponent } from './body/usuarios/usuarios.component';
import { RegistrarUsuariosComponent } from './body/registrar-usuarios/registrar-usuarios.component';
import { ProductosComponent } from './body/productos/productos.component';
import { RegistrarProductoComponent } from './body/registrar-producto/registrar-producto.component';

export const routes: Routes = [

    {
        path:""
        ,redirectTo:"/home"
        ,pathMatch:"full"
    },
    {
        path:"home",
        component:PrincipalComponent,
        data: { title: 'Home' }
    },
    {
        path:"clientes",
        children:[
            {path:"usuarios",component:UsuariosComponent, data: { title: 'lista de usuarios'}},
            {path:"registrar",component:RegistrarUsuariosComponent, data: { title: 'Registrar usuarios'}}
        ]
    },
    {
        path:"productos",
        children:[
            {path:"productos",component:ProductosComponent, data: { title: 'lista de productos'}},
            {path:"registrar",component:RegistrarProductoComponent, data: { title: 'Registrar productos'}}

        ]
    }
];
