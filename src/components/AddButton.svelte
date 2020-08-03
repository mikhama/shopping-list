<script>
  import { groceriesStore } from '../stores';

  function addGroceryItem() {
    const text = prompt('Type text');

    if (text) {
      const groceryItem = {
        text,
        id: new Date().getTime(),
      }
      groceriesStore.update((groceries) => [...groceries, groceryItem]);
    }
  }
</script>

<button on:click={addGroceryItem}>+</button>

<style>
  button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgb(64, 177, 36);
    color: white;
    font-size: 50px;
    border: none;
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
</style>
