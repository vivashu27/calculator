
	let x=0,sum=0,pro=1,sub=0,ct=0;
	function numbrs(num)
	{
		x=x*10+num;
		document.getElementById("res1").innerHTML=x;
		return x;
	}
	function reduce()
	{
		x=Math.floor(x/10);	
		document.getElementById("res1").innerHTML=x;
		return x;
	}
	function sum1()
	{
		ct=1;
		sum=sum+x;		
		
		let vt="+";
		if(x!=0)
		{
		prev=sum;
		}
		x=0;
		document.getElementById("res1").innerHTML=vt;
		return prev;
	}
	function mult()
	{
		ct=2;
		pro=pro*x;

		if(x!=0)
		{
		prev=pro;
		}
		x=0;
		let vt="*";
		document.getElementById("res1").innerHTML=vt;
		return prev;
	}
	function subs()
	{
		ct=3;	
		sub=x-sub;
		if(x!=0)
		{
		prev=sub;
		}
		x=0;
		let vt="-";
		document.getElementById("res1").innerHTML=vt;
		return prev;

		
	}
	function dive()
	{
		ct=4;
		div=x;			
		if(x!=0)
		{
		prev=div;
		}
		x=0;
		let vt="/";
		document.getElementById("res1").innerHTML=vt;
		return prev;
	}
	function cl()
	{
		document.getElementById("res").innerHTML=0;
		document.getElementById("res1").innerHTML=0;
		sum=0;
		pro=1;
		prev=0;
		sub=0;
		x=0;
	}

	function result()
	{

		if(ct==1)
		{
			sum=prev+x;
			document.getElementById("res").innerHTML=sum;
			prev=sum;
		}
		if(ct==2)
		{
			pro=prev*x;
			document.getElementById("res").innerHTML=pro;
			prev=pro;
		}
		if(ct==3)
		{
			sub=prev-x;
			document.getElementById("res").innerHTML=sub;
			prev=sub;
		}
		if(ct==4)
		{
			if(x==0)
			{
				document.getElementById("res").innerHTML="infinity looks like ur pussy!!";
			}
			else
			{
			div=prev/x;
			document.getElementById("res").innerHTML=div;
			prev=div;
		}
		}
		x=0;
	}
