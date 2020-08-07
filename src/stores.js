import { writable } from 'svelte/store';

import LocalStorageService from './services/LocalStorageService';

export const groceriesStore = writable([]);
export const cartStore = writable([]);
export const pageStore = writable('groceries');

export const localStorageService = new LocalStorageService();

const { groceries, cart } = localStorageService.getStores();

const urlParams = new URLSearchParams(window.location.search);

const groceriesParam = urlParams.get('groceries');
const cartParam = urlParams.get('cart');

const sharedGroceries = groceriesParam && JSON.parse(groceriesParam);
const sharedCart = cartParam && JSON.parse(cartParam);

groceriesStore.set(sharedGroceries || groceries);
cartStore.set(sharedCart || cart);
