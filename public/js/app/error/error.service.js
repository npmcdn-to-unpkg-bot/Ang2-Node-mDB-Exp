"use strict";
var core_1 = require("@angular/core");
var error_1 = require("./error");
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccurred = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_1.Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    };
    return ErrorService;
}());
exports.ErrorService = ErrorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yL2Vycm9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxzQkFBc0IsU0FBUyxDQUFDLENBQUE7QUFFaEM7SUFBQTtRQUNJLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFTLENBQUM7SUFNOUMsQ0FBQztJQUpHLGtDQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ2xCLElBQU0sU0FBUyxHQUFHLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9CQUFZLGVBT3hCLENBQUEiLCJmaWxlIjoiZXJyb3IvZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRXJyb3IgfSBmcm9tIFwiLi9lcnJvclwiO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNlIHtcbiAgICBlcnJvck9jY3VycmVkID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gbmV3IEVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvck9jY3VycmVkLmVtaXQoZXJyb3JEYXRhKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
