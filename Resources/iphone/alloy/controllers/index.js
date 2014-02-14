function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Buttons",
        id: "__alloyId2"
    });
    $.__views.buttonsNormalTopLeft = Ti.UI.createButton({
        top: 5,
        left: 10,
        title: "show alert",
        id: "buttonsNormalTopLeft"
    });
    $.__views.__alloyId2.add($.__views.buttonsNormalTopLeft);
    showAlertDialog ? $.__views.buttonsNormalTopLeft.addEventListener("click", showAlertDialog) : __defers["$.__views.buttonsNormalTopLeft!click!showAlertDialog"] = true;
    var __alloyId4 = [];
    var __alloyId9 = {
        title: "button 1",
        ns: "Alloy.Abstract"
    };
    __alloyId4.push(__alloyId9);
    var __alloyId10 = {
        title: "button 2",
        ns: "Alloy.Abstract"
    };
    __alloyId4.push(__alloyId10);
    var __alloyId11 = {
        title: "button 3",
        ns: "Alloy.Abstract"
    };
    __alloyId4.push(__alloyId11);
    var __alloyId12 = {
        title: "disabled",
        enabled: false,
        ns: "Alloy.Abstract"
    };
    __alloyId4.push(__alloyId12);
    $.__views.buttonsButtonbar = Ti.UI.createButtonBar({
        top: 40,
        left: 10,
        labels: __alloyId4,
        id: "buttonsButtonbar",
        onclick: "showButtonBarIndex"
    });
    $.__views.__alloyId2.add($.__views.buttonsButtonbar);
    var __alloyId14 = [];
    __alloyId14.push("OK");
    __alloyId14.push("cancel");
    $.__views.buttonsAlertDialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId14,
        id: "buttonsAlertDialog",
        title: "title",
        message: "This is my message",
        cancel: "1"
    });
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Buttons",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId18 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "TableViews",
        id: "__alloyId18"
    });
    $.__views.__alloyId20 = Ti.UI.createSearchBar({
        height: "50dp",
        top: "0",
        barColor: "#CCC",
        showCancel: "true",
        color: "#000",
        id: "__alloyId20"
    });
    var __alloyId21 = [];
    $.__views.__alloyId24 = Ti.UI.createView({
        backgroundColor: "#DCDCDC",
        height: "50dp",
        id: "__alloyId24"
    });
    $.__views.__alloyId25 = Ti.UI.createLabel({
        color: "#000",
        text: "HeaderView",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId27 = Ti.UI.createView({
        backgroundColor: "#EEEEEE",
        height: "50dp",
        id: "__alloyId27"
    });
    $.__views.__alloyId28 = Ti.UI.createLabel({
        color: "#000",
        text: "FooterView",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId22 = Ti.UI.createTableViewSection({
        headerView: $.__views.__alloyId24,
        footerView: $.__views.__alloyId27,
        id: "__alloyId22"
    });
    __alloyId21.push($.__views.__alloyId22);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 1",
        id: "__alloyId29"
    });
    $.__views.__alloyId22.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 2",
        id: "__alloyId30"
    });
    $.__views.__alloyId22.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 3",
        id: "__alloyId31"
    });
    $.__views.__alloyId22.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewSection({
        headerTitle: "Section 2",
        id: "__alloyId32"
    });
    __alloyId21.push($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 1",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 2",
        id: "__alloyId34"
    });
    $.__views.__alloyId32.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 3",
        id: "__alloyId35"
    });
    $.__views.__alloyId32.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewSection({
        headerTitle: "Section 3",
        id: "__alloyId36"
    });
    __alloyId21.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 1",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 2",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 3",
        id: "__alloyId39"
    });
    $.__views.__alloyId36.add($.__views.__alloyId39);
    $.__views.__alloyId19 = Ti.UI.createTableView({
        data: __alloyId21,
        search: $.__views.__alloyId20,
        filterattribute: "title",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId17 = Ti.UI.createTab({
        window: $.__views.__alloyId18,
        title: "TableViews",
        id: "__alloyId17"
    });
    __alloyId0.push($.__views.__alloyId17);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var showAlertDialog, showButtonBarIndex;
    showAlertDialog = function() {
        return $.buttonsAlertDialog.show();
    };
    showButtonBarIndex = function(e) {
        return alert("index is " + e.index);
    };
    $.index.open();
    __defers["$.__views.buttonsNormalTopLeft!click!showAlertDialog"] && $.__views.buttonsNormalTopLeft.addEventListener("click", showAlertDialog);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;