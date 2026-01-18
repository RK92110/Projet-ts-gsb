import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Medecin } from '../types/medecin.interface';
import { Doctor } from '../types/doctor.interface';
import { convertMedecinToDoctor } from '../helpers/convert-medecin-to-doctor';

@Injectable({ providedIn: 'root' })
export class DoctorsService {
  private httpClient = inject(HttpClient);  
  
  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Medecin[]>('assets/doctors.json')
      .pipe(
		      map((medecins) => medecins.map(convertMedecinToDoctor))
      );  
  }
}


[
  {
    "id": 1,
    "prenom": "Aline",
    "nom": "Dupont",
    "email": "aline.dupont@gsb.test",
    "specialite": "Cardiologie",
    "adresse": "12 rue de la Paix, 75002 Paris"
  },
  {
    "id": 2,
    "prenom": "Karim",
    "nom": "Benali",
    "email": "karim.benali@gsb.test",
    "specialite": "Dermatologie",
    "adresse": "4 avenue des Ternes, 75017 Paris"
  },
  {
    "id": 3,
    "prenom": "Lucie",
    "nom": "Moreau",
    "email": "lucie.moreau@gsb.test",
    "specialite": "Pédiatrie",
    "adresse": "28 rue Victor-Hugo, 69002 Lyon"
  },
  {
    "id": 4,
    "prenom": "Émile",
    "nom": "Rossi",
    "email": "emile.rossi@gsb.test",
    "specialite": "Gynécologie",
    "adresse": "5 boulevard Baille, 13006 Marseille"
  }
]