function aa() {

    $('#bmsearch').click(
        function () {
            $('#treesearchtext').text("")
            var bmvaluey=$('#bmvalue').val()
            var bmvaluex=bmvaluey.trim()
            if(bmvaluex!=""){
                $('.node_name').each(
                    function () {
                        // alert($(this).attr('class'))
                        var bmvaluez=new RegExp(bmvaluex)
                        if(bmvaluez.test($(this).text())){
                            var id=$(this).attr('id')
                            var text=$(this).text()
                            var html = insertSelectedSr(id,text);
                            $("#treesearchtext").append(html.join(''));
                        }
                    }
                )
            }

        }
    )

}
aa();
