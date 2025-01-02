import { Client, Account, Databases} from 'appwrite';
 
export const client = new Client();
 
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('675bda570028d2255aee'); // Replace with your project ID
 
export const account = new Account(client);
export const databases = new Databases(client);
 
export const databaseId = '67726026001452427a70';
export const collectionId = '6772606b003db79a503d';
 
export { ID } from 'appwrite';
 
 