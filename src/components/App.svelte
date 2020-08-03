<script>
  import Fa from 'svelte-fa';
  import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

  import AddButton from './AddButton.svelte';
  import GroceriesList from './GroceriesList.svelte';
</script>

<header>
  <h1>Groceries List</h1>
  <button id="install-button">
    <Fa icon={faArrowAltCircleDown} />
  </button>
</header>
<main>
  <GroceriesList />
  <AddButton />
</main>

<style>
  header {
    display: flex;
    justify-content: space-between;
    background: rgb(64, 177, 36);
    color: white;
    padding: 0 30px;
  }

  button {
    background: none;
    border: none;
    color: white;
    font-size: 50px;
  }

  @media all and (display-mode: standalone) {
    button {
      display: none;
    }
  }
</style>
