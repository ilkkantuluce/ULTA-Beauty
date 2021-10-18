function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var pickDc = document.getElementById("pick-dc").value;

    const fullName = name.split(" ");

    var URL = 'https://careers.ulta.com/careers/jobs?categories=Distribution%20Center%20Associates%7CDistribution%20Center%20Management&page=1&locations=' + pickDc + '&iis=DC_Referral&iisn=' + email + ',' + id + ',' + fullName;
    
    if(name.length > 1) {
        document.getElementById("name").style = 'border: 1px solid #8692A6'
    }
    if(email.length > 1) {
        document.getElementById("email").style = 'border: 1px solid #8692A6'
    }
    if(id.length > 1) {
        document.getElementById("id").style = 'border: 1px solid #8692A6'
    }
    if(name.length == 0 || email.length == 0 || id.length == 0) {
        var link = document.getElementById('link');
        link.href = 'javascript:;'
        link.target = ''
    }
    else {
        document.getElementById("copyLink").value = URL;
        var link = document.getElementById('link');
        link.href = URL
        link.target = '_blank'
    }

}

function link() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var pickDc = document.getElementById("pick-dc").value;

    if(name.length == 0 || email.length == 0 || id.length == 0) {
        if(name.length == 0) {
            document.getElementById("name").style = 'border: 1px solid #E7414C'
        }
        if(email.length == 0) {
            document.getElementById("email").style = 'border: 1px solid #E7414C'
        }
        if(id.length == 0) {
            document.getElementById("id").style = 'border: 1px solid #E7414C'
        }
    }
}

function copyLink() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var pickDc = document.getElementById("pick-dc").value;

    if(name.length == 0 || email.length == 0 || id.length == 0) {
        if(name.length == 0) {
            document.getElementById("name").style = 'border: 1px solid #E7414C'
        }
        if(email.length == 0) {
            document.getElementById("email").style = 'border: 1px solid #E7414C'
        }
        if(id.length == 0) {
            document.getElementById("id").style = 'border: 1px solid #E7414C'
        }
    }
    else {
        var copyTextarea = document.getElementById('copyLink');
        copyTextarea.focus();
        copyTextarea.select();

        document.getElementById("name").style = 'border: 1px solid #8692A6'
        document.getElementById("email").style = 'border: 1px solid #8692A6'
        document.getElementById("id").style = 'border: 1px solid #8692A6'

        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
        } catch (err) {
          console.log('Oops, unable to copy');
        }


    }
    
}


const shareBtn = document.querySelector('#shareBtn');
shareBtn.onclick = async function() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var pickDc = document.getElementById("pick-dc").value;

    var shareText = document.getElementById("copyLink").value;

    if(name.length == 0 || email.length == 0 || id.length == 0) {
        if(name.length == 0) {
            document.getElementById("name").style = 'border: 1px solid #E7414C'
        }
        if(email.length == 0) {
            document.getElementById("email").style = 'border: 1px solid #E7414C'
        }
        if(id.length == 0) {
            document.getElementById("id").style = 'border: 1px solid #E7414C'
        }
    }
    else {

        document.getElementById("name").style = 'border: 1px solid #8692A6'
        document.getElementById("email").style = 'border: 1px solid #8692A6'
        document.getElementById("id").style = 'border: 1px solid #8692A6'

        if(navigator.share) {
            const shareData = {
              url: shareText
            };
                await navigator.share(shareData);
                console.log('Share Successfull');
            } else {
                alert('Web Share not supported');
          }
    }

  
}



var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);