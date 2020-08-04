import { writable } from 'svelte/store';

export const groceriesStore = writable([]);
export const cartStore = writable([]);
export const pageStore = writable('groceries');
