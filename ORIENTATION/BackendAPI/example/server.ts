
import { Response, Request} from 'express'; 
import { Database, User } from './database';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 
// testing server connection:
// app.get('/', (_req: Request, res: Response) => {
//   res.send('hello');
// });



// endpointon jöjjenek vissza a mentorok
const db = new Database();
app.get('/', (_req: Request, res: Response<User[]>) => {
  const mentors = db.getMentors();
  res.json(mentors);
});



// egy darab mentort kérem ID szerint
app.get('/:id', (req: Request, res: Response<User | string>) => {
   const { id } = req.params;
   const user = db.getMentorById(parseInt(id));
  //  console.log(id);
  //  res.send();

  // ha user nem létezik:
  if (!user) {
    return res.status(404).send('User not found');
  }
  // ha létezik:
  return res.json(user);
});



// create new mentor:
app.post('/', (req: Request, res: Response) => {
  const { name } = req.body;
  const biggestID = db.getBiggestId();

  const newUser: User = {
    name: name,
    id: biggestID + 1
  };

  db.addMentor(newUser);

  return res.status(201).send('created');
});



// DELETE mentor by ID:
app.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  db.removeMentor(parseInt(id));
  return res.status(200).send('Mentor is removed');
});



// PUT - modify mentor by ID: modify the name
app.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  db.newNamebyId(parseInt(id),name);
  res.status(201).send('Name is updated');
});



app.listen(PORT, () => {
  console.log(`app listens here: ${PORT}`);
});

// _req azért kell mert a TS reklamál h never read a req paraméter
// getmentors: get kérés, egy változóba teszem a db-n meghívott getMentors() metódust
// és a response az lesz h a res paraméteren meghivom json()-el ezt a változót
// get mentor by ID console.log(id)-t azt a VS code console-ban látom
// get mento by ID-nál a params-ok mindig stringek kell h legyenek,
// ezért kell a ID numbert átparse-olni
// ha az if-nél 31 és 35 sorban nem irok return-t és utána a send-nél sem return-ölök, akkor:
// hibára fog futni, mert az if-es returnt elküldtem igy az utána lévőt már nem tudom

// POST: addMentor, response most csak status kódot fog tartalmazni
// ID-t nem kérek be, mert én fogom addMentor esetében létrehozni, vagyis még nincs ID-m
// nevet kérek be, mert az a másik key az interface-ben
// ezt a nevet kimentem változóba, post-s endpoint ezért bodyba fog menni
// put esetén is body-ba megy

// newUser object-ben a name: name azt jelenti kay:value pár, a value a const { name }
// ezt úgy irnám új JS módon, hogy csak azt irom: name. Ebből tudja, h ez valójában name: name.

// majd az addmentor() meghivom benne a newUser-el, akinek a neve és generált ID-ja van/lesz

// majd response: egy 201-es státusz lesz, amihez kell a send(), h el is küldje. 
