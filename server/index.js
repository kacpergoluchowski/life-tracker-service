require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;
const app = express();
const { MongoClient } = require('mongodb');
const mongoUri = process.env.MONGO_URI;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const client = new MongoClient(mongoUri);

app.listen(port, () => {
     console.log('server started!');
    })


app.post('/sign-up', async (req, res) => {
    await createCollection();
    await updateCollection();

    async function createCollection() {
        let registrationSuccessful = false;

        try {
            await client.connect();
            const db = client.db('users')
            await db.createCollection(req.body.nickname)
            registrationSuccessful = true;
            res.json(registrationSuccessful);
        } catch(err) {
            console.log("ERROR: ", err);
            res.json(registrationSuccessful);
        } finally {
            client.close();
        }
    }

    async function updateCollection() {
        try {
            const db = client.db("users");
            const user = db.collection(req.body.nickname);

            const doc = {
                email: req.body.email,
                nickname: req.body.nickname,
                password: req.body.password
            }

            const result = await user.insertOne(doc);
        } catch(err) {
            console.log(err)
        } finally {
            client.close();
        }
    }
})

app.post('/sign-in', async (req, res) => {    
    try {
        const loginCondition = [false, false];
        await client.connect();
        
        const db = client.db('users');
        const collections = await db.listCollections().toArray();

        const userExist = collections.some(collection => collection.name == req.body.nickname);

        if(userExist) {
            loginCondition[0] = true;
            const collection = db.collection(req.body.nickname);
            const query = { nickname: req.body.nickname};
            const user = await collection.findOne(query);
            if(req.body.password == user.password) {
                loginCondition[1] = true;
                res.json(loginCondition)
            }
            else {
                res.json(loginCondition)
            }
        }
        else
            res.json(loginCondition)
    } catch(err) {
        console.log(err);
    } finally {
        client.close();
    }
})

app.post('/addHabit', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('users');
        const user = db.collection(req.body.activity[0]);

        const doc = {
            activityType: 'habit',
            activityName: req.body.activity[1],
            activityIcon: req.body.activity[2],
            activityFrequency: req.body.activity[3],
            activityUnit: req.body.activity[4],
            activityTime: req.body.activity[5],
            activityProgress: 0
        }

        await user.insertOne(doc);
    } catch(err) {
        console.log("ERR! ", err);
    } finally {
        client.close();
    }
})

app.post('/addGoal', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('users');
        const user = db.collection(req.body.activity[0]);

        const doc = {
            activityType: 'goal',
            activityName: req.body.activity[1],
            activityIcon: req.body.activity[2],
            activityDeadline: req.body.activity[3],
            activityStatus: false
        }
        
        await user.insertOne(doc);
    } catch(err) {
        console.log("ERR! ", err);
    } finally {
        client.close();
    }
})

app.post('/getActivities', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('users');
        const user = db.collection(req.body.nickname);
        
        const documents = await user.find({}).toArray();
        console.log(documents);
        res.json(documents)
    } catch(err) {
        console.log(err);
    } finally {
        client.close();
    }
})

app.post('/deleteHabit', async (req, res) => {    
     try {
        await client.connect();
        const db = client.db('users');
        const user = db.collection(req.body.nickname);

        const habitId = new ObjectId(req.body.habitId);
        const habit = await user.findOne({ _id: habitId });
        if(habit) {
            await user.deleteOne(habit);
            console.log("USUNIETO!");
        }
        else
            console.log("nie znaleziono ;(");
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
})

app.post('/editHabit', async (req, res) => {
    console.log(req.body.progressData[0]);
    try {
        await client.connect();
        const db = client.db('users');
        const user = db.collection(req.body.progressData[0]);

        const habitId = new ObjectId(req.body.progressData[1]);
        const habit = await user.findOne({ _id: habitId });
       
        const updateDoc = {
            $set: {
                activityProgress: req.body.progressData[2]
            }
        }

        const filter = { _id: habitId };

        await user.updateOne(filter, updateDoc);
    } catch(err) {
        console.log(err);
    } finally {
        client.close();
    }
})