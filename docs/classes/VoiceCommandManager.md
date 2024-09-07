[**Erisa Voice v1.0.0**](../README.md) • **Docs**

***

[Erisa Voice v1.0.0](../globals.md) / VoiceCommandManager

# Class: VoiceCommandManager

## Extends

- `BaseCommandManager`\<\`$\{PlayerEvents\}\`\>

## Constructors

### new VoiceCommandManager()

> **new VoiceCommandManager**(`client`): [`VoiceCommandManager`](VoiceCommandManager.md)

#### Parameters

• **client**: `ForgeClient`

#### Returns

[`VoiceCommandManager`](VoiceCommandManager.md)

#### Inherited from

BaseCommandManager\<\`$\{PlayerEvents\}\`\>.constructor

#### Defined in

node\_modules/@tryforge/forgescript/dist/managers/BaseCommandManager.d.ts:12

## Properties

### handlerName

> **handlerName**: `string` = `HANDLER_NAME`

#### Overrides

`BaseCommandManager.handlerName`

#### Defined in

src/classes/VoiceCommandManager.ts:6

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

`BaseCommandManager.defaultMaxListeners`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:10

## Accessors

### count

> `get` **count**(): `number`

#### Returns

`number`

#### Inherited from

`BaseCommandManager.count`

#### Defined in

node\_modules/@tryforge/forgescript/dist/managers/BaseCommandManager.d.ts:15

## Methods

### add()

> **add**(...`commands`): `void`

#### Parameters

• ...**commands**: (`BaseCommand`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\> \| `IBaseCommand`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>)[]

#### Returns

`void`

#### Inherited from

`BaseCommandManager.add`

#### Defined in

node\_modules/@tryforge/forgescript/dist/managers/BaseCommandManager.d.ts:17

***

### addListener()

> **addListener**\<`U`\>(`event`, `listener`): `this`

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **event**: `U`

• **listener**: `ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\]

#### Returns

`this`

#### Inherited from

`BaseCommandManager.addListener`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:11

***

### emit()

> **emit**\<`U`\>(`event`, ...`args`): `boolean`

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **event**: `U`

• ...**args**: `Parameters`\<`ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\]\>

#### Returns

`boolean`

#### Inherited from

`BaseCommandManager.emit`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:19

***

### eventNames()

> **eventNames**\<`U`\>(): `U`[]

#### Type Parameters

• **U** *extends* `"update"`

#### Returns

`U`[]

#### Inherited from

`BaseCommandManager.eventNames`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:20

***

### get()

> **get**(`type`, `fn`?): `BaseCommand`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>[]

#### Parameters

• **type**: `"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`

• **fn?**

#### Returns

`BaseCommand`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>[]

#### Inherited from

`BaseCommandManager.get`

#### Defined in

node\_modules/@tryforge/forgescript/dist/managers/BaseCommandManager.d.ts:16

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

`BaseCommandManager.getMaxListeners`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:24

***

### listenerCount()

> **listenerCount**(`type`): `number`

#### Parameters

• **type**: `"update"`

#### Returns

`number`

#### Inherited from

`BaseCommandManager.listenerCount`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:21

***

### listeners()

> **listeners**\<`U`\>(`type`): `ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\][]

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **type**: `U`

#### Returns

`ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\][]

#### Inherited from

`BaseCommandManager.listeners`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:22

***

### load()

> **load**(`path`): `void`

#### Parameters

• **path**: `string`

#### Returns

`void`

#### Inherited from

`BaseCommandManager.load`

#### Defined in

node\_modules/@tryforge/forgescript/dist/managers/BaseCommandManager.d.ts:14

***

### off()

> **off**\<`U`\>(`event`, `listener`): `this`

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **event**: `U`

• **listener**: `ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\]

#### Returns

`this`

#### Inherited from

`BaseCommandManager.off`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:18

***

### on()

> **on**\<`U`\>(`event`, `listener`): `this`

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **event**: `U`

• **listener**: `ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\]

#### Returns

`this`

#### Inherited from

`BaseCommandManager.on`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:17

***

### once()

> **once**\<`U`\>(`event`, `listener`): `this`

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **event**: `U`

• **listener**: `ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\]

#### Returns

`this`

#### Inherited from

`BaseCommandManager.once`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:16

***

### prependListener()

> **prependListener**\<`U`\>(`event`, `listener`): `this`

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **event**: `U`

• **listener**: `ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\]

#### Returns

`this`

#### Inherited from

`BaseCommandManager.prependListener`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:12

***

### prependOnceListener()

> **prependOnceListener**\<`U`\>(`event`, `listener`): `this`

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **event**: `U`

• **listener**: `ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\]

#### Returns

`this`

#### Inherited from

`BaseCommandManager.prependOnceListener`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:13

***

### rawListeners()

> **rawListeners**\<`U`\>(`type`): `ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\][]

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **type**: `U`

#### Returns

`ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\][]

#### Inherited from

`BaseCommandManager.rawListeners`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:23

***

### refresh()

> **refresh**(): `void`

#### Returns

`void`

#### Inherited from

`BaseCommandManager.refresh`

#### Defined in

node\_modules/@tryforge/forgescript/dist/managers/BaseCommandManager.d.ts:13

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

#### Parameters

• **event?**: `"update"`

#### Returns

`this`

#### Inherited from

`BaseCommandManager.removeAllListeners`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:15

***

### removeListener()

> **removeListener**\<`U`\>(`event`, `listener`): `this`

#### Type Parameters

• **U** *extends* `"update"`

#### Parameters

• **event**: `U`

• **listener**: `ICommandManagerEvents`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>\[`U`\]

#### Returns

`this`

#### Inherited from

`BaseCommandManager.removeListener`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:14

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Inherited from

`BaseCommandManager.setMaxListeners`

#### Defined in

node\_modules/tiny-typed-emitter/lib/index.d.ts:25

***

### toArray()

> **toArray**(): `BaseCommand`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>[]

#### Returns

`BaseCommand`\<`"audioError"` \| `"queueStart"` \| `"queueEnd"` \| `"trackStart"` \| `"trackEnd"` \| `"trackAdd"` \| `"trackPause"` \| `"trackResume"`\>[]

#### Inherited from

`BaseCommandManager.toArray`

#### Defined in

node\_modules/@tryforge/forgescript/dist/managers/BaseCommandManager.d.ts:19
