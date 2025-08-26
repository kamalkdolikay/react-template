export interface Home {
    id: number;
    name: string;
    email: string;
}

const APP_NAME = import.meta.env.VITE_APP_NAME;
console.log(APP_NAME)