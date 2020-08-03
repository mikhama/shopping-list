<script>
  import Grocery from './GroceryItem.svelte';
  import { groceriesStore } from '../stores';

  let groceries;
  const unsubscribe = groceriesStore.subscribe((state) => {
		groceries = state;
	});

</script>

<ul>
  {#each groceries as groceryItem (groceryItem.id)}
    <li>
      <Grocery bind:groceryItem />
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
    margin: 20px 10px;
  }
</style>
