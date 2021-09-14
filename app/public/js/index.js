 const Offer = {
    data() {
      return {
       "dummy":"some msg",
       "total": 5,
       "list":[1,2,3,4]
      }
    }
  }
  
  Vue.createApp(Offer).mount('#offerApp');