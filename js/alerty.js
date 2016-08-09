function aa() {
    $('#recivesection').click(
        function () {
            if($('.recivelist').css('display')=="none"){

                $('.recivelist').css('display','block')
            }else{
                $('.recivelist').css('display','none')
            }
        }
    )
    $('.lm-one span').click(
        function () {
            var lmB=$(this).attr('class')
            $('.lm-two').css('display','none')
            $("#"+lmB).css('display','block')
            $('.lm-three').css('display','none')
        }
    )
    $('.lm-two span').click(
        function () {
            var lmC=$(this).attr('class')
            $('.lm-three').css('display','none')
            $("#"+lmC).css('display','block')
        }
    )
    $('#bmsearch').click(
        function () {
            var bmvaluey=$('#bmvalue').val()
            var bmvaluex=bmvaluey.trim()
            $('.lm-all span').each(
                function () {
                    // alert($(this).attr('class'))
                    if($(this).text()==bmvaluex){
                        var lmSelect=$(this).attr('class')
                        if(lmSelect.length==4){
                            var lmSelectone=lmSelect[0]+lmSelect[1]
                            var lmSelecttwo=lmSelect[0]+lmSelect[1]+lmSelect[2]+lmSelect[3]
                            $('.lm-two').css('display','none');
                            $('.lm-three').css('display','none');
                            $('.lm-all span').css('color','#000000')
                            $(this).css('color','#c91306')
                            $("#"+lmSelectone).css('display','block')
                        }else if(lmSelect.length==6){
                            var lmSelectone=lmSelect[0]+lmSelect[1]
                            var lmSelecttwo=lmSelect[0]+lmSelect[1]+lmSelect[2]+lmSelect[3]
                            $('.lm-two').css('display','none');
                            $('.lm-three').css('display','none')
                            $("#"+lmSelectone).css('display','block')
                            $("#"+lmSelecttwo).css('display','block')
                            $('.lm-all span').css('color','#000000')
                            $(this).css('color','#c91306')
                        }
                    }
                }
            )
            // $('.lm-all span').each(
            //     function () {
            //         if(bmvalue=$(this).text()){
            //             $(this).attr('class')
            //         }
            //     }
            // )
        }
    )
}
aa();
