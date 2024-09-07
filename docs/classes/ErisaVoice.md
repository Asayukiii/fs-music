[**Erisa Voice v1.0.0**](../README.md) • **Docs**

***

[Erisa Voice v1.0.0](../globals.md) / ErisaVoice

# Class: ErisaVoice

Extension that adds music capabilities to your Discord client.

## Example

```ts
const voice = new ErisaVoice();

new ForgeClient({
    extensions: [
        voice
    ]
});
```

## Extends

- `ForgeExtension`

## Constructors

### new ErisaVoice()

> **new ErisaVoice**(`options`): [`ErisaVoice`](ErisaVoice.md)

Starts the music manager.

#### Parameters

• **options**: [`ErisaVoiceOptions`](../interfaces/ErisaVoiceOptions.md)

#### Returns

[`ErisaVoice`](ErisaVoice.md)

#### Overrides

`ForgeExtension.constructor`

#### Defined in

src/classes/ErisaVoice.ts:50

## Properties

### commands

> **commands**: [`VoiceCommandManager`](VoiceCommandManager.md)

#### Defined in

src/classes/ErisaVoice.ts:45

***

### description

> **description**: `string` = `'Voice extension for ForgeScript.'`

#### Overrides

`ForgeExtension.description`

#### Defined in

src/classes/ErisaVoice.ts:40

***

### name

> **name**: `string` = `'Erisa Voice'`

#### Overrides

`ForgeExtension.name`

#### Defined in

src/classes/ErisaVoice.ts:39

***

### options

> `readonly` **options**: [`ErisaVoiceOptions`](../interfaces/ErisaVoiceOptions.md)

#### Defined in

src/classes/ErisaVoice.ts:50

***

### requireExtensions?

> `optional` **requireExtensions**: `string`[]

A list of extension names this extension requires

#### Inherited from

`ForgeExtension.requireExtensions`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/forge/ForgeExtension.d.ts:15

***

### targetVersions?

> `optional` **targetVersions**: `string`[]

Only the versions written here will be allowed

#### Inherited from

`ForgeExtension.targetVersions`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/forge/ForgeExtension.d.ts:11

***

### version

> **version**: `string` = `'1.0.0'`

#### Overrides

`ForgeExtension.version`

#### Defined in

src/classes/ErisaVoice.ts:41

## Accessors

### logErrors

> `get` **logErrors**(): `boolean`

Whether system should log errors.

#### Returns

`boolean`

#### Defined in

src/classes/ErisaVoice.ts:124

***

### manager

> `get` **manager**(): `Manager`

Returns the voice manager.

#### Returns

`Manager`

#### Defined in

src/classes/ErisaVoice.ts:113

***

### prunes

> `get` **prunes**(): `Map`\<`string`, `object`\>

#### Returns

`Map`\<`string`, `object`\>

#### Defined in

src/classes/ErisaVoice.ts:117

## Methods

### getCommandManager()

> **getCommandManager**(): `any`

#### Returns

`any`

#### Inherited from

`ForgeExtension.getCommandManager`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/forge/ForgeExtension.d.ts:19

***

### init()

> **init**(`client`): `void`

Starts the extension.

#### Parameters

• **client**: `ForgeClient`

Forge client to attach this extension to.

#### Returns

`void`

#### Overrides

`ForgeExtension.init`

#### Defined in

src/classes/ErisaVoice.ts:58

***

### joinVc()

> **joinVc**(`__namedParameters`): `Promise`\<`boolean`\>

Joins a voice channel.

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.adapter?**: `any`

• **\_\_namedParameters.selfDeaf?**: `boolean`

• **\_\_namedParameters.selfMute?**: `boolean`

• **\_\_namedParameters.textChannel**: `GuildTextBasedChannel`

• **\_\_namedParameters.type**: `"default"` \| `"fonly"` \| `"bidirect"`

• **\_\_namedParameters.voiceChannel**: `VoiceBasedChannel`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

src/classes/ErisaVoice.ts:94

***

### load()

> `protected` **load**(`path`): `void`

#### Parameters

• **path**: `string`

#### Returns

`void`

#### Inherited from

`ForgeExtension.load`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/forge/ForgeExtension.d.ts:18

***

### validateAndInit()

> `protected` **validateAndInit**(`client`): `void`

#### Parameters

• **client**: `ForgeClient`

#### Returns

`void`

#### Inherited from

`ForgeExtension.validateAndInit`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/forge/ForgeExtension.d.ts:17
