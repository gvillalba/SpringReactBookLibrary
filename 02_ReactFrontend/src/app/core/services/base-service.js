"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var BaseService = /** @class */ (function () {
    function BaseService() {
        this.requests = utils_1.requests;
    }
    BaseService.baseUrl = utils_1.requests.getBaseUrlConfiguration();
    return BaseService;
}());
exports.BaseService = BaseService;
