<!-- create node project learing by demo  -->

## use .env file to Sequre our keys

## use gitignore to skip files store in github

### crearte connection with mongoose.

### Added schema of database in models folder.

### Created Connection Object in database folder.

#### use express.json to convert reciving data in obj

Task express.json() body-parser
Parse JSON ✅ Built-in ✅ External
Parse form data (URL-encoded) ✅ express.urlencoded() ✅ bodyParser.urlencoded()
Using Express < 4.16 ❌ ✅ Required
Using Express >= 4.16 ✅ Use Express's built-in Optional

# use bcrypt to store password in encoded form

#### create api for login

#### create an api to insert record on todo collection

## some time database not insert data and give error like

MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted.

## then go the network Access and add current IP.

## we can use single route for diffrent method like here we use for save and find.

router.route("/").post(createTodo).get(getAllTodo);

<html>
<h1>JSON Web Token</h1>

## In json token genrate we use method sign

```
   const token= await jwt.sign({userdetails:"abc or id"},secretKey,{exiresIn:'1d'});

```

## cookies parser set on res

```
    return res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: "Login successfully",
      });

```

</html>
