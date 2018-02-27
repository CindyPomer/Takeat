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
mongo.exe TakeatDB --eval "db.Menu.insert({breads: [{id: 0, name: '����',img: 'pitta.jpg',type: 1}, {id: 1,'name': '����',img: 'laffa.jpg','type': 1}, {id: 2, name: '���', img: 'bagget.jpg', type: 1}], salads: [{id: 3,name: '�����',img: 'humus.jpg',type: 2}, {id: 4,name: '��� �����',img: 'salad.jpg',type: 2}, {id: 5,name: '����',img: 'chips.jpg',type: 2}], mainCourses: [{id: 6,name: '�����',img: 'shnitzel.jpg',type: 3}, {id: 7,name: '�������',img: 'shawarma.jpg',type: 3}, {id: 8,name: '���',img: 'kabab.jpg',type: 3}]});"
mongo.exe TakeatDB --eval "db.Counter.insert({_id: 'item_id' , sequence_value: 3 });"
mongo.exe TakeatDB --eval "db.Orders.insertMany([ { id: 1, user: { userName: '�����', id: '1' }, orderSubmitTime: '2018-02-25T12:48:53.434Z', bread: { id: 1, name: '����', img: '', type: '' }, salads: [ { id: 2, name: '���', img: '', 'type': '' }, { id: 3, name: '����', img: '', type: '' }, { id: 4, name: '�����', img: '', type: '' } ], mainCourse: { id: 5, name: '�����', img: '', type: '' }, isDone: false}, { id: 2, user: { userName: '�����', id: '1' }, orderSubmitTime: '2018-02-25T12:48:53.434Z', bread: { id: 1, name: '����', img: '', type: '' }, salads: [ { id: 2, name: '���', img: '', 'type': '' }, { id: 3, name: '����', img: '', type: '' }, { id: 4, name: '�����', img: '', type: '' } ], mainCourse: { id: 5, name: '�����', img: '', type: '' }, isDone: false }]);"
