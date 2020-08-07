<script>
  import Fa from 'svelte-fa';
  import { faArrowAltCircleDown, faCartArrowDown, faCopy } from '@fortawesome/free-solid-svg-icons';

  import AddGroceryItem from './AddGroceryItem.svelte';
  import ClearGroceryLists from './ClearGroceryLists.svelte';
  import ItemsList from './ItemsList.svelte';
  import { pageStore, groceriesStore, cartStore, localStorageService } from '../stores';

  let page;
  const unsubscribe = pageStore.subscribe((state) => {
		page = state;
  });

  let groceries;
  groceriesStore.subscribe((state) => {
		groceries = state;
		localStorageService.saveGroceriesStore(state)
  });

  let cart;
  cartStore.subscribe((state) => {
		cart = state;
		localStorageService.saveCartStore(state)
  });

  function handlePageToggle() {
    pageStore.update((state) => state === 'groceries' ? 'cart' : 'groceries');
  }

  function share() {
    const text = `Groceries List for ${new Date().toDateString()}`;
    const regexp = /https{0,1}:\/\/.{1,}?\//;
    const [urlBase] = location.href.match(regexp);
    const url = `${urlBase}?groceries=${encodeURIComponent(JSON.stringify(groceries))}&cart=${encodeURIComponent(JSON.stringify(cart))}`;

    if ('share' in navigator) {
      navigator.share({
        url,
        title: document.title,
        text: text,
      })
    } else {
      // Fallback
      location.href = `https://t.me/share/?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    }
  }
</script>

<header>
  <h1>Groceries List</h1>
  <div class="buttons">
    <button class="share-button" on:click={share}>
      <Fa icon={faCopy} />
    </button>
    <button class="page-toggle-button" on:click={handlePageToggle}>
      <Fa icon={faCartArrowDown} />
    </button>
    <button id="install-button">
      <Fa icon={faArrowAltCircleDown} />
    </button>
  </div>
</header>
<main>
  {#if page === 'groceries'}
    <ItemsList
      fromStore={groceriesStore}
      toStore={cartStore}
      bgColor="#C9E0F7"
      title="Need to buy"
    />
    <AddGroceryItem />
  {:else if page === 'cart'}
    <ItemsList
      fromStore={cartStore}
      toStore={groceriesStore}
      bgColor="#F19B85"
      title="Groceries in cart"
    />
    <ClearGroceryLists />
  {/if}
</main>

<style>
  header {
    display: flex;
    justify-content: space-between;
    background: rgb(16, 54, 88);
    color: white;
    padding: 0 3rem;
    height: 8rem;
    align-items: center;
  }

  h1 {
    font-variation-settings: 'wght' 500;
    font-size: 2.8rem;
  }

  button {
    background: none;
    border: none;
    color: white;
  }

  .buttons {
    display: flex;
  }

  #install-button {
    font-size: 5rem;
  }

  .page-toggle-button {
    color: rgb(240, 68, 25);
    font-size: 3rem;
    width: 6rem;
  }

  .share-button {
    color: white;
    font-size: 3rem;
    width: 6rem;
  }

  @media all and (display-mode: standalone) {
    #install-button {
      display: none;
    }
  }

  @media all and (max-width: 420px){
    h1 {
      font-size: 2.2rem;
    }
  }
</style>
