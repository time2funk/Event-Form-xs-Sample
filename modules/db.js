const mongoose = require('mongoose');
mongoose.Propmise = global.Promise;
const Schema = mongoose.Schema;
const EventSchema = new Schema({
	"first-name": { 
        type: String, 
        required: true 
    },
	"second-name": { 
        type: String, 
        required: true 
    },
	"email": { 
        type: String, 
        required: true 
    },
	"date": { 
        type: Date, 
        required: true 
    }
});
const _Event = mongoose.model('Event', EventSchema);


module.exports = class {
    constructor(config){
        mongoose.connect(config.uri, { useNewUrlParser: true }).then(
            () => {
                console.log('Database is connected') 
            },
            err => { 
                console.log('Can not connect to the database'+ err)
            }
        );
    }

    createEvent(data){
        console.log('createEvent');
        console.log(data);
        return new Promise( (resolve, reject) => {
            new _Event({
                "first-name": data["first-name"],
                "second-name": data["second-name"],
                "email": data["email"],
                "date": data["date"]
            }).save((err, result) => {
                console.log('new event');
                console.log({err, result});
                (err)
                ? reject(err)
                : resolve({
                    "id": result._id.toString(),
                    "first-name": data["first-name"],
                    "second-name": data["second-name"],
                    "email": data["email"],
                    "date": data["date"]
                });
            });
        });
    }

    getEventList() {
        console.log('getEventList');
        return new Promise( (resolve, reject) => {
            _Event.find({},function(err, result) {
                if(err) reject(err);
                resolve(result);
            });
        });
    }
}
