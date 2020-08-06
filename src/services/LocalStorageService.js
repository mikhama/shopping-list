class LocalStorageService {
  saveGroceriesStore(store) {
    localStorage.setItem('groceries', JSON.stringify(store));
  }

  saveCartStore(store) {
    localStorage.setItem('cart', JSON.stringify(store));
  }

  getStores() {
    const groceries = JSON.parse(localStorage.getItem('groceries') || '[]');
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    return {
      groceries,
      cart,
    }
  }
}

export default LocalStorageService;
