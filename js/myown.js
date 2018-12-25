$(document).ready(function(){ 

   $('#popup').click(function(){ 
      alert('提交成功，我们已经收到了您的信息！'); 
    });         
   $( 
    $("#ajaxForm").on("submit",function () {  
       $(this).ajaxSubmit(options);   
            return false;   
        })
    )
    var options = {
        url: "url",       
        type: "post",           
        success: successFun,    
        dataType: "json",       
        clearForm: true,        
        resetForm: true,        
        timeout: 3000           
    }
    function successFun(data,status) {
        window.open("http://www.xbjob.com/?tdsourcetag=s_pcqq_aiomsg"); 
    }
})
