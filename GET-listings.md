<!-- GET /listings

Juston Martinez
12-18-2014
Coached by Mike
this is my first API endpoint. 
This is a model of the api endpoint
This describes the results that would be seen 
after a user searches
 -->



Parameters:
(stuff we send from the client)


• query
e.g. "cars"

• howFar
e.g. "2 miles" or "3 kilometers" or "2 mi" or "50km"

• latitude
e.g. 37.2352352

• longitude
e.g. -23.23236326



Expected Response:

[
  {
    message: 'Somebody has an ugly Hummer',
    
    //thumbnail version
    pic: http://i.auto-bild.de/ir_img/1/0/0/8/7/1/6/Hummer-H2-Black-Knight-729x486-d2cdc22497f727ec.jpg 

    pic: http://i.auto-bild.de/ir_img/1/0/0/8/7/1/6/Hummer-H2-Black-Knight-729x486-d2cdc22497f727ec.jpg
    video: http://popvid3234523452345.mp4
    datePosted: '2014-11-24T06:00:00.000Z',
    Location: 'Austin, TX'

  }
]