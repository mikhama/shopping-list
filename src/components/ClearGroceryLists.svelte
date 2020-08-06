<script>
  import Fa from 'svelte-fa';
  import { faTrash } from '@fortawesome/free-solid-svg-icons';

  import { groceriesStore, cartStore } from '../stores';

  const ESC_CODE = 13;

  let value;
  let input;

  function clearStores(event) {
    groceriesStore.set([]);
    cartStore.set([]);
  }
</script>

<button type="button" on:click={clearStores}>
  <Fa icon={faTrash} />
</button>

<style>
  button {
    width: 6rem;
    border-radius: 50%;
    background: rgb(240, 68, 25);
    color: white;
    font-size: 3rem;
    border: none;
    right: 3rem;
    position: fixed;
    bottom: 3rem;
    height: 6rem;
  }
</style>
