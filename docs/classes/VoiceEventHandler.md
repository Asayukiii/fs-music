[**Erisa Voice v1.0.0**](../README.md) • **Docs**

***

[Erisa Voice v1.0.0](../globals.md) / VoiceEventHandler

# Class: VoiceEventHandler\<Events, Names\>

Represents the voice event handler.

## Extends

- `BaseEventHandler`\<`Events`, `Names`\>

## Type Parameters

• **Events** *extends* [`ErisaVoiceEvents`](../type-aliases/ErisaVoiceEvents.md) = [`ErisaVoiceEvents`](../type-aliases/ErisaVoiceEvents.md)

• **Names** *extends* keyof `Events` = keyof `Events`

## Constructors

### new VoiceEventHandler()

> **new VoiceEventHandler**\<`Events`, `Names`\>(`data`): [`VoiceEventHandler`](VoiceEventHandler.md)\<`Events`, `Names`\>

#### Parameters

• **data**: `IEvent`\<`Events`, `Names`\>

#### Returns

[`VoiceEventHandler`](VoiceEventHandler.md)\<`Events`, `Names`\>

#### Inherited from

`BaseEventHandler<Events, Names>.constructor`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/base/BaseEventHandler.d.ts:13

## Properties

### data

> `readonly` **data**: `IEvent`\<`Events`, `Names`\>

#### Inherited from

`BaseEventHandler.data`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/base/BaseEventHandler.d.ts:12

## Accessors

### description

> `get` **description**(): `string`

#### Returns

`string`

#### Inherited from

`BaseEventHandler.description`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/base/BaseEventHandler.d.ts:15

***

### listener

> `get` **listener**(): (`this`, ...`args`) => `void` \| `Promise`\<`void`\>

#### Returns

`Function`

##### Parameters

• **this**: `ForgeClient`

• ...**args**: `AssertArgs`\<`Events`\[`T`\]\>

##### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

`BaseEventHandler.listener`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/base/BaseEventHandler.d.ts:14

***

### name

> `get` **name**(): `T`

#### Returns

`T`

#### Inherited from

`BaseEventHandler.name`

#### Defined in

node\_modules/@tryforge/forgescript/dist/structures/base/BaseEventHandler.d.ts:16

## Methods

### register()

> **register**(`client`): `void`

Register this event to the client.

#### Parameters

• **client**: `ForgeClient`

Client to attach the event to.

#### Returns

`void`

#### Overrides

`BaseEventHandler.register`

#### Defined in

src/classes/VoiceEventHandler.ts:20
