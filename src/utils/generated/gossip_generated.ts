// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {IdRegistryEvent as IdRegistryEvent, IdRegistryEventT as IdRegistryEventT} from './id_registry_event_generated.js';
import {Message as Message, MessageT as MessageT} from './message_generated.js';

export enum GossipVersion {
  V1 = 1
}

export enum GossipContent {
  NONE = 0,
  Message = 1,
  IdRegistryEvent = 2,
  ContactInfoContent = 3
}

export function unionToGossipContent(
  type: GossipContent,
  accessor: (obj:ContactInfoContent|IdRegistryEvent|Message) => ContactInfoContent|IdRegistryEvent|Message|null
): ContactInfoContent|IdRegistryEvent|Message|null {
  switch(GossipContent[type]) {
    case 'NONE': return null; 
    case 'Message': return accessor(new Message())! as Message;
    case 'IdRegistryEvent': return accessor(new IdRegistryEvent())! as IdRegistryEvent;
    case 'ContactInfoContent': return accessor(new ContactInfoContent())! as ContactInfoContent;
    default: return null;
  }
}

export function unionListToGossipContent(
  type: GossipContent, 
  accessor: (index: number, obj:ContactInfoContent|IdRegistryEvent|Message) => ContactInfoContent|IdRegistryEvent|Message|null, 
  index: number
): ContactInfoContent|IdRegistryEvent|Message|null {
  switch(GossipContent[type]) {
    case 'NONE': return null; 
    case 'Message': return accessor(index, new Message())! as Message;
    case 'IdRegistryEvent': return accessor(index, new IdRegistryEvent())! as IdRegistryEvent;
    case 'ContactInfoContent': return accessor(index, new ContactInfoContent())! as ContactInfoContent;
    default: return null;
  }
}

export class GossipAddressInfo implements flatbuffers.IUnpackableObject<GossipAddressInfoT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GossipAddressInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGossipAddressInfo(bb:flatbuffers.ByteBuffer, obj?:GossipAddressInfo):GossipAddressInfo {
  return (obj || new GossipAddressInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGossipAddressInfo(bb:flatbuffers.ByteBuffer, obj?:GossipAddressInfo):GossipAddressInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GossipAddressInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

address():string|null
address(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
address(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

family():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

port():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

static startGossipAddressInfo(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addAddress(builder:flatbuffers.Builder, addressOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, addressOffset, 0);
}

static addFamily(builder:flatbuffers.Builder, family:number) {
  builder.addFieldInt8(1, family, 0);
}

static addPort(builder:flatbuffers.Builder, port:number) {
  builder.addFieldInt16(2, port, 0);
}

static endGossipAddressInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // address
  return offset;
}

static createGossipAddressInfo(builder:flatbuffers.Builder, addressOffset:flatbuffers.Offset, family:number, port:number):flatbuffers.Offset {
  GossipAddressInfo.startGossipAddressInfo(builder);
  GossipAddressInfo.addAddress(builder, addressOffset);
  GossipAddressInfo.addFamily(builder, family);
  GossipAddressInfo.addPort(builder, port);
  return GossipAddressInfo.endGossipAddressInfo(builder);
}

unpack(): GossipAddressInfoT {
  return new GossipAddressInfoT(
    this.address(),
    this.family(),
    this.port()
  );
}


unpackTo(_o: GossipAddressInfoT): void {
  _o.address = this.address();
  _o.family = this.family();
  _o.port = this.port();
}
}

export class GossipAddressInfoT implements flatbuffers.IGeneratedObject {
constructor(
  public address: string|Uint8Array|null = null,
  public family: number = 0,
  public port: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const address = (this.address !== null ? builder.createString(this.address!) : 0);

  return GossipAddressInfo.createGossipAddressInfo(builder,
    address,
    this.family,
    this.port
  );
}
}

export class ContactInfoContent implements flatbuffers.IUnpackableObject<ContactInfoContentT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ContactInfoContent {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsContactInfoContent(bb:flatbuffers.ByteBuffer, obj?:ContactInfoContent):ContactInfoContent {
  return (obj || new ContactInfoContent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsContactInfoContent(bb:flatbuffers.ByteBuffer, obj?:ContactInfoContent):ContactInfoContent {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ContactInfoContent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

peerId(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

peerIdLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

peerIdArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

gossipAddress(obj?:GossipAddressInfo):GossipAddressInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new GossipAddressInfo()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

rpcAddress(obj?:GossipAddressInfo):GossipAddressInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new GossipAddressInfo()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

excludedHashes(index: number):string
excludedHashes(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
excludedHashes(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

excludedHashesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

count():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : BigInt('0');
}

static startContactInfoContent(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addPeerId(builder:flatbuffers.Builder, peerIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, peerIdOffset, 0);
}

static createPeerIdVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startPeerIdVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addGossipAddress(builder:flatbuffers.Builder, gossipAddressOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, gossipAddressOffset, 0);
}

static addRpcAddress(builder:flatbuffers.Builder, rpcAddressOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, rpcAddressOffset, 0);
}

static addExcludedHashes(builder:flatbuffers.Builder, excludedHashesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, excludedHashesOffset, 0);
}

static createExcludedHashesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startExcludedHashesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addCount(builder:flatbuffers.Builder, count:bigint) {
  builder.addFieldInt64(4, count, BigInt('0'));
}

static endContactInfoContent(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // peer_id
  return offset;
}


unpack(): ContactInfoContentT {
  return new ContactInfoContentT(
    this.bb!.createScalarList<number>(this.peerId.bind(this), this.peerIdLength()),
    (this.gossipAddress() !== null ? this.gossipAddress()!.unpack() : null),
    (this.rpcAddress() !== null ? this.rpcAddress()!.unpack() : null),
    this.bb!.createScalarList<string>(this.excludedHashes.bind(this), this.excludedHashesLength()),
    this.count()
  );
}


unpackTo(_o: ContactInfoContentT): void {
  _o.peerId = this.bb!.createScalarList<number>(this.peerId.bind(this), this.peerIdLength());
  _o.gossipAddress = (this.gossipAddress() !== null ? this.gossipAddress()!.unpack() : null);
  _o.rpcAddress = (this.rpcAddress() !== null ? this.rpcAddress()!.unpack() : null);
  _o.excludedHashes = this.bb!.createScalarList<string>(this.excludedHashes.bind(this), this.excludedHashesLength());
  _o.count = this.count();
}
}

export class ContactInfoContentT implements flatbuffers.IGeneratedObject {
constructor(
  public peerId: (number)[] = [],
  public gossipAddress: GossipAddressInfoT|null = null,
  public rpcAddress: GossipAddressInfoT|null = null,
  public excludedHashes: (string)[] = [],
  public count: bigint = BigInt('0')
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const peerId = ContactInfoContent.createPeerIdVector(builder, this.peerId);
  const gossipAddress = (this.gossipAddress !== null ? this.gossipAddress!.pack(builder) : 0);
  const rpcAddress = (this.rpcAddress !== null ? this.rpcAddress!.pack(builder) : 0);
  const excludedHashes = ContactInfoContent.createExcludedHashesVector(builder, builder.createObjectOffsetList(this.excludedHashes));

  ContactInfoContent.startContactInfoContent(builder);
  ContactInfoContent.addPeerId(builder, peerId);
  ContactInfoContent.addGossipAddress(builder, gossipAddress);
  ContactInfoContent.addRpcAddress(builder, rpcAddress);
  ContactInfoContent.addExcludedHashes(builder, excludedHashes);
  ContactInfoContent.addCount(builder, this.count);

  return ContactInfoContent.endContactInfoContent(builder);
}
}

export class GossipMessage implements flatbuffers.IUnpackableObject<GossipMessageT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GossipMessage {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGossipMessage(bb:flatbuffers.ByteBuffer, obj?:GossipMessage):GossipMessage {
  return (obj || new GossipMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGossipMessage(bb:flatbuffers.ByteBuffer, obj?:GossipMessage):GossipMessage {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GossipMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

contentType():GossipContent {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : GossipContent.NONE;
}

content<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

topics(index: number):string
topics(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
topics(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

topicsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

version():GossipVersion {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : GossipVersion.V1;
}

static startGossipMessage(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addContentType(builder:flatbuffers.Builder, contentType:GossipContent) {
  builder.addFieldInt8(0, contentType, GossipContent.NONE);
}

static addContent(builder:flatbuffers.Builder, contentOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, contentOffset, 0);
}

static addTopics(builder:flatbuffers.Builder, topicsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, topicsOffset, 0);
}

static createTopicsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startTopicsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addVersion(builder:flatbuffers.Builder, version:GossipVersion) {
  builder.addFieldInt16(3, version, GossipVersion.V1);
}

static endGossipMessage(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // content
  builder.requiredField(offset, 8) // topics
  return offset;
}

static finishGossipMessageBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedGossipMessageBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createGossipMessage(builder:flatbuffers.Builder, contentType:GossipContent, contentOffset:flatbuffers.Offset, topicsOffset:flatbuffers.Offset, version:GossipVersion):flatbuffers.Offset {
  GossipMessage.startGossipMessage(builder);
  GossipMessage.addContentType(builder, contentType);
  GossipMessage.addContent(builder, contentOffset);
  GossipMessage.addTopics(builder, topicsOffset);
  GossipMessage.addVersion(builder, version);
  return GossipMessage.endGossipMessage(builder);
}

unpack(): GossipMessageT {
  return new GossipMessageT(
    this.contentType(),
    (() => {
      const temp = unionToGossipContent(this.contentType(), this.content.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })(),
    this.bb!.createScalarList<string>(this.topics.bind(this), this.topicsLength()),
    this.version()
  );
}


unpackTo(_o: GossipMessageT): void {
  _o.contentType = this.contentType();
  _o.content = (() => {
      const temp = unionToGossipContent(this.contentType(), this.content.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
  _o.topics = this.bb!.createScalarList<string>(this.topics.bind(this), this.topicsLength());
  _o.version = this.version();
}
}

export class GossipMessageT implements flatbuffers.IGeneratedObject {
constructor(
  public contentType: GossipContent = GossipContent.NONE,
  public content: ContactInfoContentT|IdRegistryEventT|MessageT|null = null,
  public topics: (string)[] = [],
  public version: GossipVersion = GossipVersion.V1
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const content = builder.createObjectOffset(this.content);
  const topics = GossipMessage.createTopicsVector(builder, builder.createObjectOffsetList(this.topics));

  return GossipMessage.createGossipMessage(builder,
    this.contentType,
    content,
    topics,
    this.version
  );
}
}

