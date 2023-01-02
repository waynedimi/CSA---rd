import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AppointmentGuardService implements CanActivate {

    constructor(private router: Router) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        const id: any = route.paramMap.get('id');

        if (isNaN(id) || id < 1) {
            alert("Invalid appointment id");
            this.router.navigate(['/appointments']);
            return false;
        }

        return true;
    }

}