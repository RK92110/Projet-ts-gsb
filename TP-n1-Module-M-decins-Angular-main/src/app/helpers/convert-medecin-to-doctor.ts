import { Medecin } from '../types/medecin.interface';
import { Doctor } from '../types/doctor.interface';

// Fonction classique (pas fléchée)
export function convertMedecinToDoctor(medecin: Medecin): Doctor {
  return {
    id: medecin.id,
    nom: medecin.nom,
    prenom: medecin.prenom,
    email: medecin.email,
    specialite: medecin.specialite,
    adresse: medecin.adresse,
  };
}
