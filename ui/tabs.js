KityMinder.registerUI('tabs', function(minder) {
    var $tab = new FUI.Tabs({
        buttons: ['idea', 'appearence', 'view'].map(function(key) {
            return minder.getLang('ui.tabs.' + key);
        })
    });

    var $header = $('<div id="tab-select"></div>').appendTo('#panel');
    var $container = $('<div id="tab-container"></div>');

    $('#panel').after($container);

    $tab.appendButtonTo($header[0]);
    $tab.appendPanelTo($container[0]);

    // 隐藏效果
    var lastIndex = 0;
    $tab.on('tabsselect', function(e, info) {
        if (info.index == lastIndex) {
            $container.toggleClass('collapsed');
            $header.toggleClass('collapsed');
        } else {
            $container.removeClass('collapsed');
            $header.removeClass('collapsed');
        }
        lastIndex = info.index;
    });

    $tab.idea = $tab.getPanel(0);
    $tab.edit = $tab.getPanel(1);
    $tab.view = $tab.getPanel(2);

    return $tab;
});