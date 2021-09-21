 const Offer = {
    data() {
      return {
        "person":{},
       }
    },

    computed:{
      prettyBirthday(){
        return dayjs(this.person.dob.date).format('DD MMM YYYY');
      },
      getImageUrl(){
        return this.person.picture.large
      }
    },

    methods:{

      fetchUserData(){

        fetch('https://randomuser.me/api/')
      .then(response=>response.json())
      .then((parsedJson) => {
        this.person=parsedJson.results[0]
      })
      .catch(err=>{
        console.error(err)
      })

      }

    },

    created(){
      this.fetchUserData();     
    }
  }

  
  Vue.createApp(Offer).mount('#offerApp');