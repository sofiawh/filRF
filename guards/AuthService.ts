import { KeycloakService } from 'keycloak-angular';
import {Injectable} from "@angular/core";
import {KeycloakProfile} from "keycloak-js";

@Injectable()
export class AuthService {
    public profile: KeycloakProfile | null = null;
//     public currentUser: any; // Propriété pour stocker les informations de l'utilisateur actuel
//
    constructor(private keycloakService: KeycloakService) {
        //console.log("Initialisation du service AuthService...");
        //this.loadCurrentUser().then(r => console.log(" ")); // Charge l'utilisateur actuel lors de l'initialisation du service
    }



//
//     async loadCurrentUser() {
//         if (await this.keycloakService.isLoggedIn()) {
//             const keycloakInstance = this.keycloakService.getKeycloakInstance();
//             if (keycloakInstance) {
//                 // Met à jour currentUser avec les informations de l'utilisateur actuel
//                 this.currentUser = keycloakInstance.loadUserProfile();
//                 console.log("Informations de l'utilisateur actuel chargées avec succès :", this.currentUser);
//             } else {
//                 console.error("Instance Keycloak introuvable.");
//             }
//         } else {
//             console.warn("L'utilisateur n'est pas connecté.");
//         }
//
//         // if (await this.keycloakService.isLoggedIn()) {
//         //     const keycloakInstance = this.keycloakService.getKeycloakInstance();
//         //     if (keycloakInstance) {
//         //         this.currentUser = keycloakInstance.tokenParsed; // Stocke les informations de l'utilisateur actuel
//         //         console.log("keyloakInstance:***"+keycloakInstance.profile);
//         //     } else{ console.log("keyloakInstance:***"+keycloakInstance)}
//         // }
//     }

    async getAccessToken(): Promise<string> {
        if (await this.keycloakService.isLoggedIn()) {
            const keycloakInstance = await this.keycloakService.getKeycloakInstance();
            if (keycloakInstance) {
                const token = keycloakInstance.token;
                return token ? `Bearer ${token}` : '';
            }
        }
        return '';
    }

    async loadUserProfile(): Promise<void> {
        // @ts-ignore
        if (await this.isLoggedIn()) {
            // @ts-ignore
            this.keycloakAuth.loadUserProfile().then(profile => {
                this.profile = profile;
            });
        }
    }
}
