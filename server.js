/* Setting things up. */
var path = require('path'),
    express = require('express'),
    app = express(),   
    Twit = require('twit'),
    config = {
    /* Be sure to update the .env file with your API keys. See how to get them: https://botwiki.org/tutorials/how-to-create-a-twitter-app */      
      twitter: {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
      }
    },
    T = new Twit(config.twitter);
var last_tweet=1071948182282633216;

app.use(express.static('public'));

/* You can use cron-job.org, uptimerobot.com, or a similar site to hit your /BOT_ENDPOINT to wake up your app and make your Twitter bot tweet. */

app.all("/" + process.env.BOT_ENDPOINT, function (req, res) {
  /* The example below tweets out "Hello world!". */
  /*T.post('statuses/update', { status: 'hello world 👋' }, function(err, data, response) {
    if (err){
      console.log('error!', err);
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
    }
  });*/
  T.get('search/tweets', { q: 'github -@github from:@not_nigel -url:github -filter:retweets lang:en since:' + last_tweet, count: 5, result_type: 'recent', include_entities: 'false', tweet_mode: 'extended'}, function(err, data, response) {
    if (err){
      console.log('error!', err);
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
      var obj = data.statuses;
      console.log(obj);
      var entries = Object.keys(obj);
      for(entries in obj){
        var tweets = Object.keys(obj[entries]);
        var correct = obj[entries]['full_text'].search('GitHub');
        if(correct < 0){
          console.log("GitHub is spelled incorrectly.");
          console.log(obj[entries]['full_text']);
          T.post('statuses/update', { status: "@" + obj[entries]['user']['screen_name'] + " Oy, bruv. In case you weren't aware, the proper way to style that is GitHub. MILLWALL", in_reply_to_status_id:obj[entries]['id_str'], auto_populate_reply_metadata: 'true'}, function(err, data, response) {
            console.log(data)
            last_tweet=data[0].id_str;
          })
        }
        else
        {
          console.log("GitHub is spelled correctly!");
          console.log(obj[entries]['full_text']);
          T.post('statuses/update', { status: "@" + obj[entries]['user']['screen_name'] + " Thank you for spelling GitHub correctly.", in_reply_to_status_id:obj[entries]['id_str'], auto_populate_reply_metadata: 'true'}, function(err, data, response) {
            console.log(data[0].id_str);
            last_tweet=data[0].id_str;

          })
        }
      };
      //console.log(tweets);
    }
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your bot is running on port ' + listener.address().port);
});
