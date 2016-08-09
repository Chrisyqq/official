var tScaner = new ActiveXObject("TScan.Scaner");

function selscan() {
    tScaner.SelectScanner();
}

var scanidx=1;
function scanClick() {
    scanidx = 1;
    scanSubmit();
}

function scanSubmit() {
    //tScaner.JpegQuality = 30; //jpg图像质量
    //tScaner.ScanImageLeft=10; //扫描图像的位置（厘米）
    //tScaner.ScanImageTop=10; //扫描图像的位置（厘米）
    //tScaner.ScanImageWidth=20.0;//扫描图像的宽度 厘米
    //tScaner.ScanImageHeight=10.2;//扫描图像的高度 厘米
    if (tScaner.Scan($("#cbo_set").is(":checked")&&scanidx==1) == 0) {  //仅在第一次扫描时显示设置界面//tScaner.Scan(true) //扫描前显示扫描设置界面
        var imgBase64 = tScaner.ScanImageData;
        if (imgBase64 != "") {
            //添加到列表
            $("#scanFileList").append("<div id='f_" + scanidx + "' style='width:80px;height:100px;margin-left:2px;float:left;border:solid 1px #ccc;'><img src='' width='80' height='100' /></div>");
            //上传图像
            $.post("fileup.aspx", { img: imgBase64, id: scanidx }, function(dat) {
                $("#f_" + dat.id + " img").attr("src", dat.src);
            }, "json");
        }

        //是否连续扫描
        if ($("#cbo_lxsm").is(":checked")) {
            scanSubmit();
        }
    }
}