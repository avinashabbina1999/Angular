import { Routes } from '@angular/router';
import { ControlFlowComponent } from '../components/control-flow/control-flow.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { NgClassComponent } from '../components/ng-class/ng-class.component';
import { NgIfComponent } from '../components/ng-if/ng-if.component';
import { NgForComponent } from '../components/ng-for/ng-for.component';
import { NgStyleComponent } from '../components/ng-style/ng-style.component';
import { SignalComponent } from '../components/signal/signal.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { TemplateFormComponent } from '../components/template-form/template-form.component';
import { RelativeFormComponent } from '../components/relative-form/relative-form.component';
import { GetApiComponent } from '../components/get-api/get-api.component';
import { PostApiComponent } from '../components/post-api/post-api.component';
import { PutApiComponent } from '../components/put-api/put-api.component';
import { DeleteApiComponent } from '../components/delete-api/delete-api.component';
import { LifeCycleComponent } from '../components/life-cycle/life-cycle.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    },
    {
        path: 'control-flow',
        component: ControlFlowComponent
    },
    {
        path: 'dataBinding',
        component: DataBindingComponent
    },
    {
        path: 'ngClass',
        component: NgClassComponent
    },
    {
        path: 'ng-if',
        component: NgIfComponent
    },
    {
        path: 'ng-for',
        component: NgForComponent
    },
    {
        path: 'ng-style',
        component: NgStyleComponent
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'template-form',
        component: TemplateFormComponent
    },
    {
        path: 'reactive-form',
        component: RelativeFormComponent
    },
    {
        path: 'get-api',
        component: GetApiComponent
    },
    {
        path: 'post-api',
        component: PostApiComponent
    },
    {
        path: 'put-api',
        component: PutApiComponent
    },
    {
        path: 'delete-api',
        component: DeleteApiComponent
    },
    {
        path: 'life-cycle',
        component: LifeCycleComponent
    }
];
