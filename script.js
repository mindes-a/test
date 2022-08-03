const script = document.createElement('script');
 
script.src = 'https://ipinfo.io?callback=callback';
document.body.appendChild(script);
document.body.removeChild(script);

function callback(data) {

    const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
		let i = document.getElementById("name").value;
	let l = document.getElementById("lovename").value;
	alert("馬鹿正直に名前を入力いただきありがとうございます\nあなたのIPアドレス（"+data.ip+"）"+"からあなたの住んでいる街を特定いたしました。\n"+data.region+"の"+data.city+"にすんでおられる"+i+"さんですね\nあなたの好きな人は"+l+"さんですよね？？"+"私はもうあなたの弱みを握りました。\nうわ！"+data.region+"の"+data.city+"にすんでいる"+i+"さんは"+l+"さんのことがすきなんだ！！"+"\nじゃあみんなにバラしときますｗｗｗ")
	location.href="https://thumb.ac-illust.com/0b/0b2b710ab08e2aa7954a5018bf9dbc94_t.jpeg"	
})
}
