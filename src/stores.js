import { writable } from 'svelte/store';

import LocalStorageService from './services/LocalStorageService';

export const groceriesStore = writable([]);
export const cartStore = writable([]);
export const pageStore = writable('groceries');

export const localStorageService = new LocalStorageService();

const { groceries, cart } = localStorageService.getStores();

groceriesStore.set(groceries);
cartStore.set(cart);
