import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { UserService } from "../service/user.service";

export function validateUser(): ValidatorFn {

    let service = new UserService();

    return (control: AbstractControl): ValidationErrors | null => {

      const exist = service.exist(control.value);

      return exist ? {user: {value: control.value}} : null;
    };
}