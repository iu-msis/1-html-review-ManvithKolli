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
        console.log ("Test:", this.selectedOffer);
      if (this.selectedOffer) {
          this.postEditOffer(evt);
      } else {
          this.postNewOffer(evt);
      }
    },
      postEditOffer(evt) {
        this.offerForm.id = this.selectedOffer.id;
        console.log("ID: ", this.offerForm.id)
        //this.offerForm.studentId = this.selectedStudent.id;        
        
        console.log("Editing!", this.offerForm);

        fetch('api/books/update.php', {
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
      postDeleteOffer(o) {  
        if ( !confirm("Are you sure you want to delete the offer from " + o.BookTitle + "?") ) {
            return;
        }  
        
        console.log("Delete!", o);

        fetch('api/books/delete.php', {
            method:'POST',
            body: JSON.stringify(o),
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
      handleEditOffer(offer) {
          this.selectedOffer = offer;
          this.offerForm = Object.assign({}, this.selectedOffer);
      },
      handleResetEdit() {
          this.selectedOffer = null;
          this.offerForm = {};
      }
    },

    created(){
     this.fetchBooksData();
    }
  }

  
  Vue.createApp(BooksData).mount('#BooksData1');