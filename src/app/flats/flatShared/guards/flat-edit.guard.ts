import { CanDeactivateFn,CanDeactivate } from '@angular/router';
import { FlatEditComponent } from '../../flat-edit/flat-edit.component';


export const FlatEditGuard: CanDeactivateFn<FlatEditComponent> = (component:FlatEditComponent) => {
  if(component.flatForm.dirty){
    const flatName=component.flatForm.get('flatName')?.value || 'New Flat';
    return confirm('Do you want to cancel the changes mades on'+flatName)

  }
  return true;
};

//Old  method
// export class FlatEditGuard implements CanDeactivate<FlatEditComponent> {

//   canDeactivate(component: FlatEditComponent): boolean {
//     if(component.flatForm.dirty){
//       const flatName=component.flatForm.get('flatName')?.value || 'New Flat';
//       return confirm('Do you want to cancel the changes mades on'+flatName)

//     }
//     return true;
//   }


// } 
