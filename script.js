// Array
const events = [
    {title: 'shelter trade fare', date: '2024-03-12T10:00:00', location: 'KICC', attendees: 'Alikou Dangote'},
    {title: 'talent showcase', date: '2024-03-13T10:00:00', location:'NairobiTheatre' , attendees: 'Elon Musk'},
    {title: 'plots sales', date: '2024-03-14T10:00:00', location: 'optiven', attendees: 'Peter Munga'},
    {title: 'rewardig of the investors', date: '2024-03-15T10:00:00', location: 'Bomas of Kenya', attendees: 'Uhuru Kenyatta' },
    {title: 'Edu Global expo', date: '2024-03-16T10:00:00', location: 'sarit Center', attendees: 'Naushad Merali'},
    {title: 'coding and robotics', date: '2024-03-17T10:00:00', location: 'cemastea', attendees: 'Bill Gates'},
    {title: 'steam maker fair', date: '2024-03-18T10:00:00', location: 'kicc', attendees: 'Joshua Kulei'}
]
console.log(events);

// filter()
const Events1 = [];

const filteredArray = Events1.filter(tittle => tittle > 'shelter trade fare', 'talent showcase', 'plots sales',  'rewarding of the investors','edu global expo', 'coding and robotics', 'steam maker fair'  );
console.log(filteredArray);

const date = [14, 15, 16, 17, 18];

const location = events.filter(function(attendees) {
    return attendees ==  'sarit centre'

});
    console.log(events);
// map()
    const events2 = [];

    const mappedArray = events2.map(tittle => tittle > 'shelter trade fare', 'talent showcase', 'plots sales',  'rewarding of the investors','edu global expo', 'coding and robotics', 'steam maker fair');
    console.log(mappedArray);

    console.log(events);

    const eventOrganizers = new WeakMap();

    eventOrganizers.set(events[0], 'john');
    eventOrganizers.set(events[1], 'Jack');
    eventOrganizers.set(events[2], 'Ryan');
    eventOrganizers.set(events[3], 'jane');
    eventOrganizers.set(events[4], 'lucky');
    eventOrganizers.set(events[5], 'Peter');
    eventOrganizers.set(events[6], 'Nancy')
    
    for (const event of events) {
      const organizers = eventOrganizers.get(event);
      console.log(`Event: ${events}, Orgnizer: ${organizers}`);
    
    }
   
  
    const event = [
     
        {
        title: 'talent showcase',
        date: new Date( '2024-03-12T08:30:00'),
        location:'NairobiTheatre',
        attendees:(['Elon', 'Musk']) 
        },
        
        {
        title: 'plots sales',
        date: new Date( '2024-03-13T09:00:00'),
        location: 'optiven',
        attendees:(['Peter', 'Munga']) 
        },
        
       {
        title: 'rewarding of the investors', 
        date: new Date( '2024-03-15T09:00:00'), 
        location: 'Bomas of Kenya', 
        attendees:(['Uhuru', 'Kenyatta']) 
       },
    
       {
        title: 'Edu Global expo',
        date: new Date( '2024-03-16T08:30:00'), 
        location: 'sarit Center', 
        attendees:(['Naushad', 'Merali']) 
        },
    
        {
        title: 'coding and robotics',
        date: new Date( '2024-03-17T09:00:00'),
        location: 'cemastea',
        attendees:(['Bill', 'Gates' ])
    
        },
    
        {
        title: 'steam maker fair',
        date: new Date( '2024-03-18T10:00:00'),
        location: 'jamhuri grounds',
        attendees:(['Joshua', 'Kulei' ])
        },
        
        {
        title: 'shelter trade fair',
        date: new Date( '2024-03-11T06:20:00'),
        location: 'serena',
        attendees:(['Jeff', 'Mezos']) 
        },
     ]
     console.log('event');


     function displayEvents(events) {
        // Table header
        console.log("| Title | Date | Location |");
        console.log("|-------|------|----------|");
      
    
        events.forEach(({title, date, location}) => {
          // Display events in table format
          console.log("| ${title} | $ {date} | ${location} |");
        });
      }
      
      displayEvents(events);

      // function

      function eventsFunction(){
        console.log('shelter trade fare','talent showcase', 'plots sales', 'rewardig of the investors', 'Edu Global expo', 'coding and robotics','steam maker fair'  );
        console.log('2024-03-12T10:00:00', '2024-03-13T10:00:00', '2024-03-14T10:00:00', '2024-03-15T10:00:00', '2024-03-16T10:00:00', '2024-03-17T10:00:00', '2024-03-18T10:00:00');
        console.log('KICC','Nairobi theater','optiven', 'Bomas of Kenya', 'sarit Center', 'cemastea', 'kicc' );
        console.log('Alikou Dangote', 'Elon Musk', 'Peter Munga', 'Uhuru Kenyatta', 'Naushad Merali',  'Bill Gates', 'Joshua Kulei' );

    }
    eventsFunction('Willliam Ruto');



    const eventDate1 = new Date(events.date)

      const formattedDate =`/${eventDate1.getMonth(12)}${eventDate1.getDate(12) + 1}${eventDate1.getFullYear(2024)}`;
      // Add formattedDate property to event object:
      return {date, location, attendee, formattedDate };


      // for each()
     events.forEach(events => console.log(events));

    function attendee(){
    console.log(events, title);
}