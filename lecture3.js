/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?
 function func() {
 console.log(this);
 }
 
Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}Infinity: InfinityAnalyserNode: AnalyserNode()arguments: nullcaller: nulllength: 0name: "AnalyserNode"prototype: AnalyserNode__proto__: AudioNode()AnimationEvent: AnimationEvent()AppBannerPromptResult: AppBannerPromptResult()ApplicationCache: ApplicationCache()ApplicationCacheErrorEvent: ApplicationCacheErrorEvent()Array: Array()ArrayBuffer: ArrayBuffer()Attr: Attr()Audio: HTMLAudioElement()AudioBuffer: AudioBuffer()AudioBufferSourceNode: AudioBufferSourceNode()AudioContext: AudioContext()AudioDestinationNode: AudioDestinationNode()AudioListener: AudioListener()AudioNode: AudioNode()AudioParam: AudioParam()AudioProcessingEvent: AudioProcessingEvent()BarProp: BarProp()BatteryManager: BatteryManager()BeforeInstallPromptEvent: BeforeInstallPromptEvent()BeforeUnloadEvent: BeforeUnloadEvent()BiquadFilterNode: BiquadFilterNode()Blob: Blob()BlobEvent: BlobEvent()Boolean: Boolean()BroadcastChannel: BroadcastChannel()ByteLengthQueuingStrategy: ByteLengthQueuingStrategy()CDATASection: CDATASection()CSS: CSS()CSSFontFaceRule: CSSFontFaceRule()CSSGroupingRule: CSSGroupingRule()CSSImportRule: CSSImportRule()CSSKeyframeRule: CSSKeyframeRule()CSSKeyframesRule: CSSKeyframesRule()CSSMediaRule: CSSMediaRule()CSSNamespaceRule: CSSNamespaceRule()CSSPageRule: CSSPageRule()CSSRule: CSSRule()CSSRuleList: CSSRuleList()CSSStyleDeclaration: CSSStyleDeclaration()CSSStyleRule: CSSStyleRule()CSSStyleSheet: CSSStyleSheet()CSSSupportsRule: CSSSupportsRule()CSSViewportRule: CSSViewportRule()Cache: Cache()CacheStorage: CacheStorage()CanvasCaptureMediaStreamTrack: CanvasCaptureMediaStreamTrack()CanvasGradient: CanvasGradient()CanvasPattern: CanvasPattern()CanvasRenderingContext2D: CanvasRenderingContext2D()ChannelMergerNode: ChannelMergerNode()ChannelSplitterNode: ChannelSplitterNode()CharacterData: CharacterData()ClientRect: ClientRect()ClientRectList: ClientRectList()ClipboardEvent: ClipboardEvent()CloseEvent: CloseEvent()Comment: Comment()CompositionEvent: CompositionEvent()ConvolverNode: ConvolverNode()CountQueuingStrategy: CountQueuingStrategy()Credential: Credential()CredentialsContainer: CredentialsContainer()Crypto: Crypto()CryptoKey: CryptoKey()CustomElementRegistry: CustomElementRegistry()CustomEvent: CustomEvent()DOMError: DOMError()DOMException: DOMException()DOMImplementation: DOMImplementation()DOMParser: DOMParser()DOMStringList: DOMStringList()DOMStringMap: DOMStringMap()DOMTokenList: DOMTokenList()DataTransfer: DataTransfer()DataTransferItem: DataTransferItem()DataTransferItemList: DataTransferItemList()DataView: DataView()Date: Date()DelayNode: DelayNode()DeviceMotionEvent: DeviceMotionEvent()DeviceOrientationEvent: DeviceOrientationEvent()Document: Document()DocumentFragment: DocumentFragment()DocumentType: DocumentType()DragEvent: DragEvent()DynamicsCompressorNode: DynamicsCompressorNode()Element: Element()Error: Error()ErrorEvent: ErrorEvent()EvalError: EvalError()Event: Event()EventSource: EventSource()EventTarget: EventTarget()FederatedCredential: FederatedCredential()File: File()FileList: FileList()FileReader: FileReader()Float32Array: Float32Array()Float64Array: Float64Array()FocusEvent: FocusEvent()FontFace: FontFace()FormData: FormData()Function: Function()GainNode: GainNode()Gamepad: Gamepad()GamepadButton: GamepadButton()GamepadEvent: GamepadEvent()HTMLAllCollection: HTMLAllCollection()HTMLAnchorElement: HTMLAnchorElement()HTMLAreaElement: HTMLAreaElement()HTMLAudioElement: HTMLAudioElement()HTMLBRElement: HTMLBRElement()HTMLBaseElement: HTMLBaseElement()HTMLBodyElement: HTMLBodyElement()HTMLButtonElement: HTMLButtonElement()HTMLCanvasElement: HTMLCanvasElement()HTMLCollection: HTMLCollection()HTMLContentElement: HTMLContentElement()HTMLDListElement: HTMLDListElement()HTMLDataListElement: HTMLDataListElement()HTMLDetailsElement: HTMLDetailsElement()HTMLDialogElement: HTMLDialogElement()HTMLDirectoryElement: HTMLDirectoryElement()HTMLDivElement: HTMLDivElement()HTMLDocument: HTMLDocument()HTMLElement: HTMLElement()HTMLEmbedElement: HTMLEmbedElement()HTMLFieldSetElement: HTMLFieldSetElement()HTMLFontElement: HTMLFontElement()HTMLFormControlsCollection: HTMLFormControlsCollection()HTMLFormElement: HTMLFormElement()HTMLFrameElement: HTMLFrameElement()HTMLFrameSetElement: HTMLFrameSetElement()HTMLHRElement: HTMLHRElement()HTMLHeadElement: HTMLHeadElement()HTMLHeadingElement: HTMLHeadingElement()HTMLHtmlElement: HTMLHtmlElement()HTMLIFrameElement: HTMLIFrameElement()HTMLImageElement: HTMLImageElement()HTMLInputElement: HTMLInputElement()HTMLKeygenElement: HTMLKeygenElement()HTMLLIElement: HTMLLIElement()HTMLLabelElement: HTMLLabelElement()HTMLLegendElement: HTMLLegendElement()HTMLLinkElement: HTMLLinkElement()HTMLMapElement: HTMLMapElement()HTMLMarqueeElement: HTMLMarqueeElement()HTMLMediaElement: HTMLMediaElement()HTMLMenuElement: HTMLMenuElement()HTMLMetaElement: HTMLMetaElement()HTMLMeterElement: HTMLMeterElement()HTMLModElement: HTMLModElement()HTMLOListElement: HTMLOListElement()HTMLObjectElement: HTMLObjectElement()HTMLOptGroupElement: HTMLOptGroupElement()HTMLOptionElement: HTMLOptionElement()HTMLOptionsCollection: HTMLOptionsCollection()HTMLOutputElement: HTMLOutputElement()HTMLParagraphElement: HTMLParagraphElement()HTMLParamElement: HTMLParamElement()HTMLPictureElement: HTMLPictureElement()HTMLPreElement: HTMLPreElement()HTMLProgressElement: HTMLProgressElement()HTMLQuoteElement: HTMLQuoteElement()HTMLScriptElement: HTMLScriptElement()HTMLSelectElement: HTMLSelectElement()HTMLShadowElement: HTMLShadowElement()HTMLSlotElement: HTMLSlotElement()HTMLSourceElement: HTMLSourceElement()HTMLSpanElement: HTMLSpanElement()HTMLStyleElement: HTMLStyleElement()HTMLTableCaptionElement: HTMLTableCaptionElement()HTMLTableCellElement: HTMLTableCellElement()HTMLTableColElement: HTMLTableColElement()HTMLTableElement: HTMLTableElement()HTMLTableRowElement: HTMLTableRowElement()HTMLTableSectionElement: HTMLTableSectionElement()HTMLTemplateElement: HTMLTemplateElement()HTMLTextAreaElement: HTMLTextAreaElement()HTMLTitleElement: HTMLTitleElement()HTMLTrackElement: HTMLTrackElement()HTMLUListElement: HTMLUListElement()HTMLUnknownElement: HTMLUnknownElement()HTMLVideoElement: HTMLVideoElement()HashChangeEvent: HashChangeEvent()Headers: Headers()History: History()IDBCursor: IDBCursor()IDBCursorWithValue: IDBCursorWithValue()IDBDatabase: IDBDatabase()IDBFactory: IDBFactory()IDBIndex: IDBIndex()IDBKeyRange: IDBKeyRange()IDBObjectStore: IDBObjectStore()IDBOpenDBRequest: IDBOpenDBRequest()IDBRequest: IDBRequest()IDBTransaction: IDBTransaction()IDBVersionChangeEvent: IDBVersionChangeEvent()IIRFilterNode: IIRFilterNode()IdleDeadline: IdleDeadline()Image: HTMLImageElement()ImageBitmap: ImageBitmap()ImageData: ImageData()InputDeviceCapabilities: InputDeviceCapabilities()Int8Array: Int8Array()Int16Array: Int16Array()Int32Array: Int32Array()IntersectionObserver: IntersectionObserver()IntersectionObserverEntry: IntersectionObserverEntry()Intl: ObjectJSON: JSONKeyboardEvent: KeyboardEvent()LocalNTP: LocalNTP()Location: Location()MIDIAccess: MIDIAccess()MIDIConnectionEvent: MIDIConnectionEvent()MIDIInput: MIDIInput()MIDIInputMap: MIDIInputMap()MIDIMessageEvent: MIDIMessageEvent()MIDIOutput: MIDIOutput()MIDIOutputMap: MIDIOutputMap()MIDIPort: MIDIPort()Map: Map()Math: MathMediaDevices: MediaDevices()MediaElementAudioSourceNode: MediaElementAudioSourceNode()MediaEncryptedEvent: MediaEncryptedEvent()MediaError: MediaError()MediaKeyMessageEvent: MediaKeyMessageEvent()MediaKeySession: MediaKeySession()MediaKeyStatusMap: MediaKeyStatusMap()MediaKeySystemAccess: MediaKeySystemAccess()MediaKeys: MediaKeys()MediaList: MediaList()MediaQueryList: MediaQueryList()MediaQueryListEvent: MediaQueryListEvent()MediaRecorder: MediaRecorder()MediaSource: MediaSource()MediaStreamAudioDestinationNode: MediaStreamAudioDestinationNode()MediaStreamAudioSourceNode: MediaStreamAudioSourceNode()MediaStreamEvent: MediaStreamEvent()MediaStreamTrack: MediaStreamTrack()MessageChannel: MessageChannel()MessageEvent: MessageEvent()MessagePort: MessagePort()MimeType: MimeType()MimeTypeArray: MimeTypeArray()MouseEvent: MouseEvent()MutationEvent: MutationEvent()MutationObserver: MutationObserver()MutationRecord: MutationRecord()NaN: NaNNamedNodeMap: NamedNodeMap()Navigator: Navigator()Node: Node()NodeFilter: NodeFilter()NodeIterator: NodeIterator()NodeList: NodeList()Notification: Notification()Number: Number()Object: Object()OfflineAudioCompletionEvent: OfflineAudioCompletionEvent()OfflineAudioContext: OfflineAudioContext()Option: HTMLOptionElement()OscillatorNode: OscillatorNode()PageTransitionEvent: PageTransitionEvent()PasswordCredential: PasswordCredential()Path2D: Path2D()Performance: Performance()PerformanceEntry: PerformanceEntry()PerformanceMark: PerformanceMark()PerformanceMeasure: PerformanceMeasure()PerformanceNavigation: PerformanceNavigation()PerformanceObserver: PerformanceObserver()PerformanceObserverEntryList: PerformanceObserverEntryList()PerformanceResourceTiming: PerformanceResourceTiming()PerformanceTiming: PerformanceTiming()PeriodicWave: PeriodicWave()PermissionStatus: PermissionStatus()Permissions: Permissions()Plugin: Plugin()PluginArray: PluginArray()PopStateEvent: PopStateEvent()Presentation: Presentation()PresentationAvailability: PresentationAvailability()PresentationConnection: PresentationConnection()PresentationConnectionAvailableEvent: PresentationConnectionAvailableEvent()PresentationConnectionCloseEvent: PresentationConnectionCloseEvent()PresentationRequest: PresentationRequest()ProcessingInstruction: ProcessingInstruction()ProgressEvent: ProgressEvent()Promise: Promise()PromiseRejectionEvent: PromiseRejectionEvent()Proxy: Proxy()PushManager: PushManager()PushSubscription: PushSubscription()PushSubscriptionOptions: PushSubscriptionOptions()RTCCertificate: RTCCertificate()RTCIceCandidate: RTCIceCandidate()RTCSessionDescription: RTCSessionDescription()RadioNodeList: RadioNodeList()Range: Range()RangeError: RangeError()ReadableStream: ReadableStream()ReferenceError: ReferenceError()Reflect: ObjectRegExp: RegExp()Request: Request()Response: Response()SVGAElement: SVGAElement()SVGAngle: SVGAngle()SVGAnimateElement: SVGAnimateElement()SVGAnimateMotionElement: SVGAnimateMotionElement()SVGAnimateTransformElement: SVGAnimateTransformElement()SVGAnimatedAngle: SVGAnimatedAngle()SVGAnimatedBoolean: SVGAnimatedBoolean()SVGAnimatedEnumeration: SVGAnimatedEnumeration()SVGAnimatedInteger: SVGAnimatedInteger()SVGAnimatedLength: SVGAnimatedLength()SVGAnimatedLengthList: SVGAnimatedLengthList()SVGAnimatedNumber: SVGAnimatedNumber()SVGAnimatedNumberList: SVGAnimatedNumberList()SVGAnimatedPreserveAspectRatio: SVGAnimatedPreserveAspectRatio()SVGAnimatedRect: SVGAnimatedRect()SVGAnimatedString: SVGAnimatedString()SVGAnimatedTransformList: SVGAnimatedTransformList()SVGAnimationElement: SVGAnimationElement()SVGCircleElement: SVGCircleElement()SVGClipPathElement: SVGClipPathElement()SVGComponentTransferFunctionElement: SVGComponentTransferFunctionElement()SVGCursorElement: SVGCursorElement()SVGDefsElement: SVGDefsElement()SVGDescElement: SVGDescElement()SVGDiscardElement: SVGDiscardElement()SVGElement: SVGElement()SVGEllipseElement: SVGEllipseElement()SVGFEBlendElement: SVGFEBlendElement()SVGFEColorMatrixElement: SVGFEColorMatrixElement()SVGFEComponentTransferElement: SVGFEComponentTransferElement()SVGFECompositeElement: SVGFECompositeElement()SVGFEConvolveMatrixElement: SVGFEConvolveMatrixElement()SVGFEDiffuseLightingElement: SVGFEDiffuseLightingElement()SVGFEDisplacementMapElement: SVGFEDisplacementMapElement()SVGFEDistantLightElement: SVGFEDistantLightElement()SVGFEDropShadowElement: SVGFEDropShadowElement()SVGFEFloodElement: SVGFEFloodElement()SVGFEFuncAElement: SVGFEFuncAElement()SVGFEFuncBElement: SVGFEFuncBElement()SVGFEFuncGElement: SVGFEFuncGElement()SVGFEFuncRElement: SVGFEFuncRElement()SVGFEGaussianBlurElement: SVGFEGaussianBlurElement()SVGFEImageElement: SVGFEImageElement()SVGFEMergeElement: SVGFEMergeElement()SVGFEMergeNodeElement: SVGFEMergeNodeElement()SVGFEMorphologyElement: SVGFEMorphologyElement()SVGFEOffsetElement: SVGFEOffsetElement()SVGFEPointLightElement: SVGFEPointLightElement()SVGFESpecularLightingElement: SVGFESpecularLightingElement()SVGFESpotLightElement: SVGFESpotLightElement()SVGFETileElement: SVGFETileElement()SVGFETurbulenceElement: SVGFETurbulenceElement()SVGFilterElement: SVGFilterElement()SVGForeignObjectElement: SVGForeignObjectElement()SVGGElement: SVGGElement()SVGGeometryElement: SVGGeometryElement()SVGGradientElement: SVGGradientElement()SVGGraphicsElement: SVGGraphicsElement()SVGImageElement: SVGImageElement()SVGLength: SVGLength()SVGLengthList: SVGLengthList()SVGLineElement: SVGLineElement()SVGLinearGradientElement: SVGLinearGradientElement()SVGMPathElement: SVGMPathElement()SVGMarkerElement: SVGMarkerElement()SVGMaskElement: SVGMaskElement()SVGMatrix: SVGMatrix()SVGMetadataElement: SVGMetadataElement()SVGNumber: SVGNumber()SVGNumberList: SVGNumberList()SVGPathElement: SVGPathElement()SVGPatternElement: SVGPatternElement()SVGPoint: SVGPoint()SVGPointList: SVGPointList()SVGPolygonElement: SVGPolygonElement()SVGPolylineElement: SVGPolylineElement()SVGPreserveAspectRatio: SVGPreserveAspectRatio()SVGRadialGradientElement: SVGRadialGradientElement()SVGRect: SVGRect()SVGRectElement: SVGRectElement()SVGSVGElement: SVGSVGElement()SVGScriptElement: SVGScriptElement()SVGSetElement: SVGSetElement()SVGStopElement: SVGStopElement()SVGStringList: SVGStringList()SVGStyleElement: SVGStyleElement()SVGSwitchElement: SVGSwitchElement()SVGSymbolElement: SVGSymbolElement()SVGTSpanElement: SVGTSpanElement()SVGTextContentElement: SVGTextContentElement()SVGTextElement: SVGTextElement()SVGTextPathElement: SVGTextPathElement()SVGTextPositioningElement: SVGTextPositioningElement()SVGTitleElement: SVGTitleElement()SVGTransform: SVGTransform()SVGTransformList: SVGTransformList()SVGUnitTypes: SVGUnitTypes()SVGUseElement: SVGUseElement()SVGViewElement: SVGViewElement()SVGViewSpec: SVGViewSpec()Screen: Screen()ScreenOrientation: ScreenOrientation()ScriptProcessorNode: ScriptProcessorNode()SecurityPolicyViolationEvent: SecurityPolicyViolationEvent()Selection: Selection()ServiceWorker: ServiceWorker()ServiceWorkerContainer: ServiceWorkerContainer()ServiceWorkerMessageEvent: ServiceWorkerMessageEvent()ServiceWorkerRegistration: ServiceWorkerRegistration()Set: Set()ShadowRoot: ShadowRoot()SharedWorker: SharedWorker()SiteBoundCredential: SiteBoundCredential()SourceBuffer: SourceBuffer()SourceBufferList: SourceBufferList()SpeechSynthesisEvent: SpeechSynthesisEvent()SpeechSynthesisUtterance: SpeechSynthesisUtterance()Storage: Storage()StorageEvent: StorageEvent()String: String()StyleSheet: StyleSheet()StyleSheetList: StyleSheetList()SubtleCrypto: SubtleCrypto()Symbol: Symbol()SyncManager: SyncManager()SyntaxError: SyntaxError()Text: Text()TextDecoder: TextDecoder()TextEncoder: TextEncoder()TextEvent: TextEvent()TextMetrics: TextMetrics()TextTrack: TextTrack()TextTrackCue: TextTrackCue()TextTrackCueList: TextTrackCueList()TextTrackList: TextTrackList()TimeRanges: TimeRanges()Touch: Touch()TouchEvent: TouchEvent()TouchList: TouchList()TrackEvent: TrackEvent()TransitionEvent: TransitionEvent()TreeWalker: TreeWalker()TypeError: TypeError()UIEvent: UIEvent()URIError: URIError()URL: URL()URLSearchParams: URLSearchParams()Uint8Array: Uint8Array()Uint8ClampedArray: Uint8ClampedArray()Uint16Array: Uint16Array()Uint32Array: Uint32Array()VTTCue: VTTCue()ValidityState: ValidityState()WaveShaperNode: WaveShaperNode()WeakMap: WeakMap()WeakSet: WeakSet()WebGLActiveInfo: WebGLActiveInfo()WebGLBuffer: WebGLBuffer()WebGLContextEvent: WebGLContextEvent()WebGLFramebuffer: WebGLFramebuffer()WebGLProgram: WebGLProgram()WebGLRenderbuffer: WebGLRenderbuffer()WebGLRenderingContext: WebGLRenderingContext()WebGLShader: WebGLShader()WebGLShaderPrecisionFormat: WebGLShaderPrecisionFormat()WebGLTexture: WebGLTexture()WebGLUniformLocation: WebGLUniformLocation()WebKitAnimationEvent: AnimationEvent()WebKitCSSMatrix: WebKitCSSMatrix()WebKitMutationObserver: MutationObserver()WebKitTransitionEvent: TransitionEvent()WebSocket: WebSocket()WheelEvent: WheelEvent()Window: Window()Worker: Worker()XMLDocument: XMLDocument()XMLHttpRequest: XMLHttpRequest()XMLHttpRequestEventTarget: XMLHttpRequestEventTarget()XMLHttpRequestUpload: XMLHttpRequestUpload()XMLSerializer: XMLSerializer()XPathEvaluator: XPathEvaluator()XPathExpression: XPathExpression()XPathResult: XPathResult()XSLTProcessor: XSLTProcessor()alert: alert()applicationCache: ApplicationCacheatob: atob()blur: ()btoa: btoa()caches: CacheStoragecancelAnimationFrame: cancelAnimationFrame()cancelIdleCallback: cancelIdleCallback()captureEvents: captureEvents()chrome: ObjectclearInterval: clearInterval()clearTimeout: clearTimeout()clientInformation: Navigatorclose: ()closed: falseconfigData: Objectconfirm: confirm()console: ObjectcreateImageBitmap: createImageBitmap()crypto: CryptocustomElements: CustomElementRegistrydecodeURI: decodeURI()decodeURIComponent: decodeURIComponent()defaultStatus: ""defaultstatus: ""devicePixelRatio: 1document: documentencodeURI: encodeURI()encodeURIComponent: encodeURIComponent()escape: escape()eval: eval()event: undefinedexternal: Externalfetch: fetch()find: find()focus: ()frameElement: nullframes: Windowfunc: func()getComputedStyle: getComputedStyle()getMatchedCSSRules: getMatchedCSSRules()getSelection: getSelection()history: HistoryindexedDB: IDBFactoryinnerHeight: 638innerWidth: 808isFinite: isFinite()isNaN: isNaN()isSecureContext: truelength: 1localStorage: Storagelocation: Locationlocationbar: BarPropmatchMedia: matchMedia()menubar: BarPropmoveBy: moveBy()moveTo: moveTo()name: ""navigator: NavigatoroffscreenBuffering: trueonabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonbeforeunload: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncuechange: nullondblclick: nullondevicemotion: nullondeviceorientation: nullondeviceorientationabsolute: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonhashchange: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonlanguagechange: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonmessage: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonoffline: nullononline: nullonpagehide: nullonpageshow: nullonpause: nullonplay: nullonplaying: nullonpopstate: nullonprogress: nullonratechange: nullonrejectionhandled: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonshow: nullonstalled: nullonstorage: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitionend: nullonunhandledrejection: nullonunload: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkittransitionend: nullonwheel: nullopen: open()openDatabase: openDatabase()opener: nullouterHeight: 728outerWidth: 1366pageXOffset: 0pageYOffset: 0parent: WindowparseFloat: parseFloat()parseInt: parseInt()performance: Performancepersonalbar: BarProppostMessage: ()print: print()prompt: prompt()releaseEvents: releaseEvents()requestAnimationFrame: requestAnimationFrame()requestIdleCallback: requestIdleCallback()resizeBy: resizeBy()resizeTo: resizeTo()screen: ScreenscreenLeft: 0screenTop: 0screenX: 0screenY: 0scroll: scroll()scrollBy: scrollBy()scrollTo: scrollTo()scrollX: 0scrollY: 0scrollbars: BarPropself: WindowsessionStorage: StoragesetInterval: setInterval()setTimeout: setTimeout()speechSynthesis: SpeechSynthesisstatus: ""statusbar: BarPropstop: stop()styleMedia: StyleMediatoolbar: BarProptop: Windowundefined: undefinedunescape: unescape()webkitAudioContext: AudioContext()webkitCancelAnimationFrame: webkitCancelAnimationFrame()webkitCancelRequestAnimationFrame: webkitCancelRequestAnimationFrame()webkitIDBCursor: IDBCursor()webkitIDBDatabase: IDBDatabase()webkitIDBFactory: IDBFactory()webkitIDBIndex: IDBIndex()webkitIDBKeyRange: IDBKeyRange()webkitIDBObjectStore: IDBObjectStore()webkitIDBRequest: IDBRequest()webkitIDBTransaction: IDBTransaction()webkitIndexedDB: IDBFactorywebkitMediaStream: MediaStream()webkitOfflineAudioContext: OfflineAudioContext()webkitRTCPeerConnection: RTCPeerConnection()webkitRequestAnimationFrame: webkitRequestAnimationFrame()webkitRequestFileSystem: webkitRequestFileSystem()webkitResolveLocalFileSystemURL: webkitResolveLocalFileSystemURL()webkitSpeechGrammar: SpeechGrammar()webkitSpeechGrammarList: SpeechGrammarList()webkitSpeechRecognition: SpeechRecognition()webkitSpeechRecognitionError: SpeechRecognitionError()webkitSpeechRecognitionEvent: SpeechRecognitionEvent()webkitStorageInfo: DeprecatedStorageInfowebkitURL: URL()window: Window__proto__: Window

 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 Func is the method'func()'
 
 *  obj.func(); //what is the output? try to explain why.
 Will print the obj  object because 'this' in the function 'func' now points to the obj object not the windows object
 
 *  obj.func.bind(window)(); // what is the output? why?
 It will display the windows object because the function 'func' is now bound to the windows object and not 'obj' object

 *  obj.func.bind(this)();  // what is the output? why?
 It prints out the windows object because 'this' binds the 'func' to the windows object
 
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */
This will print out the 'people' object because 'func' is now bound to 'people' object

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}

document.write(titleCase("I'm a little tea pot"));


/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */

/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 localStorage and sessionStorage both extend Storage. There is no difference between them except for the intended "non-persistence" of sessionStorage.

That is, the data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.

For sessionStorage, changes are only available per window (or tab in browsers like Chrome and Firefox). Changes made are saved and available for the current page,
  as well as future visits to the site on the same window. Once the window is closed, the storage is deleted.
 */*
 * Created by Jerry on 2016-10-22.
 */
