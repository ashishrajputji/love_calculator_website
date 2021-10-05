let a ;
let b;
let c;
function love(a,b){
  a = parseInt(a) ;
  b = parseInt(b);
  c = (a+b)*2;
  if(c<100 && c>40){
    document.getElementById('main-p').innerHTML = c;
                    }
  else if (c>=100 && c<140) {
    d = c-41;
    document.getElementById('main-p').innerHTML = d;
                            }
  else if(c>140 && c<165){
    e = 85;
    document.getElementById('main-p').innerHTML = e;
                          }
  else if(c>=165 && c<205){
    e = 87;
    document.getElementById('main-p').innerHTML = e;
                          }
  else if(c>=205 && c<250){
    document.getElementById('main-p').innerHTML = "79";
                          }
  else if(c>249 && c<305){
    e = 90;
    document.getElementById('main-p').innerHTML = e;
                          }
  else if(c>304 && c<399){
    e = 76;
    document.getElementById('main-p').innerHTML = e;
                          }
  else if(c<40){
    document.getElementById('main-p').innerHTML = "60";
                  }
  else if(c>399){
    document.getElementById('main-p').innerHTML = "<b>84</b>";
                }
}
