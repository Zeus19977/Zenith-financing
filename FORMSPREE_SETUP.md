# Configuration Formspree pour Zenith Finance

## Instructions de Configuration

Pour que les formulaires de contact et de demande de financement fonctionnent correctement, vous devez configurer Formspree avec votre email.

### Étapes :

1. **Accédez à Formspree** : https://formspree.io

2. **Créez un compte** ou connectez-vous

3. **Créez un nouveau formulaire** :
   - Cliquez sur "New Form"
   - Entrez votre email : `allianzfinanzas0@gmail.com`
   - Nommez le formulaire : "Zenith Finance Contact & Financing"
   - Cliquez sur "Create"

4. **Récupérez l'ID du formulaire** :
   - Après création, vous verrez une URL comme : `https://formspree.io/f/XXXXXXXXX`
   - Copiez l'ID (la partie `XXXXXXXXX`)

5. **Mettez à jour le code** :
   - Ouvrez le fichier `client/src/services/formspree.ts`
   - Remplacez `xyzabc123` par votre vrai ID Formspree dans les deux URLs :
     ```typescript
     const FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_ID_ICI';
     ```
     Et dans les deux fonctions `submitFinancingForm` et `submitContactForm`, remplacez :
     ```typescript
     await fetch('https://formspree.io/f/VOTRE_ID_ICI', {
     ```

6. **Testez** :
   - Remplissez un formulaire sur le site
   - Vérifiez que vous recevez un email à `allianzfinanzas0@gmail.com`

## Configuration des Réponses Automatiques (Optionnel)

Dans le tableau de bord Formspree :
1. Allez dans les paramètres du formulaire
2. Activez "Auto-reply" 
3. Configurez un message de confirmation pour les utilisateurs

## Support

Pour toute question sur Formspree, consultez : https://formspree.io/help
