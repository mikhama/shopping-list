<script>
  import Fa from 'svelte-fa';
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

  import { groceriesStore } from '../stores';

  const ESC_CODE = 13;

  let value;
  let input;

  function addGroceryItem(event) {
    const escKeyOrAddButton = event.currentTarget.type === 'button' || event.keyCode === ESC_CODE;
    if (value && escKeyOrAddButton) {
      const groceryItem = {
        text: value,
        id: new Date().getTime(),
      }
      groceriesStore.update((groceries) => [...groceries, groceryItem]);
      value = '';

      input.focus();
    }
  }
</script>

<input type="text" on:keyup={addGroceryItem} bind:value={value} bind:this={input}/>
<button type="button" on:click={addGroceryItem}>
  <Fa icon={faCartPlus} />
</button>

<style>
  button {
    width: 6rem;
    border-radius: 50%;
    background: rgb(36, 109, 177);
    color: white;
    font-size: 3rem;
    border: none;
    right: 3rem;
  }

  input {
    right: 12rem;
    border: none;
    width: calc(100vw - 15rem);
    box-sizing: border-box;
    border-radius: 5rem;
    background: rgb(222, 235, 248);
    font-size: 2rem;
    padding: 0 2rem;
  }

  button,
  input {
    position: fixed;
    bottom: 3rem;
    height: 6rem;
  }
</style>
