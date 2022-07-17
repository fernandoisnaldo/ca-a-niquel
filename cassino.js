let componente=["毛","中","囯","巴","西","泽","东"];
let pontos=10000;
setPontos();
fillCarretel();
fillCarretel();
fillCarretel();
function jogar(){
  $(".play").hide();
  for (let i=0;i<Math.random()*20000+30000;i++){
    setTimeout(() => {  fillCarretel(); }, 100);
  }
  pontos-=1000;
  setTimeout(() => {  checarVictoria(); }, 5000);
}
function fillCarretel(){
  for (let i=4;i>1;i--){
    for (let j=1;j<4;j++){
      $("#q"+i+j).html($("#q"+(i-1)+j).html());
    }
  }
  for (let i=1;i<4;i++){
    let cel = document.getElementById("q1"+i);
    cel.innerHTML = componente[Math.floor(Math.random()*componente.length)];
  } 
}
function checarVictoria(){
  let a=$("#q21").html();
  let b=$("#q22").html();
  let c=$("#q23").html();
  if(a==b && b==c){
    pontos+=10000;
  }
  else if((a+b+c)=="毛泽东"){
    pontos+=1000000+Math.random()*200000000;
    alert("JACKPOT!!!!");
  }
  else if(a+b=="巴西" || b+c=="巴西"){
    pontos+=5000;
  }
  else if(a+b=="中国" || b+c=="中国"){
    pontos+=5000;
  }
  setPontos();
}
function setPontos(){
  $(".pontos").text(pontos);
  if(pontos>50){
    $(".play").show();
  }
}
