const express = require('express')
// require('dotenv').config();
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
 //const Test = require("./models/testschema");
 //const Test = require("./models/AddData");
 const Add = require('./models/AddData')

//connecting database
 const mongoose = require('mongoose');
 

const url = "mongodb://Omar_Mohamed:omar123@ac-fj4tq4c-shard-00-00.13i9g5t.mongodb.net:27017,ac-fj4tq4c-shard-00-01.13i9g5t.mongodb.net:27017,ac-fj4tq4c-shard-00-02.13i9g5t.mongodb.net:27017/?ssl=true&replicaSet=atlas-11khe6-shard-0&authSource=admin&retryWrites=true&w=majority"

async function connect(){
  try{
    await mongoose.connect(url)
    console.log("connected");
  } catch (error) {
        console.error(error);
  }

}

connect();


app.get('/', (req, res) => {
    res.redirect('./home')
  })


// app.get('/home', (req, res) => {
//     res.render('./home')
//   })

app.get("/home", (req, res) => {
 
  // result = Array of objects inside mongo database
 
  Add.find()
    .then((result) => {
      res.render("home", { arrproduct: result });
    })
    .catch((err) => {
      console.log(err);
    });
}); 

app.get("/shop", (req, res) => {
 
  // result = Array of objects inside mongo database
 
  Add.find()
    .then((result) => {
      res.render("shop", { arrproduct: result });
    })
    .catch((err) => {
      console.log(err);
    });
}); 



  app.get('/signin', (req, res) => {
    res.render('./signin')
    
  })
  app.get('/smartlogin', (req, res) => {
    res.render('./smartlogin')
    
  })
  // app.get('/shop', (req, res) => {
  //   res.render('./shop')
    
  // })

  app.get('/sproduct', (req, res) => {
    res.render('./sproduct')
    
  })

  app.get('/cart', (req, res) => {
    res.render('./cart')
    
  })
  
  
  app.get('/CRUD', (req, res) => {
    res.render('./CRUD')
    
  })


//post data to Database
app.post("/CRUD", (req, res) => {
  const title = new Add(req.body);
 
  console.log(req.body);
 
      title
    .save()
    .then( result => {
      res.redirect("/home");
    })
    .catch( err => {
      console.log(err);
    });
}); 


//dynamic url
app.get("/:id", (req, res) => {
  // result =   object  inside mongo database
 
  Add.findById(req.params.id)
    .then((result) => {
      res.render("sproduct", {objproduct: result });
    })
    .catch((err) => {
      console.log(err);
    });
}); 



  //run the server at port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// // app.get('/', (req, res) => {
// //   res.send('Hello nodejs Omaar')
// // })
// app.get('/', (req, res) => {
//     res.render('page')
//   })
// app.get('/home', (req, res) => {
//     res.render('o./hme')
//     // res.send("welcome")
//   })

// // app.use((req, res, next) => {
// //     res.status(404).send("Sorry can't find that!")
// //   })


// app.post("/CRUD", (req, res) => {
//   const title = new Test(req.body);
 
//   console.log(req.body);
 
//       title
//     .save()
//     .then( result => {
//       res.redirect("/home");
//     })
//     .catch( err => {
//       console.log(err);
//     });
// }); 