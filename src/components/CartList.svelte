<script>
  import GroceryItem from './GroceryItem.svelte';
  import { groceriesStore, cartStore } from '../stores';

  let groceries;
  const unsubscribe = cartStore.subscribe((state) => {
		groceries = state;
	});

</script>

<ul>
  {#each groceries as groceryItem (groceryItem.id)}
    <li>
      <GroceryItem
        bind:groceryItem
        bgColor="#F19B85"
        fromStore={cartStore}
        toStore={groceriesStore}
      />
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;

    list-style: none;
    padding: 0;
  }

  li {
    margin: 2rem 1rem;
  }
</style>
