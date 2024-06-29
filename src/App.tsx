
import './App.css';
import ItemComponent from './components/ItemComponent';
import useItems from './hooks/useItems';
import useSEO from './hooks/useSeo';

export type Item = {
  id: string;
  name: string;
  timestamp: number;
}

const App = () => {
  const { items, addItem, removeItem } = useItems();
  useSEO({
    title: `${items.length} Prueba React`,
    description: "App para agregar y borrar items"
  })
  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;

    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;
    addItem(input.value);
    input.value = '';
  }

  const deleteItem = (itemId: string) => () => {
    removeItem(itemId)
  }

  return (
    <main >
      <h1>Technical test</h1>
      <div className='flex justify-around flex-wrap border border-gray-200 rounded-lg shadow p-8 mt-2'>
        <aside>
          <form className='flex flex-col' onSubmit={handleAddItem} aria-label='Form para añadir un nuevo item'>
            <label>
              Create new item
              <input name='item' type='text' className='bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' />
            </label>
            <button className="px-4 py-1 mt-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Add item
            </button>
          </form>
        </aside>
        <section>
          <h3>List</h3>
          {items.length === 0 ? (
            <p>There are no elements in the list</p>
          ) : (
            <ul className='list-none'>
              {
                items.map((item) => {
                  return (
                    <ItemComponent key={item.id} item={item} deleteItem={deleteItem(item.id)} />
                  )
                })
              }
            </ul>
          )}
        </section>
      </div>
    </main >
  )
}

export default App;
