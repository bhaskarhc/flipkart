function test(p) {
    return p
}


function functionOneo() { alert('You clicked the top text'); }

function init() {
    let loSt = localStorage.getItem("commenttext");
    let present = localStorage.getItem("textP")
    console.log(present);


    if (present == "true") {
        document.getElementById('member').style.display = "none"
        document.getElementById('combtn').style.display = "none"
        document.getElementById("comtxt").innerHTML = loSt
        document.getElementById('acBtn').style.display = "block"
    } else {
        document.getElementById('member').style.display = "block"
        document.getElementById('combtn').style.display = "block"
        document.getElementById('comtxt').style.display = "none"
        document.getElementById('acBtn').style.display = "none"
    }
}

function submitComment() {
    let value = document.getElementById("member").value
    if (value != "") {
        localStorage.setItem("commenttext", value);
        localStorage.setItem("textP", "true");
        document.getElementById("comtxt").innerHTML = localStorage.getItem("commenttext")
        document.getElementById('member').style.display = "none"
        document.getElementById('comtxt').style.display = "block"
        init();
    } else {
        alert("pls fill the comment");
    }
}

function remove(att) {
    localStorage.setItem("commenttext", "");
    localStorage.setItem("textP", "false");
    init();
    alert("comment Removed")
}
function edit(att) {
    localStorage.setItem("commenttext", "");
    localStorage.setItem("textP", "false");
    init();
}

function reply(attr) {
    console.log(attr);

    var inputtxt = document.createElement('input');
    inputtxt.setAttribute('type', 'text')
    inputtxt.setAttribute('id', 'reply' + attr);
    document.getElementById('replyC').appendChild(inputtxt);

    var submitButton = document.createElement('button');
    submitButton.setAttribute('onClick', `submitreply('reply${attr}')`);
    submitButton.innerHTML = "submit reply"
    document.getElementById('replyC').appendChild(submitButton);
}
function submitreply(attr) {
    console.log(attr);

    let textfield = document.getElementById(attr).value
    console.log(textfield);

    if (textfield != '') {
        var h4 = document.createElement('h4');
        h4.setAttribute('id', attr + 'del')
        h4.innerHTML = textfield
        document.getElementById('replyC').appendChild(h4);
        localStorage.setItem(attr + 'del', textfield)

        let delBtn = document.createElement('button');
        delBtn.setAttribute('class', 'btn btn-text text-danger')
        delBtn.setAttribute('id', 'btn' + attr + 'del')
        delBtn.setAttribute('onClick', `delreply('${attr}del')`)
        delBtn.innerHTML = "del reply"
        document.getElementById('replyC').appendChild(delBtn);

        let reply = document.createElement('button');
        reply.setAttribute('onClick', `reply(${attr})`)
        reply.setAttribute('class', 'btn btn-text text-primary')
        reply.innerHTML = "reply"
        document.getElementById('replyC').appendChild(reply);
    } else {
        alert('plz provide text in input field')
    }

}

function delreply(attr) {
    document.getElementById(attr).remove()
    document.getElementById('btn' + attr).remove()
}









// function addComment() {
//     container = document.getElementById("form-comment").value
//     var newdiv = document.createElement('div');
//     newdiv.innerHTML = "Entry <br><input type='text' name='myInputs[]'>";
//     document.getElementById(divName).appendChild(newdiv);
// }

// var counter = 1;
// var limit = 3;
// function addInput(divName) {
//     if (counter == limit) {
//         alert("You have reached the limit of adding " + counter + " inputs");
//     }
//     else {
//         var newdiv = document.createElement('div');
//         newdiv.innerHTML = "Entry " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
//         document.getElementById(divName).appendChild(newdiv);
//         counter++;
//     }
// }
// function showhideMore(dt) {
//     let text = document.getElementById("comment-box").value
//     console.log(text);

//         // document.getElementById("more-section").style.display = "block"
// }