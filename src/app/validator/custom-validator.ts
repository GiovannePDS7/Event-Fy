import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from "@angular/forms";

export class CustomValidator {

    static contemEspacos(control: AbstractControl): ValidationErrors | null {
        if (!control.value) {
          return null;
        }
        const hasSpaces = control.value.indexOf(' ') !== -1;
        return hasSpaces ? { contemEspacos: true } : null;
      }
}
