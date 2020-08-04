<script>
  export let groceryItem;
  export let bgColor;
  export let fromStore;
  export let toStore;

  function deleteGroceryItem() {
    fromStore.update((groceries) => {
      const deletedId = groceries.findIndex(({ id }) => groceryItem.id === id);

      toStore.update((groceries) => [...groceries, groceryItem]);

      return [...groceries.slice(0, deletedId), ...groceries.slice(deletedId + 1)];
    });
  }
</script>

<span
  on:click={deleteGroceryItem}
  style="background-color: {bgColor}"
>
  {groceryItem.text}
</span>

<style>
  span {
    padding: 1rem;
    font-size: 2.2rem;
  }
</style>
