import { create } from "zustand";

const useCart = create((set, get) => ({
  items: [],

  add: (prod) =>
    set((state) => {
      const existe = state.items.find((i) => i.id === prod.id);
      if (existe) {
        // Si ya está, aumenta la cantidad
        return {
          items: state.items.map((i) =>
            i.id === prod.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      // Si no está, lo agrega con qty = 1
      return { items: [...state.items, { ...prod, qty: 1 }] };
    }),

  remove: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  clear: () => set({ items: [] }),

  count: () => get().items.reduce((acc, i) => acc + i.qty, 0),

  total: () => get().items.reduce((acc, i) => acc + i.precio * i.qty, 0),
}));

export default useCart;