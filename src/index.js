/* Author: Niklas Kumpulainen
date: 15.9.2021
Sources:
https://stackoverflow.com/questions/15843581/how-to-correctly-iterate-through-getelementsbyclassname
https://www.geeksforgeeks.org/how-to-remove-specific-div-element-by-using-javascript/
https://stackoverflow.com/questions/8557119/making-a-button-invisible-by-clicking-another-button-in-html/24081487
*/

import "./styles.css";

if (document.readyState !== "loading") {
  initCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initCode();
  });
}

var removecommentmode = false;

function initCode() {
  const addTextButton = document.getElementById("add-comment");
  const removeCommentsButton = document.getElementById("remove-comments");
  const commentArea = document.getElementById("commentarea");
  const commentRatingSelect = document.getElementById("rating-stars");
  const ul = document.getElementById("comment-list");

  addTextButton.addEventListener("click", function () {
    //new comment div
    let newDiv = document.createElement("div");
    newDiv.className = "comment";

    //Comment rating element
    let commentratingDiv = document.createElement("div");
    let commentRating = document.createTextNode(
      commentRatingSelect.value + "/4 stars"
    );
    commentRating.className = "comment-rating";
    commentratingDiv.appendChild(commentRating);

    //Comment text element
    let commentTextDiv = document.createElement("div");
    let commentText = document.createTextNode(commentArea.value);
    commentText.className = "comment-text";
    commentTextDiv.appendChild(commentText);

    //Comment removal button element
    let commentremButtonDiv = document.createElement("div");
    commentremButtonDiv.className = "remove-comment";
    let commentremButton = document.createElement("button");
    commentremButton.innerHTML = "Remove Comment";
    commentremButton.addEventListener("click", function () {
      newDiv.remove();
    });
    //commentremButton.style.display("none");
    commentremButtonDiv.style.visibility = "hidden";
    commentremButtonDiv.appendChild(commentremButton);

    //add elements to div
    newDiv.appendChild(commentratingDiv);
    newDiv.appendChild(commentTextDiv);
    newDiv.appendChild(commentremButtonDiv);

    //add div ul list
    ul.appendChild(newDiv);

    //newListItem.innerHTML = "Comment: ";

    //ul.appendChild(newItem);
    //ul.appendChild(newText);
  });

  removeCommentsButton.addEventListener("click", function () {
    removecommentmode = !removecommentmode;
    var remcommentdivs = document.getElementsByClassName("remove-comment");
    for (var i = 0; i < remcommentdivs.length; i++) {
      if (removecommentmode) {
        remcommentdivs[i].style.visibility = "visible";
      } else {
        remcommentdivs[i].style.visibility = "hidden";
      }
    }
  });
}

/*
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
