function insertSelectedDw(id,text){
		var html = [];
		html.push('<div class="marginR10" style="display:inline-block"><small>'+text+';</small>');
		html.push('<input type="hidden" name="department" value='+id+' />');
		html.push('<button  class="close">&times;</button></div>');
		return html;
	}
function insertSelectedSr(id,text){
	var html = [];
	html.push('<div class="marginR10 SelectedSr" style="display:inline-block">'+text);
	html.push('<input type="hidden" name="department" value='+id+' />');
	html.push('</div></br>');
	return html;
}
	function judgeExist(obj,id){
		var flag = false;
		var len = obj.length;
		if(len>0){
			for(var i=0;i<len;i++){
				if($(obj[i]).val() == id){
					flag= true;
					break;
				}
			}
		}
		return flag;
	}
function getSelectedNode(obj){
	return treeObj.getSelectedNodes();
}