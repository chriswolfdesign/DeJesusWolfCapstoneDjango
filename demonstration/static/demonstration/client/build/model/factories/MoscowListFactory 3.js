"use strict";
/**
 * moscow_list_factory.js
 *
 * The JavaScript class that will allows us to easily autogenerate template
 * lists for a MoSCoW board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (November 3, 2019)
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ListFactory_1 = require("./ListFactory");
var MoscowListFactory = /** @class */ (function (_super) {
    __extends(MoscowListFactory, _super);
    function MoscowListFactory() {
        return _super.call(this) || this;
    } // end constructor
    return MoscowListFactory;
}(ListFactory_1.ListFactory)); // end MoscowListFactory
exports.MoscowListFactory = MoscowListFactory;
