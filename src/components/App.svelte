<script>
  import Fa from 'svelte-fa';
  import { faArrowAltCircleDown, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

  import AddGroceryItem from './AddGroceryItem.svelte';
  import ClearGroceryLists from './ClearGroceryLists.svelte';
  import ItemsList from './ItemsList.svelte';
  import { pageStore, groceriesStore, cartStore, localStorageService } from '../stores';

  let page;
  const unsubscribe = pageStore.subscribe((state) => {
		page = state;
  });

  groceriesStore.subscribe((state) => {
		localStorageService.saveGroceriesStore(state)
  });

  cartStore.subscribe((state) => {
		localStorageService.saveCartStore(state)
  });

  function handlePageToggle() {
    pageStore.update((state) => state === 'groceries' ? 'cart' : 'groceries');
  }
</script>

<header>
  <h1>Groceries List</h1>
  <div class="buttons">
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
  }

  h1 {
    font-variation-settings: 'wght' 500;
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
  }

  @media all and (display-mode: standalone) {
    #install-button {
      display: none;
    }
  }
</style>
