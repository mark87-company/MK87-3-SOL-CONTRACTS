interface Options {
  keepAlive: boolean;
  path?: any;
}
interface HttpsAgent {
  defaultPort: number;
  protocol: string;
  options: Options;
  keepAliveMsecs: number;
  keepAlive: boolean;
  maxSockets?: any;
  maxFreeSockets: number;
  scheduling: string;
  maxTotalSockets?: any;
  totalSocketCount: number;
  maxCachedSessions: number;
}
interface CurrentProvider {
  host: string;
  timeout: number;
  connected: boolean;
  httpsAgent: HttpsAgent;
}
interface Options2 {
  keepAlive: boolean;
  path?: any;
}
interface TlsOptions2 {
  pipe: boolean;
  isServer: boolean;
  requestCert: boolean;
  rejectUnauthorized: boolean;
}
interface Events4 {
  close: any[];
}
interface Buffer2 {
  head?: any;
  tail?: any;
  length: number;
}
interface ReadableState2 {
  objectMode: boolean;
  highWaterMark: number;
  buffer: Buffer2;
  length: number;
  pipes: any[];
  flowing: boolean;
  ended: boolean;
  endEmitted: boolean;
  reading: boolean;
  sync: boolean;
  needReadable: boolean;
  emittedReadable: boolean;
  readableListening: boolean;
  resumeScheduled: boolean;
  errorEmitted: boolean;
  emitClose: boolean;
  autoDestroy: boolean;
  destroyed: boolean;
  errored?: any;
  closed: boolean;
  closeEmitted: boolean;
  defaultEncoding: string;
  awaitDrainWriters?: any;
  multiAwaitDrain: boolean;
  readingMore: boolean;
  decoder?: any;
  encoding?: any;
}
interface WritableState2 {
  objectMode: boolean;
  highWaterMark: number;
  finalCalled: boolean;
  needDrain: boolean;
  ending: boolean;
  ended: boolean;
  finished: boolean;
  destroyed: boolean;
  decodeStrings: boolean;
  defaultEncoding: string;
  length: number;
  writing: boolean;
  corked: number;
  sync: boolean;
  bufferProcessing: boolean;
  afterWriteTickInfo?: any;
  buffered: any[];
  bufferedIndex: number;
  allBuffers: boolean;
  allNoop: boolean;
  errorEmitted: boolean;
  emitClose: boolean;
  autoDestroy: boolean;
  errored?: any;
  closed: boolean;
  closeEmitted: boolean;
  writable: boolean;
}
interface ApiBaobabKlaytnNet86513 {
  _tlsOptions: TlsOptions2;
  _secureEstablished: boolean;
  _securePending: boolean;
  _newSessionPending: boolean;
  _controlReleased: boolean;
  secureConnecting: boolean;
  _SNICallback?: any;
  servername: string;
  alpnProtocol: boolean;
  authorized: boolean;
  authorizationError?: any;
  encrypted: boolean;
  _events: Events4;
  _eventsCount: number;
  connecting: boolean;
  _hadError: boolean;
  _parent?: any;
  _host: string;
  _readableState: ReadableState2;
  _writableState: WritableState2;
  allowHalfOpen: boolean;
  _sockname?: any;
  _pendingData?: any;
  _pendingEncoding: string;
  _requestCert: boolean;
  _rejectUnauthorized: boolean;
  parser?: any;
  _httpMessage?: any;
  timeout: number;
}
interface HttpsAgent2 {
  _eventsCount: number;
  defaultPort: number;
  protocol: string;
  options: Options2;
  keepAliveMsecs: number;
  keepAlive: boolean;
  maxSockets?: any;
  maxFreeSockets: number;
  scheduling: string;
  maxTotalSockets?: any;
  totalSocketCount: number;
  maxCachedSessions: number;
}
interface Provider {
  host: string;
  timeout: number;
  connected: boolean;
  httpsAgent: HttpsAgent2;
}
interface TlsOptions3 {
  pipe: boolean;
  isServer: boolean;
  requestCert: boolean;
  rejectUnauthorized: boolean;
}
interface Events6 {
  close: any[];
}
interface Buffer3 {
  head?: any;
  tail?: any;
  length: number;
}
interface ReadableState3 {
  objectMode: boolean;
  highWaterMark: number;
  buffer: Buffer3;
  length: number;
  pipes: any[];
  flowing: boolean;
  ended: boolean;
  endEmitted: boolean;
  reading: boolean;
  sync: boolean;
  needReadable: boolean;
  emittedReadable: boolean;
  readableListening: boolean;
  resumeScheduled: boolean;
  errorEmitted: boolean;
  emitClose: boolean;
  autoDestroy: boolean;
  destroyed: boolean;
  errored?: any;
  closed: boolean;
  closeEmitted: boolean;
  defaultEncoding: string;
  awaitDrainWriters?: any;
  multiAwaitDrain: boolean;
  readingMore: boolean;
  decoder?: any;
  encoding?: any;
}
interface WritableState3 {
  objectMode: boolean;
  highWaterMark: number;
  finalCalled: boolean;
  needDrain: boolean;
  ending: boolean;
  ended: boolean;
  finished: boolean;
  destroyed: boolean;
  decodeStrings: boolean;
  defaultEncoding: string;
  length: number;
  writing: boolean;
  corked: number;
  sync: boolean;
  bufferProcessing: boolean;
  writecb?: any;
  writelen: number;
  afterWriteTickInfo?: any;
  buffered: any[];
  bufferedIndex: number;
  allBuffers: boolean;
  allNoop: boolean;
  pendingcb: number;
  prefinished: boolean;
  errorEmitted: boolean;
  emitClose: boolean;
  autoDestroy: boolean;
  errored?: any;
  closed: boolean;
  closeEmitted: boolean;
  writable: boolean;
}
interface Parent3 {
  reading: boolean;
  onconnection?: any;
}
interface Context6 {}
interface SecureContext6 {
  context: Context6;
}
interface Ssl3 {
  _parent: Parent3;
  _secureContext: SecureContext6;
  reading: boolean;
}
interface ApiBaobabKlaytnNet86515 {
  _tlsOptions: TlsOptions3;
  _secureEstablished: boolean;
  _securePending: boolean;
  _newSessionPending: boolean;
  _controlReleased: boolean;
  secureConnecting: boolean;
  _SNICallback?: any;
  servername: string;
  alpnProtocol: boolean;
  authorized: boolean;
  authorizationError?: any;
  encrypted: boolean;
  _events: Events6;
  _eventsCount: number;
  connecting: boolean;
  _hadError: boolean;
  _parent?: any;
  _host: string;
  _readableState: ReadableState3;
  _writableState: WritableState3;
  allowHalfOpen: boolean;
  _sockname?: any;
  _pendingData?: any;
  _pendingEncoding: string;
  _server?: any;
  ssl: Ssl3;
  _requestCert: boolean;
  _rejectUnauthorized: boolean;
  parser?: any;
  _httpMessage?: any;
  timeout: number;
}
interface SessionCache3 {
  list: string[];
}
interface HttpsAgent3 {
  _eventsCount: number;
  defaultPort: number;
  protocol: string;
  keepAliveMsecs: number;
  keepAlive: boolean;
  maxSockets?: any;
  maxFreeSockets: number;
  scheduling: string;
  maxTotalSockets?: any;
  totalSocketCount: number;
  maxCachedSessions: number;
  _sessionCache: SessionCache3;
}
interface Provider2 {
  host: string;
  timeout: number;
  connected: boolean;
  httpsAgent: HttpsAgent3;
}
interface Providers {}
interface Subscriptions {}
interface RequestManager {
  provider: Provider2;
  providers: Providers;
  subscriptions: Subscriptions;
}
interface Providers2 {}
interface Input {
  internalType: string;
  name: string;
  type: string;
}
interface Output {
  internalType: string;
  name: string;
  type: string;
}
interface JsonInterface {
  inputs: Input[];
  payable: boolean;
  stateMutability: string;
  type: string;
  constant?: boolean;
  name: string;
  outputs: Output[];
  signature: string;
}
interface Options4 {
  address: string;
  jsonInterface: JsonInterface[];
}
interface Methods {}
interface Events7 {}
interface Input2 {
  internalType: string;
  name: string;
  type: string;
}
interface Output2 {
  internalType: string;
  name: string;
  type: string;
}
interface JsonInterface2 {
  inputs: Input2[];
  payable: boolean;
  stateMutability: string;
  type: string;
  constant?: boolean;
  name: string;
  outputs: Output2[];
  signature: string;
}
interface AddressKeyringMap {}
interface Wallet {
  _addressKeyringMap: AddressKeyringMap;
}

export interface Contract {
  currentProvider: CurrentProvider;
  _provider: Provider;
  _requestManager: RequestManager;
  providers: Providers2;
  options: Options4;
  defaultBlock: string;
  methods: Methods;
  events: Events7;
  _address: string;
  _jsonInterface: JsonInterface2[];
  _wallet: Wallet;
}
