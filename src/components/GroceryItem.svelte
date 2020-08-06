<script>
  import Fa from 'svelte-fa';
  import { faTimes } from '@fortawesome/free-solid-svg-icons';

  export let groceryItem;
  export let bgColor;
  export let fromStore;
  export let toStore;

  function moveGroceryItem() {
    fromStore.update((groceries) => {
      const deletedId = groceries.findIndex(({ id }) => groceryItem.id === id);

      toStore.update((groceries) => [...groceries, groceryItem]);

      return [...groceries.slice(0, deletedId), ...groceries.slice(deletedId + 1)];
    });
  }

  function deleteGroceryItem() {
    fromStore.update((groceries) => {
      const deletedId = groceries.findIndex(({ id }) => groceryItem.id === id);

      return [...groceries.slice(0, deletedId), ...groceries.slice(deletedId + 1)];
    });
  }

</script>

<button
  on:click
  on:dblclick={moveGroceryItem}
  class="item"
  style="background-color: {bgColor}"
  type="button"
>
  {groceryItem.text}
</button>
<button
  on:click={deleteGroceryItem}
  class="close-button"
  type="button"
>
  <Fa icon={faTimes} />
</button>

<style>
  .item {
    border: none;
    padding: 1rem;
    font-size: 2.2rem;
  }

  .close-button {
    display: none;
    font-size: 3rem;
    color: white;
    background-color: rgb(27, 90, 146);
    height: 4.6rem;
    width: 4rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 0 1rem 1rem 0;
    border: none;
  }

  .close-button:active,
  .close-button:focus,
  .item:active + .close-button,
  .item:focus + .close-button {
    display: flex;
  }
</style>
