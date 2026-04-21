//json
//JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data interchange language.



// JSON is often used to transmit data between a server and a web application as an alternative to XML. It is also commonly used for configuration files and data storage.
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(obj);
obj.name = "Jane";
console.log(obj);
obj["age"] = 25;
console.log(obj);
//but in JSON, we cannot change the value of a key once it is set. JSON is a data format, and it does not have the ability to modify data. If you want to change the value of a key in a JSON object, you would need to create a new JSON object with the updated value.
let json = '{"name": "John", "age": 30, "city": "New York"}';
console.log(json);
json.name = "Jane"; // This will not work because json is a string, not an object
console.log(json);
json["age"] = 25; // This will also not work for the same reason
console.log(json);
//allow numbers, strings, booleans, arrays, and objects as values. However, it does not allow functions or undefined as values. JSON is a data format that is used to represent data structures and does not have the ability to execute code or define functions.
let json2 = '{"name": "John", "age": 30, "city": "New York", "isStudent": false, "hobbies": ["reading", "traveling"], "address": {"street": "123 Main St", "city": "New York"}}';
console.log(json2); 
// json is a string, we need to parse it into a JavaScript object to access its properties
let obj2 = JSON.parse(json2);
console.log(obj2);
console.log(obj2.name);
//stringify is used to convert a JavaScript object into a JSON string. This is useful when you want to send data from a web application to a server or when you want to store data in a file. The JSON.stringify() method takes a JavaScript object as input and returns a JSON string representation of that object.
//json to string
let obj3 = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: false,
    hobbies: ["reading", "traveling"],
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
let json3 = JSON.stringify(obj3);
console.log(json3);
//string to json
let json4 = '{"name": "John", "age": 30, "city": "New York"}';
let obj4 = JSON.parse(json4);
console.log(obj4);


let json5= [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

console.log(json5)
console.log(json5[1].name)
console.log(json5[1].address)
console.log(json5[1].address.city)

//API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other. An API defines the methods and data formats that applications can use to request and exchange information. APIs are used to enable integration between different systems, allowing them to work together and share data. They can be used for various purposes, such as accessing web services, retrieving data from databases, or interacting with hardware devices. APIs can be public, allowing anyone to use them, or private, restricted to specific users or applications.

async function fetchData() {
    
        let response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-03-15&sortBy=publishedAt&apiKey=19b775a5a33b4977ab7bbfd6bb2965d3");
        console.log(await response.json());
        //let data = await response.json();
        //console.log(data);
    
    }


fetchData();
//newsapi
//NewsAPI is a simple HTTP REST API for searching and retrieving live articles from all over the web. It can help you answer questions like "What's happening right now in technology?" and "What top stories are there in the US?" NewsAPI provides access to news articles from various sources and blogs, allowing developers to integrate news content into their applications. It offers endpoints for searching articles, retrieving top headlines, and getting news sources. NewsAPI is commonly used for building news aggregators, sentiment analysis tools, and other applications that require access to news data.
// weather api
let jagah = "London";

async function fetchWeather() {
    
        let weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=86c16063cd7f4120b7340346261504&q=${jagah}&aqi=no`);
        console.log(await weather.json());
        //let data = await weather.json();
        //console.log(data);
    
    }
    fetchWeather();
//WeatherAPI is a service that provides weather data and forecasts through an API (Application Programming Interface). It allows developers to access current weather conditions, forecasts, and historical weather data for various locations around the world. WeatherAPI offers endpoints for retrieving weather information based on location, date, and other parameters. It is commonly used for building weather applications, integrating weather data into websites, and creating custom weather-related services. WeatherAPI typically requires an API key for authentication and may have usage limits based on the subscription plan.