[**Erisa Voice v1.0.0**](../README.md) • **Docs**

***

[Erisa Voice v1.0.0](../globals.md) / Filter

# Class: Filter

## Constructors

### new Filter()

> **new Filter**(`config`): [`Filter`](Filter.md)

#### Parameters

• **config**: `FilterConfig`

#### Returns

[`Filter`](Filter.md)

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/filter.d.ts:6

## Methods

### add()

> **add**(`options`, `player`): `Promise`\<`void`\>

#### Parameters

• **options**: `object`[]

• **player**: `AudioPlayer`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/filter.d.ts:7

***

### createFFmpeg()

> **createFFmpeg**(...`args`): `FFmpeg`

#### Parameters

• ...**args**: `string`[]

#### Returns

`FFmpeg`

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/filter.d.ts:19

***

### createFFmpegWithInputFile()

> **createFFmpegWithInputFile**(`input`, ...`args`): `FFmpeg`

#### Parameters

• **input**: `string`

• ...**args**: `string`[]

#### Returns

`FFmpeg`

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/filter.d.ts:20

***

### remove()

> **remove**(`filter`, `player`): `Promise`\<`void`\>

#### Parameters

• **filter**: `string`

• **player**: `AudioPlayer`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/filter.d.ts:11

***

### removeAll()

> **removeAll**(`player`): `Promise`\<`void`\>

#### Parameters

• **player**: `AudioPlayer`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/filter.d.ts:17

***

### removeFirst()

> **removeFirst**(`filter`, `player`): `Promise`\<`void`\>

#### Parameters

• **filter**: `string`

• **player**: `AudioPlayer`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/filter.d.ts:16

***

### seek()

> **seek**(`time`, `player`): `Promise`\<`boolean`\>

#### Parameters

• **time**: `number`

• **player**: `AudioPlayer`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/filter.d.ts:18

***

### set()

> **set**(`options`, `player`): `Promise`\<`void`\>

#### Parameters

• **options**: `object`[]

• **player**: `AudioPlayer`

#### Returns

`Promise`\<`void`\>

#### Defined in

node\_modules/@aoijs/aoi.music/lib/newstruct/filter.d.ts:12
