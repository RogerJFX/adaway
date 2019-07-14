adaway
- 

### Just get rid of nasty ads within ya browser ###

**A chrome extension so far**

This is in a very early state. Just a poc.

Do NOT use it yet, if you have a small bandwidth. We currently click any detected anchor automatically. This will increase traffic tremendously.

I'm quite satisfied for a start by simply getting rid of iframes to keep away ads from my mind while browsing the web.

So if a site detects my ad blocker(s) and thus does not show any content, making iframes invisible instead at least spares my eyes those 

- stupid
- annoying
- impertinent
- shameless
 
ads. And as far as I know, invisible content isn't rendered at all by most browsers. So the processor should be relieved.

Sorry mates, if the ads weren't that '\[cannot write here what I would like to write\]', I would not have come up with this idea.

So f... those cormorants disturbing us permanently by incredible impudence.

Caveats:

- Ads may show up for some time until they are hidden (up to 1 second)
- The page's layout still may remain as with ads (see next steps)
- Traffic will not be reduced as by a real ad blocker

Next steps hopefully coming soon.

Next steps might be:

- not only making the iframes invisible, but the parent elements as well (if there is no other content inside)
- dummy clicking ads randomly in order to dazzle trackers

---

### Here is how to test it: ###

1. go to \[folder of your choice\]
1. git clone https://github.com/RogerJFX/adaway.git
1. open chrome
1. type "chrome://extensions" to the location bar and press ENTER
1. check the developers mode top right
1. Click the button 'LOAD UNPACKED', top left
1. go to \[folder of your choice\] and mark adaway
1. click OK
1. that's it, now you can test it, just go to a common site
