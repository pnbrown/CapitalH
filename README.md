The H Should Be Capital
===================================

I modified a template for making fun Twitter bots with [Glitch](https://glitch.com/) and the [Twit](https://github.com/ttezel/twit) node.js library. For a bit more advanced version of this starter project see [twitterbot-advanced](https://glitch.com/edit/#!/twitterbot-advanced).

## Joe Nash is a champion

For those that don't know Joe Nash, he is an incredible human being that's in charge of the [GitHub Campus Experts](https://githubcampus.expert/) of which I am one. I happen to know one of his pet peeves is telling folk that the H in GitHub should be capitalized. I made a bot that will search Twitter for misspellings to point out the error in their ways.

In my project, the user is restricted to @not_nigel because that's me! I definitely don't want to annoy folks with yet another know-it-all bot. I have no problem with it calling out my tweets so I restricted it to just me.

I spent the better part of a day working on this, but if you're dope in Javascript, it should take you muuuuuuch shorter. As with creating all bots, please be kind. Their net effect should be positive.

## Issues

1. This is not documented well at all. I was kind of coding as I went and will now have to go back through and put some helpful comments and whatnot in the code.

2. I still need to sort out keeping track of only updating the variable for the last tweet that the bot sent out. Putting that as the limit for the last point in time at which the bot can search will relieve the duplicate tweets feature this bot possesses.

3. Also, this implementation doesn't have an elegant solution for deciding an error was made. An error gives you the value -1, but it appears that it concatenates each instance of the searched word. That should be fine if the error comes first chronologically in a tweet, but may break it if there are multiple instances of the word that are both correct and incorrect.

## A quick tutorial

You can find more tutorials and open source Twitter bots on [Botwiki](https://botwiki.org). Be sure to [join Botmakers](https://botmakers.org/) and [submit your bot to Botwiki](https://botwiki.org/submit-your-bot) :-)

## More starter projects

For more bot starter projects on Glitch, check out the official [Botwiki page on Glitch](https://glitch.com/botwiki).

## Support Botwiki/Botmakers

- [patreon.com/botwiki](https://patreon.com/botwiki)
- [botwiki.org/about/support-us](https://botwiki.org/about/support-us)

🙇

**Powered by [Glitch](https://glitch.com)**

\ ゜o゜)ノ
