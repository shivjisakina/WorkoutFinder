# WorkoutFinder

Because staring at gym equipment doesnt burn calories (wouldnt that be nice though?).

## [5 Reasons to Switch Up Your Workout](http://www.onemedical.com/blog/live-well/7-reasons-to-switch-up-your-workout/) 

1. Break Through a Weight-Loss Plateau
2. Prevent Overuse Injuries
3. Build New Muscles
4. Beat Workout Boredom
5. Help Keep Your Brain Healthy


## Technologies Used:

* HTML
* CSS
* Javascript
* Node JS
* NPM Packages (Body-Parser, Express, Path)

## Link: https://fathomless-beyond-24344.herokuapp.com/


### Pseudo code that I used throughout the development process:
| | Psuedo Code
------------ | -------------
| |
--CODE-- | | 
server.js | NPM install:
| | express
| | body-parser
| | path
| |
| | require all of them
| | add the port
| |
htmlRoutes.js | GET route /survey
| | USE route home.html
| |
apiRoutes.js | GET /api/workouts to display JSON objects of workouts
| | 
| | Create JSON objects with the following information:
| | - "name" of workout
| | - "photo" with a link to the picture
| | - "scores" with an array of numbers to determine the matches
| | 
| | POST routes /api/workouts to handle user input and logic
| | 
--LINKING FILES-- | | 
| | 
server.js | |
| | require('./app/routing/htmlRoutes.js')(app)
| | require('./app/routing/apiRoutes.js')(app) 
| |
htmlRoutes.js | |
| | res.sendFile(path.join(_dirname, '/../public/home.html'));
| | res.sendFile(path.join(_dirname, '/../public/survey.html'));
| | 
apiRoutes.js | require('../data/workouts.js');
| | 
home.html | style.css
| | 
survey.html | style.css
| | 
--ASSETS-- | |
| | 
images | [abs pro](https://pbs.twimg.com/media/C4ASJdSWIAILhom.jpg)
| | [boxing](https://s-media-cache-ak0.pinimg.com/736x/a0/ed/af/a0edaf61a41c5ca13234e7338d8b23e7.jpg)
| | [strength training doubling as cardio](http://www.womenshealthmag.com/sites/womenshealthmag.com/files/2015/06/30/strength-training-workout-that-doubles-as-cardio11_0.jpg)
| | [pac man](https://s-media-cache-ak0.pinimg.com/originals/78/59/a1/7859a1df0b681cb233288f15ff655063.jpg)
| | [soul cycle](http://159.203.208.244/wp-content/uploads/2015/04/Soul-3.jpg)
| | [full body workout](https://s-media-cache-ak0.pinimg.com/736x/81/ee/75/81ee7551ea7ffd54ef1b79b4b4118551--no-excuses-workout-everyday-workout.jpg)
| | [sofa abs](https://s-media-cache-ak0.pinimg.com/736x/53/46/ab/5346abdac7d58577675dfbca6054fd3b.jpg)
| | [box jumps](http://woduniversity.com/wp-content/uploads/2016/07/im12-700x300.jpg)
| | [zumba](http://global-cdn.skinnyms.com/wp-content/uploads/2015/01/Ditch-the-Workout-Lets-Zumba1.png)
| | [burpees](https://s-media-cache-ak0.pinimg.com/736x/d9/4e/c4/d94ec4ee449811b1688daff33557520d.jpg)
| | [insanity](https://www.lifestyleupdated.com/wp-content/uploads/2012/10/shaun-t-insanity-group.jpg)
