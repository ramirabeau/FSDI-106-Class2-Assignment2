var isItImportant = false;
var detailsVisible = true;

function toggleImportant() {
    if (isItImportant) {
        $("#iconImp").removeClass('fas').addClass('far');
        isItImportant = false;
    } else {
        $("#iconImp").removeClass('far').addClass('fas');
        isItImportant = true;
    }

}

function toggleDetails() {
    if (detailsVisible) {
        $("#secForm").hide();
        $("#iconEye").removeClass('fas').addClass('far');
        /*var syntax = `
        <div class="details">
            <button id="hideDetails" class="btn btn-primary">
                <i id="iconEyeSlash" class="<i class="fas fa-eye-slash"></i>
                </i>Hide Details</button>
        </div>
    `;*/


        /* This will replace the "show details icon" in the html
        <div>
            <button id="hideDetails" class="btn btn-primary">
                <i id="iconEyeSlash" class="<i class="fas fa-eye-slash"></i>
                </i>Hide Details</button>
        </div>*/
        detailsVisible = false;
    } else {
        $("#secForm").show();
        $("#iconEye").removeClass('far').addClass('fas');
        detailsVisible = true;
    }

}

function init() {
    console.log("My Calendar");
    //inside the init, we load data and hook events
    toggleDetails();
    $("#iconImp").click(toggleImportant);
    $("#showDetails").click(toggleDetails);


}



window.onload = init;