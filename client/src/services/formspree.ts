const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdbjdez';

export interface FinancingFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  profession: string;
  monthlyIncome: string;
  desiredAmount: string;
  repaymentDuration: string;
  durationUnit: string;
  financingType: string;
  projectDescription: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitFinancingForm(data: FinancingFormData) {
  const formData = new FormData();
  
  formData.append('Nom Complet', data.fullName);
  formData.append('Email', data.email);
  formData.append('Téléphone', data.phone);
  formData.append('Pays', data.country);
  formData.append('Adresse', data.address);
  formData.append('Profession', data.profession);
  formData.append('Revenus Mensuels', data.monthlyIncome);
  formData.append('Montant Souhaité', data.desiredAmount);
  formData.append('Durée de Remboursement', `${data.repaymentDuration} ${data.durationUnit}`);
  formData.append('Type de Financement', data.financingType);
  formData.append('Description du Projet', data.projectDescription);
  formData.append('_subject', `Nouvelle demande de financement de ${data.fullName}`);
  formData.append('_replyto', data.email);

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to submit financing form');
  }

  return response.json();
}

export async function submitContactForm(data: ContactFormData) {
  const formData = new FormData();
  
  formData.append('Nom', data.name);
  formData.append('Email', data.email);
  formData.append('Sujet', data.subject);
  formData.append('Message', data.message);
  formData.append('_subject', `Nouveau message de contact: ${data.subject}`);
  formData.append('_replyto', data.email);

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }

  return response.json();
}
