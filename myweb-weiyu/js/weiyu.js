	$(document).ready(function() {
		$("#pre").click(function() {
			var t_pre=<%=curpage%>;//获取当前页面页码
			if(t_pre==1)
				$(this).attr("href","#");
			else{
				var pre =t_pre-1;		
				$(this).attr("href","fenlei.jsp?page="+pre);//jQuery给属性设置值
			}
		});
	
		$("#next").click(function() {
			var max = <%=totalpage%>;
			var cur=<%=curpage%>;
			if(cur==max)
				$(this).attr("href","#");
			else{
				var pre =cur+1;	
				$(this).attr("href","fenlei.jsp?page="+pre);
			}
		});

	});

