<script>
  import Fa from 'svelte-fa';
  import { faArrowAltCircleDown, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

  import AddButton from './AddButton.svelte';
  import GroceriesList from './GroceriesList.svelte';
  import CartList from './CartList.svelte';
  import { pageStore } from '../stores';

  let page;
  const unsubscribe = pageStore.subscribe((state) => {
		page = state;
  });

  function handlePageToggle() {
    pageStore.update((state) => state === 'groceries' ? 'cart' : 'groceries');
  }
</script>

<header>
  <h1>Groceries List</h1>
  <button class="page-toggle-button" on:click={handlePageToggle}>
    <Fa icon={faCartArrowDown} />
  </button>
  <button id="install-button" class="install-button">
    <Fa icon={faArrowAltCircleDown} />
  </button>
</header>
<main>
  {#if page === 'groceries'}
    <GroceriesList />
  {:else if page === 'cart'}
    <CartList />
  {/if}

  <AddButton />
</main>

<style>
  header {
    display: flex;
    justify-content: space-between;
    background: black;
    color: white;
    padding: 0 3rem;
  }

  h1 {
    font-style: italic;
    font-variation-settings: 'wght' 100;
  }

  button {
    background: none;
    border: none;
    color: white;
  }

  .install-button {
    font-size: 5rem;
  }

  .page-toggle-button {
    color: rgb(240, 68, 25);
    font-size: 3rem;
  }

  @media all and (display-mode: standalone) {
    button {
      display: none;
    }
  }
</style>
