console.log('destructuring');

const person = {
    name: 'Marcus',
    age: 28,
    location: {
        city: 'Westport',
        temp: 82
    }
}

const { name = 'Anonymous', age } = person;

const { city, temp: temperature } = person.location;

console.log(`${name} is ${age}`);

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    }
}

const { name: publisherName = 'Self Published' } = book.publisher

console.log(publisherName)

const address = ['36 Roman Franco Bido', 'Bella Vista', 'D.N.', '10127'];
const [, city, state = 'New York', zip] = address;
console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (iced)', '2.00', '2.50', '2.75'];

const [name, , priceMedium] = item;

console.log(`A medium ${name} costs ${priceMedium}`);