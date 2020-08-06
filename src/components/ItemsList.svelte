<script>
  import GroceryItem from './GroceryItem.svelte';

  export let items;
  export let fromStore;
  export let toStore;
  export let bgColor;
  export let title;

  const unsubscribe = fromStore.subscribe((state) => {
		items = state;
	});
</script>

<h2>{title} <span>({items.length} items)</span></h2>
<ul>
  {#each items as groceryItem (groceryItem.id)}
    <li>
      <GroceryItem
        {groceryItem}
        {fromStore}
        {toStore}
        {bgColor}
      />
    </li>
  {/each}
</ul>

<style>
  h2 {
    margin: 0;
    padding: 1rem 3rem;
    background-color: antiquewhite;
    font-style: italic;
    font-variation-settings: 'wght' 100;
  }

  span {
    font-size: 2rem;
    font-style: normal;
    font-variation-settings: 'wght' 600;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 2rem 2rem 0;
  }

  li {
    margin: 1rem 1rem;
    display: flex;
    align-items: center;
  }
</style>
