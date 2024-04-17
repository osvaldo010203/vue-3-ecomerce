import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetail } from '@/model/types';

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    details: <Array<CartDetail>>[] 
    }),
  getters: {
  //  doubleCount: (state) => state.count * 2,
  },
  actions: {
    addProduct(productId: number){
      const detailFound = this.details.find(d=> d.productId === productId);

      if(detailFound){
          detailFound.quantity +=1;

      }else{
          this.details.push({
          productId,
          quantity:1

           });
      }
    
    },
  },
})