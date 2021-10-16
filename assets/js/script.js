function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var pickDc = document.getElementById("pick-dc").value;

    const fullName = name.split(" ");

    var URL = 'https://careers.ulta.com/careers/jobs?categories=Distribution%20Center%20Associates%7CDistribution%20Center%20Management&page=1&locations=' + pickDc + '&iis=DC_Referral&iisn=' + email + ',' + id + ',' + fullName;
    
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
        alert('Fill all inputs')
    }
}

function copyLink() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var pickDc = document.getElementById("pick-dc").value;

    if(name.length == 0 || email.length == 0 || id.length == 0) {
        alert('Fill all inputs')
    }
    else {
        var copyTextarea = document.getElementById('copyLink');
        copyTextarea.focus();
        copyTextarea.select();
      
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
        alert('Fill all inputs')
    }
    else {
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