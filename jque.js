  function submitToAPI(e) {
        console.log("submitworked")
        var name = $("#name-input").val();
        var phone = $("#phone-input").val();
        var email = $("#email-input").val();
        var desc = $("#notes-input").val();
        var data = {
            name: name,
            phone: phone,
            email: email,
            desc: desc
        };
        console.log(name + phone + email + desc)
        e.preventDefault();
        var URL = "https://j8s2u5gmpf.execute-api.us-east-2.amazonaws.com/prod/contact-id-form2";

    // var Namere = /[A-Za-z]{1}[A-Za-z]/;
    // if (!Namere.test($("#name-input").val())) {
    //     alert("Name can not less than 2 char");
    // return;
    //     }
    // var mobilere = /[0-9]{10}/;
    // if (!mobilere.test($("#phone-input").val())) {
    //     alert("Please enter valid mobile number");
    // return;
    //     }
    // if ($("#email-input").val()=="") {
    //     alert("Please enter your email id");
    // return;
    //     }

    // var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2, 6})?$/;
    // if (!reeamil.test($("#email-input").val())) {
    //     alert("Please enter valid email address");
    // return;
    //     }


    $.ajax({
        type: "PUT",
        url: "https://j8s2u5gmpf.execute-api.us-east-2.amazonaws.com/prod/contact-id-form2",
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),


    success: function () {
        // clear form and show a success message
        alert("You are Signed up!");
    document.getElementById("contact-form").reset();
    location.reload();
            },
    error: function () {
        // show an error message
        alert("UnSuccessful");
            }
        });
} function submitToAPI(e) {
    console.log("submitworked")
    var name = $("#name-input").val();
    var phone = $("#phone-input").val();
    var email = $("#email-input").val();
    var desc = $("#notes-input").val();
    var data = {
        name: name,
        phone: phone,
        email: email,
        desc: desc
    };
    console.log(name + phone + email + desc)
    e.preventDefault();
    var URL = "https://j8s2u5gmpf.execute-api.us-east-2.amazonaws.com/prod/contact-id-form2";

    // *******test for form data************
    // var Namere = /[A-Za-z]{1}[A-Za-z]/;
    // if (!Namere.test($("#name-input").val())) {
    //     alert("Name can not less than 2 char");
    // return;
    //     }
    // var mobilere = /[0-9]{10}/;
    // if (!mobilere.test($("#phone-input").val())) {
    //     alert("Please enter valid mobile number");
    // return;
    //     }
    // if ($("#email-input").val()=="") {
    //     alert("Please enter your email id");
    // return;
    //     }

    // var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2, 6})?$/;
    // if (!reeamil.test($("#email-input").val())) {
    //     alert("Please enter valid email address");
    // return;
    //     }
    // ********************************************


    $.ajax({
        type: "PUT",
        url: "https://j8s2u5gmpf.execute-api.us-east-2.amazonaws.com/prod/contact-id-form2",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            // clear form and show a success message
            alert("Successful");
            location.reload();
        },
        error: function () {
            // show an error message
            alert("UnSuccessful");
        }
    });
}
function submitToHubSpot(e) {
        console.log("submitHubspot")
        var scale = $("#meeting-rating").val();
        var followUp = $("#follow-up-q").val();
        var creditPractice = $("#credit-practice-q").val();
        var marketing = $("#marketing-q").val();
        var injectables = $("#injectables-q").val();
        var aesthetics = $("#aesthetics-q").val();
        var patientCount = $("#patient-count-q").val();
        var soloOwner = $("#solo-owner-q").val();
        var meetAgain = $("#meet-again-q").val();
        var reachOut = $("#reach-out-q").val();
        var desc_data = {
            scale: scale,
            followUp: followUp,
            creditPractice: creditPractice,
            marketing: marketing,
            injectables: injectables,
            aesthetics:aesthetics,
            patientCount: patientCount,
            soloOwner: soloOwner,
            meetAgain: meetAgain,
            reachOut: reachOut
            
        };
        console.log(scale, followUp, creditPractice, injectables, marketing, aesthetics, patientCount, soloOwner, meetAgain, reachOut)
        e.preventDefault();

       

    $.ajax({
        type: "POST",
        url: "https://4tv34v7zo7.execute-api.us-east-2.amazonaws.com/Prod/submitForm",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(desc_data),


        success: function () {
            // clear form and show a success message
            alert("Successful");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function () {
            // show an error message
            alert("UnSuccessful");
        }
    });
}
