<script>
  import { groceriesStore } from '../stores';

  export let groceryItem;

  function deleteGroceryItem() {
    groceriesStore.update((groceries) => {
      const deletedId = groceries.findIndex(({ id }) => groceryItem.id === id);
      return [...groceries.slice(0, deletedId), ...groceries.slice(deletedId + 1)];
    });
  }
</script>

<span on:click={deleteGroceryItem}>{groceryItem.text}</span>

<style>
  span {
    padding: 10px;
    font-size: 22px;
    background-color: rgb(255, 255, 169);
  }
</style>
