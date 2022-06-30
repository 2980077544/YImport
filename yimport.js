(function yimport(){
var inner = new ZInnerHtml();
window.UploadImports=function(){
let x = document.querySelectorAll("import[src]");
for(let i of x) $(document).ready(function(){
  UploadImport(i);
});
};
window.AutoImports=function(rootcss){
  $(rootcss).on('DOMNodeInserted',function(e){
    //console.log('AutoImport启动')
    if(e.target.tagName=='import') UploadImport(e.target);
  });
};
window.UploadImport=function(i){
  $.ajax({
    url:i.getAttribute("src"),
    type:"GET",
    success:function (result) {
      console.info("此import元素加载完成");
      //i.innerHTML=result;
      if(!i.hasAttribute("id")){
        i.setAttribute("id","c2urandid__"+Math.random());
        inner.set(i.getAttribute("id"), result);
        i.removeAttribute("id");
      }else{
        inner.set(i.getAttribute("id"), result);
      }
      mdui.mutation();
      mdui.updateTables();
      if(i.hasAttribute("js")){
        $.getScript(i.getAttribute("js"));
        i.removeAttribute("js");
      }
      mdui.mutation();
      mdui.updateTables();
    },
    error:function(err){
      console.warn("import元素加载失败");
      let notext="<font color=red style='border-style:inset;border-color:red'>X 插件加载失败</font>";
      if(!i.hasAttribute("id")){
        i.setAttribute("id","c2urandid__"+Math.random());
        inner.set(i.getAttribute("id"), notext);
        i.removeAttribute("id");
      }else{
        inner.set(i.getAttribute("id"), notext);
      }
    }
  });
  i.removeAttribute("src");
};
})();
