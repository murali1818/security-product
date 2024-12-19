import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('675bda570028d2255aee'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
