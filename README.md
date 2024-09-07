<h1 align="center">Erisa Music</h1>
<p align="center">A powerful extension to play music on your ForgeScript Discord client.</p>

----

<h2 align="center">Table of Contents</h2>
<ul>
    <li>Installation</li>
    <li>Basic Setup</li>
    <li>Commands</li>
    <li>Events</li>
    <li>Credits</li>
</ul>

----

<h2 align="center">Installation</h2>

1. Run the following command to install the package:
```bash
npm i erisa-music
```
2. Now, declare the extension in your main file:
```js
var { Cacher, ErisaVoice, Filter, PluginName } = require("erisa-music");
var { ForgeClient } = require("@tryforge/forgescript");

var voice = new ErisaVoice({
    plugins: [
        [PluginName.Cacher, new Cacher("memory")],
        [PluginName.Filter, new Filter({
            filterFromStart: false
        })]
    ],
    manager: {
        requestOptions: {
            offsetTimeout: 0,
            soundcloudLikeTrackLimit: 200
        },
        searchOptions: {
            youtubeClient: "TV_EMBEDDED",
            youtubeAuth: true
        }
    }
});

var bot = new ForgeClient({
    ...your_setup,
    extensions: [
        voice
    ]
});
```
Congratulations! You have installed music extension in your Discord client.

----

<h2 align="center">Commands</h2>
<p align="center">To add a command, you must use the VoiceCommandManager.</p>

```js
var voice = new ErisaVoice({ ... });
var bot = new ForgeClient({ ... });

voice.commands.add({
    type: "trackStart",
    code: `
        <COMMAND CODE HERE>
    `
});
```

----

<h2 align="center">Events</h2>
<p align="center">You must declare the events you want to listen to in extension constructor options under "events" property.</p>

```js
var voice = new ErisaVoice({
    events: [
        "trackStart",
        "trackEnd",
        ...
    ]
});
```

----

<h2 align="center">Credits</h2>
<ol>
    <li>Asayukiii (Erisa): Extension author and maintainer.</li>
</ol>