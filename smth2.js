
var iframe = document.getElementsByName('f3')[0];    
	//获取显示帖子内容的 iframe//初始化抓取结果，它是一个 HTML ⻚面，因此先把头部以及简单的几个样式放进去
	var page = '<!DOCTYPE html><html><head><title>SMTH</title><style>div {border-top: 1px solid yellowgreen; padding: 10px; color:royalblue;}</style></head><body>';
	//点击打开第一个帖子就可以激活下面的函数执行
	iframe.onload = function(){    
		var innerDoc = iframe.contentDocument || iframe.contentWindow.document;  
		//获取 iframe 里的 document 对象    
		var post = innerDoc.getElementsByClassName('article')[0].innerHTML;      
		//获取帖子内容对应的 HTML 元素    
		page += '<div>'+post.replace(/src="/g, 'src="http://www.2.newsmth.net/')+'</div>';      
		//把当前的帖子内容加入抓取结果的 HTML ⻚面里    
		var next = innerDoc.getElementsByClassName('conPager smaller right')[0].children[1].href;  
		//获取下一个帖子的链接地址    
		if(iframe.src != next) {            //判断是否抓取完成        
			iframe.src = next;      //未完成，把 iframe 的 src 属性变为下一条帖子的链接地址    
		}    
		else{        
			page += '</body></html>';   //已完成，给结果 HTML ⻚面填上结尾标签        
			innerDoc.write(page);       //把 iframe 里的内容替换为结果 HTML ⻚面        
			console.log(page);          //在控制台输出结果 HTML ⻚面的内容，以便用户在编辑器里复制保存为 HTML 文件 
		}
	}
