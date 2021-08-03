[simple-ioc](../README.md) / Container

# Class: Container

## Implements

- `IContainer`

## Table of contents

### Constructors

- [constructor](Container.md#constructor)

### Properties

- [\_registry](Container.md#_registry)

### Methods

- [get](Container.md#get)
- [register](Container.md#register)

## Constructors

### constructor

• **new Container**()

## Properties

### \_registry

• `Private` **\_registry**: `Map`<`symbol`, `any`\>

#### Defined in

[container.ts:25](https://github.com/rwlodkowski/simple-ioc-lib/blob/4700c28/src/container.ts#L25)

## Methods

### get

▸ **get**<`T`\>(`token`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `symbol` |

#### Returns

`undefined` \| `T`

#### Implementation of

IContainer.get

#### Defined in

[container.ts:31](https://github.com/rwlodkowski/simple-ioc-lib/blob/4700c28/src/container.ts#L31)

___

### register

▸ **register**<`T`\>(`token`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `symbol` |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

IContainer.register

#### Defined in

[container.ts:27](https://github.com/rwlodkowski/simple-ioc-lib/blob/4700c28/src/container.ts#L27)
