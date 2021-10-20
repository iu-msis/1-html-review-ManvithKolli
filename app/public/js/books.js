const BooksData = {
    data() {
      return {
        "books":[],
        students: [],
        selectedStudent: null,
        offers: [],
        offerForm: {},
        selectedOffer: null
       }
    },
    
    methods:{
      fetchBooksData() {
        fetch('/api/books/')
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            this.books = responseJson;
        })
        .catch( (err) => {
            console.error(err);
        })
    },
    postOffer(evt) {
      console.log("Sample Log- Control is Here")
      this.postNewOffer(evt);
  },
  postNewOffer(evt) {
    //this.offerForm.studentId = this.selectedStudent.id;        
    
    console.log("Creating!", this.offerForm);

    fetch('api/books/create.php', {
        method:'POST',
        body: JSON.stringify(this.offerForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.offers = json;
        
        // reset the form
        this.handleResetEdit();
      });
  },
    },

    created(){
     this.fetchBooksData();
    }
  }

  
  Vue.createApp(BooksData).mount('#BooksData1');