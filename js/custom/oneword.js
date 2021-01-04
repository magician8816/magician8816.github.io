 //fetch('https://v1.hitokoto.cn?c=a&c=b&c=c&c=d&c=h&c=i&c=k&c=l')
fetch('https://v1.hitokoto.cn?c=a&c=b&c=c&c=d&c=h&c=b&c=i')
    .then(function (res){
      return res.json();
    })

    .then(function (data) {
      var poem = document.getElementById('poem');
      poem.innerText = data.hitokoto;

      var info = document.getElementById('info');
      if(data.from_who == undefined && data.from == undefined){
		info.innerText = "";
      }
      else if(data.from_who == undefined && data.from != null){
		info.innerText = "《 " + data.from + " 》";
      }
	  else if(data.from_who != null && data.from == undefined){
		info.innerText = data.from_who;
	  }
      else if(data.from_who == data.from){
		info.innerText = data.from;
      }
      else
		info.innerText = data.from_who + " · " + "《 " + data.from + " 》";
    })

    .catch(function (err) {
      console.error(err);
    })
