module.exports = function() {
    var data = { users: [],records:[],format:[],values:[] }

    // Create 20 users
    var zip=72000;
    var user=["Mark","Bravo","Amar","Sreedhar"];
    var citydata=["AR","NJ","NY"];
    var street=["Walton Blvd","Hamilton St","Bay Hill Dr"];
    var country=["USA","India","Germany"];
     for (var i = 0; i < 20; i++) {
        data.users.push({ id: i,
            name: user[Math.floor(Math.random()*user.length)],
            country:country[Math.floor(Math.random()*country.length)],
            address:[street[Math.floor(Math.random()*street.length)],citydata[Math.floor(Math.random()*citydata.length)],zip+i],

        })
    }

//Create 10 values
    for (var i = 0; i < 10; i++) {
        data.records.push({ id: i,
            Name: user[Math.floor(Math.random()*user.length)],
            City: citydata[Math.floor(Math.random()*citydata.length)],
            Country:country[Math.floor(Math.random()*country.length)],
        })
    }
//Create chart format

   data.format.push ();


//Create random chart data

    for (var i = 0; i < 10; i++) {
        data.values.push({
            label:String.fromCharCode(65+i),
            value: Math.random()*100,
            other:[ Math.random()*100, Math.random()*100]
        })
    }


    return data
}