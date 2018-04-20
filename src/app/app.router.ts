import 	{ RouterModule } from '@angular/router';

import 	{ AppComponent } from './app.component';
import 	{ BillListComponent } from './bill/list.component';

export const appRouter=[
  {path: '', component: AppComponent},
  {path: 'bill', component: BillListComponent}
]