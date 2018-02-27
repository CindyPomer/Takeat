cd "TakeatServer"
START npm start

cd..
cd "Takeat"
START npm start

cd %MONGO_PATH%
cd bin
START mongod.exe
mongo.exe TakeatDB --eval "db.Menu.remove({});"
mongo.exe TakeatDB --eval "db.Counter.remove({});"
mongo.exe TakeatDB --eval "db.Orders.remove({});"
mongo.exe TakeatDB --eval "db.Menu.insert({breads: [{id: 0, name: 'פיתה',img: 'pitta.jpg',type: 1}, {id: 1,'name': 'לאפה',img: 'laffa.jpg','type': 1}, {id: 2, name: 'בגט', img: 'bagget.jpg', type: 1}], salads: [{id: 3,name: 'חומוס',img: 'humus.jpg',type: 2}, {id: 4,name: 'סלט קלאסי',img: 'salad.jpg',type: 2}, {id: 5,name: 'ציפס',img: 'chips.jpg',type: 2}], mainCourses: [{id: 6,name: 'שניצל',img: 'shnitzel.jpg',type: 3}, {id: 7,name: 'שווארמה',img: 'shawarma.jpg',type: 3}, {id: 8,name: 'קבב',img: 'kabab.jpg',type: 3}]});"
mongo.exe TakeatDB --eval "db.Counter.insert({_id: 'item_id' , sequence_value: 3 });"
mongo.exe TakeatDB --eval "db.Orders.insertMany([{ id: 1, user: { userName: 'ליאור', id: '1' }, orderSubmitTime: '2018-02-25T12:48:53.434Z', bread: { id: 1, name: 'פיתה', img: '', type: '' }, salads: [ { id: 2, name: 'סלט', img: '', 'type': '' }, { id: 3, name: 'ציפס', img: '', type: '' }, { id: 4, name: 'חומוס', img: '', type: '' } ], mainCourse: { id: 5, name: 'שניצל', img: '', type: '' }, isDone: false}, { id: 2, user: { userName: 'ליאור', id: '1' }, orderSubmitTime: '2018-02-25T12:48:53.434Z', bread: { id: 1, name: 'פיתה', img: '', type: '' }, salads: [ { id: 2, name: 'סלט', img: '', 'type': '' }, { id: 3, name: 'ציפס', img: '', type: '' }, { id: 4, name: 'חומוס', img: '', type: '' } ], mainCourse: { id: 5, name: 'שניצל', img: '', type: '' }, isDone: false }]);"
