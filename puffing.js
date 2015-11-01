function puffing(element, time_ms) {
    //複製に必要な値を元となる要素から取得してくる
    var clone_element = $(element).clone();
    var position_element = $(element).offset();
    var width_element = $(element).width();
    var height_element = $(element).height();

    //複製した要素のcssを変更。
    //元となる要素と同じ位置にセットする
    clone_element.css({
        left:     position_element.left,
        top:      position_element.top,
        width:    width_element,
        height:   height_element,
        position: 'absolute'
    }).appendTo(document.body);

    //エフェクト完了後、複製した要素を削除
    $(clone_element).toggle( "puff", time_ms, function(){
        $(clone_element).remove();
    });
}