import dotenv from 'dotenv';

dotenv.config(); //it is a function that loads environment variables from a .env file into process.env

export const PORT = process.env.PORT || 3000;

