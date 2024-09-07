[**Erisa Voice v1.0.0**](../README.md) • **Docs**

***

[Erisa Voice v1.0.0](../globals.md) / Cacher

# Class: Cacher\<T\>

## Type Parameters

• **T** *extends* `"memory"` \| `"disk"`

## Constructors

### new Cacher()

> **new Cacher**\<`T`\>(`__namedParameters`): [`Cacher`](Cacher.md)\<`T`\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.type**: `T`

#### Returns

[`Cacher`](Cacher.md)\<`T`\>

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/cacher.d.ts:6

## Accessors

### map

> `get` **map**(): `Map`\<`string`, `T` *extends* `"memory"` ? `PathLike` : `PathLike`\>

#### Returns

`Map`\<`string`, `T` *extends* `"memory"` ? `PathLike` : `PathLike`\>

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/cacher.d.ts:14

***

### path

> `get` **path**(): `string`

#### Returns

`string`

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/cacher.d.ts:16

***

### type

> `get` **type**(): `T`

#### Returns

`T`

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/cacher.d.ts:15

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/cacher.d.ts:12

***

### delete()

> **delete**(`id`): `void`

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/cacher.d.ts:11

***

### get()

> **get**(`id`): `Readable`

#### Parameters

• **id**: `string`

#### Returns

`Readable`

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/cacher.d.ts:10

***

### has()

> **has**(`id`): `boolean`

#### Parameters

• **id**: `string`

#### Returns

`boolean`

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/cacher.d.ts:13

***

### write()

> **write**(`metaData`, `stream`): `Promise`\<`void`\>

#### Parameters

• **metaData**: `Track`\<`"SoundCloud"` \| `"LocalFile"` \| `"Spotify"` \| `"Url"` \| `"Youtube"`\>

• **stream**: `Readable`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/cacher.d.ts:9
