// THIS FILE WAS AUTOGENERATED
/// <reference path="../../External/qunit.d.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/DataPoint.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/MetricData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/RemoteDependencyData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/RequestData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/StackFrame.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/ExceptionDetails.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/ExceptionData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/MessageData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/EventData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/PageViewData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/PageViewPerfData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/AvailabilityData.ts" />
QUnit.test("Test property ExceptionDetails.id was created and default is set", function () {
    var temp = new AI.ExceptionDetails();
    QUnit.ok(temp.id !== null, "ExceptionDetails.id == null");
});

QUnit.test("Test property ExceptionDetails.outerId was created and default is set", function () {
    var temp = new AI.ExceptionDetails();
    QUnit.ok(temp.outerId !== null, "ExceptionDetails.outerId == null");
});

QUnit.test("Test property ExceptionDetails.typeName was created and default is set", function () {
    var temp = new AI.ExceptionDetails();
    QUnit.ok(temp.typeName !== null, "ExceptionDetails.typeName == null");
});

QUnit.test("Test property ExceptionDetails.message was created and default is set", function () {
    var temp = new AI.ExceptionDetails();
    QUnit.ok(temp.message !== null, "ExceptionDetails.message == null");
});

QUnit.test("Test property ExceptionDetails.hasFullStack was created and default is set", function () {
    var temp = new AI.ExceptionDetails();
    QUnit.ok(temp.hasFullStack !== null, "ExceptionDetails.hasFullStack == null");
    QUnit.ok(temp.hasFullStack === true, "Issue with ExceptionDetails.hasFullStack");
});

QUnit.test("Test property ExceptionDetails.stack was created and default is set", function () {
    var temp = new AI.ExceptionDetails();
    QUnit.ok(temp.stack !== null, "ExceptionDetails.stack == null");
});

QUnit.test("Test property ExceptionDetails.parsedStack was created and default is set", function () {
    var temp = new AI.ExceptionDetails();
    QUnit.ok(temp.parsedStack !== null, "ExceptionDetails.parsedStack == null");
});

